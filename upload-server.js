// Tiny proxy: receives the participant ZIP from the browser and PUTs it to Nextcloud via WebDAV.
// Credentials stay in .env on this machine; the static page never sees them.
// Run: node upload-server.js   (Node 18+, no dependencies)
const http = require('http');
const fs = require('fs');
const path = require('path');

// --- minimal .env loader ---
try {
  for (const line of fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !line.trim().startsWith('#') && !(m[1] in process.env)) process.env[m[1]] = m[2];
  }
} catch { /* .env optional if vars are already in the environment */ }

const { NEXTCLOUD_WEBDAV_URL, NEXTCLOUD_USERNAME, NEXTCLOUD_APP_PASSWORD } = process.env;
const PORT = Number(process.env.PORT || 8787);
const MAX_BYTES = Number(process.env.MAX_UPLOAD_MB || 100) * 1024 * 1024;
const ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);

if (!NEXTCLOUD_WEBDAV_URL || !NEXTCLOUD_USERNAME || !NEXTCLOUD_APP_PASSWORD || NEXTCLOUD_WEBDAV_URL.includes('<')) {
  console.error('Set NEXTCLOUD_WEBDAV_URL, NEXTCLOUD_USERNAME and NEXTCLOUD_APP_PASSWORD in .env');
  process.exit(1);
}
const BASE = NEXTCLOUD_WEBDAV_URL.replace(/\/+$/, '');
const AUTH = 'Basic ' + Buffer.from(`${NEXTCLOUD_USERNAME}:${NEXTCLOUD_APP_PASSWORD}`).toString('base64');

function cors(req, res) {
  const o = req.headers.origin;
  if (o && ORIGINS.includes(o)) {
    res.setHeader('Access-Control-Allow-Origin', o);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
const send = (res, code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(obj)); };

http.createServer(async (req, res) => {
  cors(req, res);
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  const url = new URL(req.url, 'http://x');
  if (req.method !== 'POST' || url.pathname !== '/upload') return send(res, 404, { error: 'not found' });
  if (!ORIGINS.includes(req.headers.origin || '')) return send(res, 403, { error: 'origin not allowed' });

  const name = url.searchParams.get('name') || '';
  if (!/^nightfast_voice_[A-Za-z0-9]{6}_\d+\.zip$/.test(name)) return send(res, 400, { error: 'bad filename' });

  const chunks = []; let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > MAX_BYTES) return send(res, 413, { error: 'file too large' });
    chunks.push(c);
  }
  const body = Buffer.concat(chunks);
  if (body.length < 4 || body.readUInt32BE(0) !== 0x504b0304) return send(res, 400, { error: 'not a zip' });

  try {
    await fetch(BASE, { method: 'MKCOL', headers: { Authorization: AUTH } }); // 405 = already exists, fine
    const r = await fetch(`${BASE}/${name}`, {
      method: 'PUT', body, headers: { Authorization: AUTH, 'Content-Type': 'application/zip' }
    });
    if (!r.ok) { console.error('Nextcloud PUT', r.status, await r.text()); return send(res, 502, { error: `nextcloud ${r.status}` }); }
    console.log(`uploaded ${name} (${body.length} bytes)`);
    send(res, 200, { ok: true, name });
  } catch (e) {
    console.error(e); send(res, 502, { error: 'nextcloud unreachable' });
  }
}).listen(PORT, () => console.log(`Upload proxy on :${PORT} -> ${BASE}`));
