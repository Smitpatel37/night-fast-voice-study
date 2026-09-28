# NIGHT-FAST Voice Collection — Scenario Bank

> 28 scenarios across 14 intents, bilingual (DE/EN).
> Participants read the **Situation** and speak their **own natural command** — they do NOT read a script.

---

## 1. `create_mission` — Delivery Orders

### S01 · 🇩🇪 German
**Situation:** Sie befinden sich im Universitätsklinikum Göttingen (UMG). Ein Patient in der Herzchirurgie am Herzzentrum benötigt dringend eine Blutkonserve Typ 0-negativ. Sie sollen den Drohnentransport von der UMG-Blutbank zum Herzzentrum beauftragen.

**Instruction:** Sprechen Sie den Befehl, den Sie dem System geben würden, um diesen Transport zu starten.

---

### S02 · 🇬🇧 English
**Situation:** You are at the University Medical Center Göttingen. A cardiac surgery unit at Herzzentrum urgently needs O-negative blood. You need to dispatch a drone from the UMG blood bank to Herzzentrum.

**Instruction:** Speak the command you would give the system to initiate this transport.

---

### S03 · 🇩🇪 German
**Situation:** Eine Laborprobe (Troponin-Test) muss von der Notaufnahme des Evangelischen Krankenhauses Weende zum Zentrallabor der UMG gebracht werden. Die Probe ist zeitkritisch — maximal 45 Minuten bis zur Analyse.

**Instruction:** Formulieren Sie Ihren Befehl an das Drohnensystem.

---

### S04 · 🇬🇧 English
**Situation:** A biopsy sample needs to be transported from the emergency department at Evangelisches Krankenhaus Weende to the central lab at UMG. The sample is time-critical.

**Instruction:** Say the command you would use to dispatch the drone.

---

## 2. `ask_clarification` — Incomplete Orders

### S05 · 🇩🇪 German
**Situation:** Sie müssen Medikamente verschicken, sind sich aber nicht sicher, von welchem Standort sie abgeholt werden sollen. Sie wissen nur, dass sie zum Klinikum Braunschweig müssen.

**Instruction:** Sagen Sie dem System, was Sie brauchen — auch wenn die Informationen unvollständig sind.

---

### S06 · 🇬🇧 English
**Situation:** You need to send medication somewhere, but you only know the destination (Klinikum Braunschweig) and not the origin. Tell the system what you need.

**Instruction:** Speak naturally, even if your information is incomplete.

---

## 3. `abort_mission` — ⚠️ Safety-Critical

### S07 · 🇩🇪 German
**Situation:** Die Drohne ist gestartet, aber Sie bemerken, dass ein Hubschrauber im Anflug auf die Klinik ist. Die Drohne muss sofort gestoppt werden — die Mission muss komplett abgebrochen werden.

**Instruction:** Geben Sie den Notfallbefehl zum Abbruch der Mission.

---

### S08 · 🇬🇧 English
**Situation:** The drone has launched but you see a helicopter approaching the clinic's helipad. You need to immediately abort the entire mission.

**Instruction:** Speak the emergency command to cancel the mission.

---

## 4. `land` — ⚠️ Safety-Critical

### S09 · 🇩🇪 German
**Situation:** Die Drohne schwebt über dem Landeplatz, aber das automatische Landesystem reagiert nicht. Sie müssen der Drohne manuell den Landebefehl geben.

**Instruction:** Sprechen Sie den Landebefehl.

---

### S10 · 🇬🇧 English
**Situation:** The drone is hovering above the landing pad but the auto-land has not engaged. You need to manually tell the drone to land.

**Instruction:** Give the landing command.

---

## 5. `return_to_base` — ⚠️ Safety-Critical

### S11 · 🇩🇪 German
**Situation:** Der Empfänger am Zielort kann die Lieferung nicht entgegennehmen — die Station ist geschlossen. Die Drohne soll zur Basis zurückkehren.

**Instruction:** Befehlen Sie der Drohne, zur Basis zurückzufliegen.

---

### S12 · 🇬🇧 English
**Situation:** The receiving station at the destination is closed and nobody can accept the delivery. The drone should return to its base.

**Instruction:** Tell the drone to fly back to its starting point.

---

## 6. `loiter` — Tactical Hold

### S13 · 🇩🇪 German
**Situation:** Die Drohne ist fast am Ziel, aber der Landeplatz ist noch nicht frei. Die Drohne soll in der Luft warten und ihre Position halten.

**Instruction:** Geben Sie den Befehl zum Schweben/Warten.

---

### S14 · 🇬🇧 English
**Situation:** The drone is approaching the destination but the landing pad is not clear yet. Tell the drone to hover in place and wait.

**Instruction:** Give the hover/hold command.

---

## 7. `adjust_altitude` — Tactical

