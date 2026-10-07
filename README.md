# Night Fast

Record a night in the browser, then download that session as a zip.

## Run locally

```bash
npm install
npm run dev -- --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Cases

The night is five numbered record screens, Case 1 through Case 5. Each one has the red record button, “Tap red button to record”, Skip, and Download Zip. Skip, or stopping a recording, marks that case done and opens the next one. The last case stays on screen and uses the same Download Zip button.

Download Zip calls `downloadNightFastSession` on every case. It saves `night-fast-session.zip` with only the cases finished so far. If nothing is finished, it shows “Nothing recorded yet.”

The zip contains:

- `case-<n>-recording.webm` (or `.mp4` / `.ogg`) for each finished case that has audio
- `session.json` — one entry per finished case (recorded or skipped), with times and the audio filename when there is a recording
