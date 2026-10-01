# NIGHT-FAST Voice Collection Tool

> A standalone, independent voice recording platform for collecting real-world speech samples from participants to evaluate the NIGHT-FAST intent parser.

## Purpose

This tool exists to collect **held-out, unseen voice data** from human participants. The recordings are used to evaluate how well the NIGHT-FAST multi-tier intent parser (Regex → Semantic → LLM) performs on real-world, unrehearsed speech — as opposed to the curated prompt-engineering data the system was designed around.

### Why NOT the Same Data?

Using the same phrases used to build/tune the system would be **data contamination**. The system would appear to have high accuracy simply because it was designed to handle those exact inputs. Reviewers expect evaluation on unseen, naturalistic speech.

## Methodology

1. **Scenario-Based Prompting**: Participants are NOT given verbatim commands to read. They receive **situation descriptions** (e.g., "You need to urgently send blood from the university hospital to the cardiac clinic") and speak their own natural command.

2. **Bilingual Coverage**: Scenarios are presented in both German and English.

3. **Recording Integrity**:
   - Audio captured at **16 kHz, mono, WAV format** (matching NIGHT-FAST's Whisper STT input)
   - Browser-based recording via Web Audio API
   - Calibration check (silent baseline) before recording
   - Metadata: participant ID, scenario ID, language, timestamp, browser info

4. **Consent**: GDPR-compliant digital consent form required before any recording.

## Participant Flow

```
1. Open web recorder in browser (GitHub Pages link)
2. Sign digital consent form (GDPR Art. 6, 13, 14)
3. Auto-assigned anonymous 6-character Participant ID
4. Microphone calibration (3s silence baseline + voice test)
5. Record Scenarios:
   - Part A (Free-Form): Read emergency context → speak natural command (do NOT read text aloud)
   - Part B (Read-Aloud): Read the displayed command sentence word-for-word
6. Review & confirm recording, or re-record
7. Repeat for all scenarios (~5–10 minutes total)
8. Download all recordings as ZIP (`nightfast_voice_<ID>.zip`)
9. Upload ZIP archive to Nextcloud drop folder link
```

## Data Structure

```
recordings/
├── P001/
│   ├── consent.json
│   ├── calibration.wav
│   ├── scenario_01_de.wav
│   ├── scenario_01_de_metadata.json
│   ├── scenario_03_en.wav
│   ├── scenario_03_en_metadata.json
│   └── ...
├── P002/
│   └── ...
```

## Running

Simply open `index.html` in a modern browser (Chrome/Edge/Firefox). No server needed. All recordings are stored locally in the browser and exported as a ZIP.

## Scenarios

See the embedded scenario bank in `index.html`. Covers all 14 intent categories:
- `create_mission` / `ask_clarification` (delivery orders)
- `abort_mission`, `land`, `stop`, `return_to_base` (safety-critical)
- `loiter`, `adjust_altitude`, `change_speed` (tactical)
- `divert_mission` (emergency reroute)
- `mission_eta`, `drone_status`, `query_payload_health` (status queries)
- `launch_mission` (execution)
