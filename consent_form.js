/**
 * NIGHT-FAST Study Consent Form
 * 
 * You can edit the consent form text directly in this file.
 * Both English ('en') and German ('de') versions are configured below.
 */

window.CONSENT_FORM = {
  // ============================================================
  // ENGLISH CONSENT FORM
  // ============================================================
  en: {
    title: "2. Participant Consent Form",
    subtitle: "Please read the following consent form carefully and confirm your agreement before proceeding.",
    checkbox: "I have read and understood the consent form. I voluntarily agree to participate and allow my voice recordings to be used for academic evaluation of the NIGHT-FAST system.",
    button: "Accept & Open App →",
    html: `
      <h3>1. Purpose of Study</h3>
      <p>This voice collection session is part of the NIGHT-FAST research project at the University Medical Center Göttingen (UMG). The purpose is to evaluate the accuracy of a voice-controlled interface for medical drone dispatch. Your voice recordings will be used exclusively for academic research and thesis evaluation.</p>

      <h3>2. What You Will Do</h3>
      <p>You will be presented with scenario descriptions related to medical drone operations. For each scenario, you will speak a natural voice command in English. Your voice will be recorded via your device's microphone. Each scenario takes approximately 10–30 seconds.</p>

      <h3>3. Data Collected</h3>
      <p>We will record:</p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Your voice recordings (WAV/audio format)</li>
        <li>An automatically assigned anonymous participant identifier (no real name required)</li>
        <li>The scenario prompts and metadata (timestamp, language, browser)</li>
      </ul>

      <h3>4. Data Protection (GDPR Art. 6, 13, 14)</h3>
      <p>All data is processed locally on your device and exported as a ZIP file. No audio data is transmitted to external servers during recording. You may delete or re-record any sample at any time. Your participant ID is randomly generated and contains no personally identifiable information.</p>

      <h3>5. Voluntary Participation</h3>
      <p>Your participation is entirely voluntary. You may stop at any time without consequence. You may skip any scenario you are uncomfortable with. You may re-record any response as many times as you wish.</p>

      <h3>6. Contact</h3>
      <p>For questions about this study, contact the NIGHT-FAST research team at UMG.</p>
    `
  },

  // ============================================================
  // GERMAN CONSENT FORM
  // ============================================================
  de: {
    title: "2. Einwilligungserklärung zur Studienteilnahme",
    subtitle: "Bitte lesen Sie die folgende Erklärung sorgfältig durch und bestätigen Sie Ihr Einverständnis, bevor Sie die App starten.",
    checkbox: "Ich habe die Einwilligungserklärung gelesen und verstanden. Ich willige freiwillig ein, an der Studie teilzunehmen und erlaube die Nutzung meiner Sprachaufnahmen zur wissenschaftlichen Auswertung des NIGHT-FAST-Systems.",
    button: "Zustimmen & App starten →",
    html: `
      <h3>1. Zweck der Studie</h3>
      <p>Diese Sprachaufnahme-Sitzung ist Teil des Forschungsprojekts NIGHT-FAST an der Universitätsmedizin Göttingen (UMG). Ziel ist die wissenschaftliche Evaluierung eines sprachgesteuerten Leitstellensystems für medizinische Notfall- und Transportdrohnen. Ihre Sprachaufnahmen dienen ausschließlich akademischen Forschungszwecken und der Begutachtung im Rahmen einer wissenschaftlichen Arbeit.</p>

      <h3>2. Ablauf der Studie</h3>
      <p>Ihnen werden realistische Notfallszenarien aus dem medizinischen Drohneneinsatz präsentiert. Zu jedem Szenario sprechen Sie einen kurzen Funk- bzw. Steuerbefehl. Die Aufnahme erfolgt direkt über das Mikrofon Ihres Endgeräts. Ein einzelnes Szenario dauert ca. 10–30 Sekunden.</p>

      <h3>3. Erfasste Daten</h3>
      <p>Folgende Daten werden erfasst:</p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Ihre gesprochenen Audioaufnahmen (WAV/Audioformat)</li>
        <li>Eine automatisch generierte, anonyme 6-stellige Teilnehmer-Kennung (keine Angabe von Namen oder personenbezogenen Daten)</li>
        <li>Szenario-Prompts und technische Sitzungsmetadaten (Zeitstempel, Sprache, Browsertyp)</li>
      </ul>

      <h3>4. Datenschutz & DSGVO (Art. 6, 13, 14)</h3>
      <p>Alle Sprachaufnahmen verbleiben während der gesamten Sitzung ausschließlich lokal in Ihrem Browser und werden erst am Ende als ZIP-Datei auf Ihren Computer heruntergeladen. Es erfolgt keine heimliche Übertragung an Server. Ihre Teilnehmer-ID ist rein pseudonymisiert/anonymisiert. Sie können Aufnahmen jederzeit verwerfen oder wiederholen.</p>

      <h3>5. Freiwilligkeit</h3>
      <p>Die Teilnahme an dieser Studie ist vollkommen freiwillig. Sie können die Sitzung jederzeit ohne Angabe von Gründen abbrechen. Sie können einzelne Szenarien überspringen und jede Aufnahme beliebig oft wiederholen.</p>

      <h3>6. Kontakt</h3>
      <p>Bei Fragen zur Studie wenden Sie sich bitte an das NIGHT-FAST-Forschungsteam der Universitätsmedizin Göttingen (UMG).</p>
    `
  }
};
