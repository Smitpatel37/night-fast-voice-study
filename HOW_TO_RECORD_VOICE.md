# NIGHT-FAST · Voice Data Collection — Quick How-To Guide
> *Concise instructions for study collaborators · Total recording time: ~10–20 minutes (46 prompts in both languages, 23 in one language)*

---

### 1. What Is This & Why We Collect Voice Data
- **Purpose**: We are collecting real speech samples to evaluate **NIGHT-FAST**, an AI voice-dispatch system for medical drones carrying urgent blood, lab specimens, and defibrillators.
- **Privacy & GDPR**: Your data is **pseudonymised**: it is stored under a random 6-character participant ID that is new for every session, never under your name. A voice can still identify a person, so the recordings are personal data, not anonymous data. Recordings stay in your browser tab until you download the ZIP and upload it yourself (if the optional automatic upload is enabled, the final "Download ZIP File" button also sends a copy). Note your participant ID if you may want your recordings deleted later.

### 2. Quick Preparation (Before You Begin)
- **Environment**: Find a quiet room with minimal background chatter, traffic, or echo.
- **Device & Mic**: Use a laptop or PC with a headset, earphones, or built-in mic (*Chrome, Edge, or Firefox*).
- **Languages**: Choose German, English, or Both based on your comfort level.

### 3. Step-by-Step Recording Instructions
- **Step 1 · Open Link & Accept**: Open the provided GitHub Pages link in your browser and accept the consent form.
- **Step 2 · Calibrate Microphone**: Click **"Start Calibration"** → stay silent for 3 seconds (*noise check*) → speak a few words to confirm volume.
- **Step 3 · Record the Scenarios**:
  > ⚠️ **CRITICAL RECORDING RULE**:
  > - **Part A (Free-Form)**: Do **NOT** read the scenario text aloud! Read the emergency situation in your head, then speak whatever short, direct command you would naturally say into a microphone to the drone.
  > - **Part B (Read-Aloud)**: Read the displayed command sentence word-for-word.
- **Recording Controls**:
  - Click 🔴 **Record** → Speak your command → Click ⏹️ **Stop** → Listen back to verify → Click **"Save & Next"** (or *"Re-record"* if you stumbled).

### 4. Export & Upload to Academic Cloud
- **Step 1 · Download ZIP**: On the final summary screen, click **📦 Download ZIP** to save your recording archive (`nightfast_voice_<ID>_<sessionId>_<time>.zip`) to your Downloads folder.
- **Step 2 · Upload to Academic Cloud**: Click **☁️ 2. Open Academic Cloud Upload Folder**, open the NIGHT-FAST folder on GWDG Academic Cloud (Nextcloud), and drag & drop your downloaded ZIP file into it. No account or password required!

---

| Resource | Link / Destination |
| :--- | :--- |
| **🌐 Web Recorder** | https://smitpatel37.github.io/night-fast-voice-study/ |
| **☁️ Academic Cloud Upload Drop** | https://gwdg.files.academiccloud.de/s/3KeMrJed3ydoDTN |

### What the ZIP contains
One folder named after your participant ID with `consent.json`, `session_metadata.json`, `manifest.csv`, and for each recording `<PID>_<SID>_<lang>.webm` plus `<PID>_<SID>_<lang>_metadata.json` (e.g. `K7M2QX_S07_de.webm`). Audio is saved as WebM/Opus at your browser's native sample rate (usually 48 kHz); the research team converts it to 16 kHz mono WAV (`ffmpeg -i in.webm -ac 1 -ar 16000 out.wav`).