### S15 · 🇩🇪 German
**Situation:** Die Drohne fliegt zu niedrig über ein Wohngebiet. Sie müssen die Flughöhe auf 120 Meter erhöhen, um die Mindesthöhe einzuhalten.

**Instruction:** Befehlen Sie die Höhenänderung.

---

### S16 · 🇬🇧 English
**Situation:** The drone is flying too low over a residential area. You need to increase the flight altitude to 120 meters to comply with minimum height regulations.

**Instruction:** Give the altitude change command.

---

## 8. `change_speed` — Tactical

### S17 · 🇩🇪 German
**Situation:** Der Wind hat zugenommen. Sie wollen die Geschwindigkeit der Drohne reduzieren, um die Stabilität zu verbessern.

**Instruction:** Befehlen Sie eine Geschwindigkeitsänderung.

---

### S18 · 🇬🇧 English
**Situation:** Wind conditions have worsened. You want to reduce the drone's speed to improve flight stability.

**Instruction:** Give the speed change command.

---

## 9. `divert_mission` — ⚠️ Safety-Critical

### S19 · 🇩🇪 German
**Situation:** Die Drohne ist unterwegs zum Herzzentrum, aber der dortige Landeplatz ist wegen eines Unfalls gesperrt. Die Drohne muss zum Ausweich-Landeplatz am Klinikum Braunschweig umgeleitet werden.

**Instruction:** Geben Sie den Umleitungsbefehl.

---

### S20 · 🇬🇧 English
**Situation:** The drone is en route to Herzzentrum but the landing pad there has been closed due to an incident. You need to divert the drone to the backup pad at Klinikum Braunschweig.

**Instruction:** Give the diversion command.

---

## 10. `mission_eta` — Status Query

### S21 · 🇩🇪 German
**Situation:** Sie warten auf eine dringende Lieferung. Sie möchten wissen, wie lange die Drohne noch braucht und wo sie gerade ist.

**Instruction:** Fragen Sie nach dem Status / der geschätzten Ankunftszeit.

---

### S22 · 🇬🇧 English
**Situation:** You are waiting for an urgent delivery and want to know how long the drone will take and where it currently is.

**Instruction:** Ask for the status or estimated arrival time.

---

## 11. `drone_status` — Telemetry Query

### S23 · 🇩🇪 German
**Situation:** Vor dem Start einer neuen Mission wollen Sie den Batteriestand und den allgemeinen Zustand der Drohne überprüfen.

**Instruction:** Fragen Sie nach dem Drohnenstatus.

---

### S24 · 🇬🇧 English
**Situation:** Before launching a new mission, you want to check the drone's battery level and general health.

**Instruction:** Ask about the drone's status.

---

## 12. `query_payload_health` — Cold-Chain Query

### S25 · 🇩🇪 German
**Situation:** Die Drohne transportiert Blutkonserven, die gekühlt bleiben müssen (2–6 °C). Sie wollen die aktuelle Temperatur im Transportbehälter überprüfen.

**Instruction:** Fragen Sie nach dem Zustand der Ladung / Temperatur.

---

### S26 · 🇬🇧 English
**Situation:** The drone is carrying blood products that must stay between 2–6 °C. You want to check the current container temperature and seal integrity.

**Instruction:** Ask about the payload/container status.

---

## 13. `launch_mission` — Execution

### S27 · 🇩🇪 German
**Situation:** Die Mission ist vollständig konfiguriert und genehmigt. Alle Checks sind bestanden. Sie müssen jetzt den Startbefehl geben.

**Instruction:** Geben Sie den Startbefehl.

---

### S28 · 🇬🇧 English
**Situation:** The mission has been fully configured and approved. All pre-flight checks have passed. You need to give the launch command now.

**Instruction:** Give the launch/takeoff command.

---

## 🔊 PART B — Read-Aloud Commands (Scripted)

> **Purpose**: These are verbatim commands that participants read aloud exactly as written.
> Unlike Part A (free-form), these provide **exact ground truth** for STT Word Error Rate measurement
> and will be used to expand Tier 1/Tier 2 matching with real human pronunciations.
>
> **Instruction to participant**: "Read the following command exactly as written, as if you were speaking to the drone system."

---

### R01 · 🇩🇪 `create_mission`
**Read aloud:** „Sende eine Blutkonserve von der UMG-Blutbank zum Herzzentrum Göttingen."

---

### R02 · 🇬🇧 `create_mission`
**Read aloud:** "Send blood from the UMG blood bank to Herzzentrum."

---

### R03 · 🇩🇪 `abort_mission`
**Read aloud:** „Mission sofort abbrechen."

---

### R04 · 🇬🇧 `abort_mission`
**Read aloud:** "Abort mission immediately."

---

### R05 · 🇩🇪 `land`
**Read aloud:** „Drohne sofort landen."

---

### R06 · 🇬🇧 `return_to_base`
**Read aloud:** "Return to base now."

