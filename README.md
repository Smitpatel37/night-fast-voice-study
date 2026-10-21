# NIGHT-FAST Voice Collection Tool

> A standalone, independent voice recording platform for collecting real-world speech samples from participants to evaluate the NIGHT-FAST intent parser.

## Purpose

This tool exists to collect **held-out, unseen voice data** from human participants. The recordings are used to evaluate how well the NIGHT-FAST multi-tier intent parser (Regex → Semantic → LLM) performs on real-world, unrehearsed speech — as opposed to the curated prompt-engineering data the system was designed around.

### Why NOT the Same Data?

Using the same phrases used to build/tune the system would be **data contamination**. The system would appear to have high accuracy simply because it was designed to handle those exact inputs. Reviewers expect evaluation on unseen, naturalistic speech.

## Methodology

1. **Scenario-Based Prompting**: Participants are NOT given verbatim commands to read. They receive **situation descriptions** (e.g., "You need to urgently send blood from the university hospital to the cardiac clinic") and speak their own natural command.

2. **Bilingual Coverage**: Scenarios are presented in German and/or English (participant's choice).

3. **Recording Integrity**:
   - Browser-based recording via the MediaRecorder API, saved as **WebM/Opus** (mono is requested from the microphone) at the browser's native capture rate (typically 48 kHz). The page *requests* 16 kHz, but browsers usually ignore that.
   - The actual capture rate is stored as `actualSampleRate` (next to `targetSampleRate: 16000`) in every recording's metadata and in `session_metadata.json`.
   - The research team converts the files to **16 kHz mono WAV** for analysis (matching NIGHT-FAST's Whisper STT input) — see *For the research team* below.
   - Microphone calibration check (3 s noise floor + voice check) before recording. Calibration audio is not saved.
   - Metadata: participant ID, session ID, scenario ID, language, timestamp, browser info, sample rate.

4. **Consent**: Digital consent form (version 1.1, GDPR Art. 6, 13, 14) required before any recording. Voice data is **pseudonymised, not anonymised** — a voice is personal data.

## Participant Flow

```
1. Open web recorder in browser (GitHub Pages link)
2. Sign digital consent form (version 1.1)
3. A new random 6-character Participant ID and a Session ID are assigned for this session
   (kept only for this browser tab; a reload keeps them, a new session gets new ones)
4. Microphone calibration (3s silence baseline + voice test)
5. Record Scenarios:
   - Part A (Free-Form): Read emergency context → speak natural command (do NOT read text aloud)
   - Part B (Read-Aloud): Read the displayed command sentence word-for-word
6. Review & confirm recording, or re-record (any scenario can be skipped)
7. Repeat for all scenarios (~10–20 minutes total, depending on language choice)
8. Download all recordings as ZIP (`nightfast_voice_<PID>_<sessionId>_<exportTime>.zip`).
   A partial ZIP can also be downloaded at any time during recording ("Download Zip").
9. Upload the ZIP to the NIGHT-FAST folder on GWDG Academic Cloud
   (https://gwdg.files.academiccloud.de/s/3KeMrJed3ydoDTN). If the optional upload proxy
   is configured (`UPLOAD_ENDPOINT` in index.html, see `upload-server.js`), the final
   "Download ZIP File" button also uploads a copy automatically.
```

Recordings stay in the browser tab until the participant downloads the ZIP; nothing is sent to a server during recording (unless the optional proxy is enabled, and then only on the final download). Reloading the page discards unsaved recordings but keeps the same participant/session ID.

## Data Structure

One ZIP per export. Inside, one folder named after the participant ID:

```
nightfast_voice_<PID>_<sessionId>_<exportTime>.zip
└── <PID>/
    ├── consent.json                       # consentVersion "1.1", sessionId, timestamp, browser info
    ├── session_metadata.json              # sessionId, scenario order, skipped IDs, targetSampleRate, actualSampleRate
    ├── manifest.csv                       # one row per recording or skipped scenario
    ├── <PID>_<SID>_<lang>.webm            # e.g. K7M2QX_S07_de.webm  (WebM/Opus audio)
    ├── <PID>_<SID>_<lang>_metadata.json   # scenario text, intent, ground truth (read-aloud), sample rates
    └── ...
```

`<SID>` is the scenario ID (`S01`–`S30`, `R01`–`R16`), `<lang>` is `de` or `en`. `<sessionId>` looks like `20261021T153012Z-k3f9q2` (UTC start time + random suffix) and appears in the ZIP name, `consent.json`, `session_metadata.json`, every metadata file and `manifest.csv`. If several ZIPs exist for the same session (partial downloads), the newest one contains everything recorded before it.

## Running

Open `index.html` in a modern browser (Chrome/Edge/Firefox), or serve the folder (`python3 -m http.server`). Microphone access requires `https://` or `localhost`. JSZip and FileSaver are loaded from cdnjs.

Configuration constants are at the top of the script in `index.html`: `UPLOAD_FOLDER_URL` (Academic Cloud link used by every upload button), `UPLOAD_ENDPOINT` (optional proxy; placeholder = disabled), `CONSENT_VERSION`, `TARGET_SAMPLE_RATE`.

## Scenarios

46 prompts per participant when both languages are chosen (23 for German-only or English-only):

| Part | IDs | Total | DE | EN | Intents covered |
|------|-----|-------|----|----|-----------------|
| A · Free-form | S01–S30 | 30 | 15 | 15 | all 14 |
| B · Read-aloud | R01–R16 | 16 | 8 | 8 | 12 (no `ask_clarification`, `launch_mission`) |

17 of the 46 are safety-critical. All 14 intent categories:
- `create_mission` / `ask_clarification` (delivery orders)
- `abort_mission`, `land`, `stop`, `return_to_base` (safety-critical)
- `loiter`, `adjust_altitude`, `change_speed` (tactical)
- `divert_mission` (emergency reroute, safety-critical)
- `mission_eta`, `drone_status`, `query_payload_health` (status queries)
- `launch_mission` (execution)

The scenario bank lives in `SCENARIOS` in `index.html`; `SCENARIOS.md` is a readable copy.

## For the research team

The WebM/Opus files must be converted before running them through the STT/intent pipeline:

```bash
# one file
ffmpeg -i in.webm -ac 1 -ar 16000 out.wav

# a whole unpacked participant folder
for f in <PID>/*.webm; do ffmpeg -i "$f" -ac 1 -ar 16000 "${f%.webm}.wav"; done
```

- Use `manifest.csv` (columns include `session_id`, `scenario_id`, `audio_file`, `actual_sample_rate`, `ground_truth`) to join audio with labels; skipped scenarios have `type = skipped` and no audio file.
- Group data by `sessionId`, not only by participant ID. Participant IDs are random per session, so the same person doing two sessions gets two IDs.
- Deletion requests reference the participant ID; delete every ZIP with that ID.
