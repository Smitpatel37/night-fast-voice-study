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
    checkbox: "I have read and understood the consent form. I voluntarily agree to participate and allow my voice recordings to be used for academic evaluation of the NIGHT-FAST Project.",
    button: "Accept & Open App →",
    html: `
      <h3>1. Purpose of Study</h3>
      <p>This voice collection session is part of the NIGHT-FAST project at the University Medical Center Göttingen (UMG). The purpose is to evaluate the accuracy of Voice AI in NIGHT-FAST with natural voice commands and specific commands. Your voice recordings will be used exclusively for the evaluation.</p>

      <h3>2. What You Will Do</h3>
      <p>You will be presented with scenario descriptions related to medical drone operations. For each scenario, you will speak a natural voice command. Your voice will be recorded via your device's microphone. Each scenario takes approximately 10–30 seconds.</p>
      <h3>3. Data Collection</h3>
      <p>We will record:</p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Voice recordings in WAV format</li>
        <li>An automatically generated anonymous participant identifier</li>
        <li>Scenario prompts and metadata</li>
      </ul>

      <h3>4. Data Protection</h3>
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
    subtitle: "Bitte lesen Sie die folgende Erklärung sorgfältig durch und bestätigen Sie Ihr Einverständnis, bevor Sie fortfahren.",
    checkbox: "Ich habe die Einwilligungserklärung gelesen und verstanden. Ich willige freiwillig ein, an der Studie teilzunehmen und erlaube die Nutzung meiner Sprachaufnahmen zur wissenschaftlichen Auswertung des NIGHT-FAST-Projekts.",
    button: "Zustimmen & App starten →",
    html: `
      <h3>1. Zweck der Studie</h3>
      <p>Diese Sprachaufnahme-Sitzung ist Teil des Projekts NIGHT-FAST an der Universitätsmedizin Göttingen (UMG). Ziel ist die Evaluierung der Genauigkeit der Sprach-KI in NIGHT-FAST anhand natürlicher und spezifischer Sprachbefehle. Ihre Sprachaufnahmen werden ausschließlich für die Evaluierung verwendet.</p>

      <h3>2. Ablauf der Studie</h3>
      <p>Ihnen werden Szenariobeschreibungen zum medizinischen Drohneneinsatz präsentiert. Zu jedem Szenario sprechen Sie einen natürlichen Sprachbefehl. Ihre Stimme wird über das Mikrofon Ihres Endgeräts aufgenommen. Jedes Szenario dauert ca. 10–30 Sekunden.</p>

      <h3>3. Datenerfassung</h3>
      <p>Folgende Daten werden erfasst:</p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Sprachaufnahmen im WAV-Format</li>
        <li>Eine automatisch generierte, anonyme Teilnehmer-Kennung</li>
        <li>Szenario-Prompts und Metadaten</li>
      </ul>

      <h3>4. Datenschutz</h3>
      <p>Alle Daten werden lokal auf Ihrem Gerät verarbeitet und als ZIP-Datei exportiert. Während der Aufnahme werden keine Audiodaten an externe Server übertragen. Sie können jede Aufnahme jederzeit löschen oder wiederholen. Ihre Teilnehmer-ID wird zufällig generiert und enthält keine personenbezogenen Daten.</p>

      <h3>5. Freiwillige Teilnahme</h3>
      <p>Ihre Teilnahme ist vollkommen freiwillig. Sie können die Studie jederzeit ohne Konsequenzen abbrechen. Sie können jedes Szenario überspringen, bei dem Sie sich unwohl fühlen. Sie können jede Antwort beliebig oft wiederholen.</p>

      <h3>6. Kontakt</h3>
      <p>Bei Fragen zu dieser Studie wenden Sie sich bitte an das NIGHT-FAST-Forschungsteam der UMG.</p>
    `
  }
};