---

### R07 · 🇩🇪 `loiter`
**Read aloud:** „Position halten und schweben."

---

### R08 · 🇬🇧 `loiter`
**Read aloud:** "Hold position and hover."

---

### R09 · 🇩🇪 `adjust_altitude`
**Read aloud:** „Flughöhe auf 120 Meter erhöhen."

---

### R10 · 🇬🇧 `change_speed`
**Read aloud:** "Reduce speed to 40 kilometers per hour."

---

### R11 · 🇩🇪 `divert_mission`
**Read aloud:** „Drohne zum Klinikum Braunschweig umleiten."

---

### R12 · 🇬🇧 `mission_eta`
**Read aloud:** "What is the estimated time of arrival?"

---

### R13 · 🇩🇪 `drone_status`
**Read aloud:** „Wie ist der Batteriestand der Drohne?"

---

### R14 · 🇬🇧 `query_payload_health`
**Read aloud:** "Check the payload temperature."

---

## Summary Table

### Part A — Free-Form Scenarios (S01–S28)

| ID | Intent | Lang | Safety | Scenario Theme |
|----|--------|------|--------|---------------|
| S01 | `create_mission` | DE | — | Blood transport UMG → Herzzentrum |
| S02 | `create_mission` | EN | — | Blood transport UMG → Herzzentrum |
| S03 | `create_mission` | DE | — | Lab sample Weende → UMG |
| S04 | `create_mission` | EN | — | Biopsy sample Weende → UMG |
| S05 | `ask_clarification` | DE | — | Incomplete medication order |
| S06 | `ask_clarification` | EN | — | Incomplete medication order |
| S07 | `abort_mission` | DE | ⚠️ | Helicopter conflict — abort |
| S08 | `abort_mission` | EN | ⚠️ | Helicopter conflict — abort |
| S09 | `land` | DE | ⚠️ | Auto-land failure — manual land |
| S10 | `land` | EN | ⚠️ | Auto-land failure — manual land |
| S11 | `return_to_base` | DE | ⚠️ | Station closed — return |
| S12 | `return_to_base` | EN | ⚠️ | Station closed — return |
| S13 | `loiter` | DE | — | Landing pad not clear — hover |
| S14 | `loiter` | EN | — | Landing pad not clear — hover |
| S15 | `adjust_altitude` | DE | — | Too low over residential area |
| S16 | `adjust_altitude` | EN | — | Too low over residential area |
| S17 | `change_speed` | DE | — | Wind — reduce speed |
| S18 | `change_speed` | EN | — | Wind — reduce speed |
| S19 | `divert_mission` | DE | ⚠️ | Pad closed — reroute to backup |
| S20 | `divert_mission` | EN | ⚠️ | Pad closed — reroute to backup |
| S21 | `mission_eta` | DE | — | Check ETA / drone position |
| S22 | `mission_eta` | EN | — | Check ETA / drone position |
| S23 | `drone_status` | DE | — | Battery / health check |
| S24 | `drone_status` | EN | — | Battery / health check |
| S25 | `query_payload_health` | DE | — | Blood cold-chain temperature |
| S26 | `query_payload_health` | EN | — | Blood cold-chain temperature |
| S27 | `launch_mission` | DE | — | All checks passed — launch |
| S28 | `launch_mission` | EN | — | All checks passed — launch |

### Part B — Read-Aloud Commands (R01–R14)

| ID | Intent | Lang | Ground Truth Command |
|----|--------|------|---------------------|
| R01 | `create_mission` | DE | Sende eine Blutkonserve von der UMG-Blutbank zum Herzzentrum Göttingen. |
| R02 | `create_mission` | EN | Send blood from the UMG blood bank to Herzzentrum. |
| R03 | `abort_mission` | DE | Mission sofort abbrechen. |
| R04 | `abort_mission` | EN | Abort mission immediately. |
| R05 | `land` | DE | Drohne sofort landen. |
| R06 | `return_to_base` | EN | Return to base now. |
| R07 | `loiter` | DE | Position halten und schweben. |
| R08 | `loiter` | EN | Hold position and hover. |
| R09 | `adjust_altitude` | DE | Flughöhe auf 120 Meter erhöhen. |
| R10 | `change_speed` | EN | Reduce speed to 40 kilometers per hour. |
| R11 | `divert_mission` | DE | Drohne zum Klinikum Braunschweig umleiten. |
| R12 | `mission_eta` | EN | What is the estimated time of arrival? |
| R13 | `drone_status` | DE | Wie ist der Batteriestand der Drohne? |
| R14 | `query_payload_health` | EN | Check the payload temperature. |

### Totals

| Metric | Count |
|--------|-------|
| Free-form scenarios (Part A) | 28 |
| Read-aloud commands (Part B) | 14 |
| **Total per participant** | **42** |
| Estimated session time | ~18–22 min |

