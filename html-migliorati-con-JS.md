delivery
<div id="call-widget" style="
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  background-color: transparent;
  box-sizing: border-box;
">

  <!-- Pulsante Animato -->
  <a href="tel:+390372451964" class="btn-call" style="
    display: inline-block;
    text-align: center;
    padding: 18px 30px;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    background-color: #FFD700;
    border-radius: 50px;
    border: 2px solid #000;
    box-shadow: 0px 0px 15px rgba(255, 215, 0, 0.5);
    animation: pulse 2s infinite;
    transition: all 0.3s ease;
    backface-visibility: hidden;
    white-space: nowrap;
  ">
    🚀 ORDINA ORA: TOCCA E CHIAMA
  </a>

  <!-- Info Orari -->
  <div style="margin-top: 16px; text-align: center;">
    <p style="
      color: #FFD700;
      font-weight: bold;
      margin: 0;
      font-size: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
    ">
      Servizio Delivery Attivo
    </p>

    <p style="
      color: #FFFFFF;
      margin: 8px 0 0 0;
      font-size: 14px;
      line-height: 1.5;
    ">
      Venerdì - Domenica: <span style="font-weight: bold;">18:30 – 21:30</span><br>
      <span style="color: #888; font-style: italic;">Lunedì: Chiuso</span>
    </p>
  </div>

</div>

<style>
@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0px 0px 0px 0px rgba(255,215,0,0.7); }
  70% { transform: scale(1.03); box-shadow: 0px 0px 0px 15px rgba(255,215,0,0); }
  100% { transform: scale(1); box-shadow: 0px 0px 0px 0px rgba(255,215,0,0); }
}
.btn-call:active {
  transform: scale(0.95);
  background-color: #DAAB2D;
}
</style>

<script>
(function() {
  const widget = document.getElementById("call-widget");
  const button = widget.querySelector(".btn-call");

  function adaptButton() {
    const maxWidth = widget.clientWidth * 0.9; // 90% dello spazio disponibile
    let fontSize = 18;
    let paddingX = 30;

    button.style.fontSize = fontSize + "px";
    button.style.padding = "18px " + paddingX + "px";

    // Riduci finché non entra
    while (button.scrollWidth > maxWidth && fontSize > 12) {
      fontSize -= 1;
      paddingX -= 2;
      button.style.fontSize = fontSize + "px";
      button.style.padding = "18px " + paddingX + "px";
    }
  }

  window.addEventListener("resize", adaptButton);
  adaptButton();
})();
</script>









allergeni
<div id="allergeni-box" style="
  text-align: center;
  padding: 0;
  margin: 0;
  background-color: #000;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
">

  <!-- Linea Oro Superiore -->
  <div style="
    height: 2px;
    width: 80%;
    margin: 0 auto 15px auto;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
  "></div>

  <!-- Box Informativo -->
  <div id="allergeni-inner" style="
    border: 1px solid #FFD700;
    padding: 15px;
    background-color: #000;
    border-radius: 10px;
    display: inline-block;
    max-width: 95%;
    box-sizing: border-box;
  ">

    <p style="
      color: #FFD700;
      font-family: 'Segoe UI', Arial, sans-serif;
      font-weight: bold;
      margin: 0;
      font-size: 16px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      white-space: nowrap;
    ">
      ℹ️ Informativa Allergeni
    </p>

    <p style="
      color: #ffffff;
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 13px;
      margin: 10px 0;
      line-height: 1.4;
    ">
      La tua salute è importante. Tutti i nostri impasti Bio e piatti possono contenere allergeni.<br>
      Per la lista completa dei 14 ingredienti sensibili:
    </p>

    <a href="https://sites.google.com/view/locandadelcontadino/sicurezza-alimentare" style="
      display: inline-block;
      color: #000;
      background-color: #FFD700;
      text-decoration: none;
      font-weight: bold;
      font-size: 12px;
      padding: 8px 20px;
      border-radius: 5px;
      text-transform: uppercase;
      white-space: nowrap;
    ">
      Leggi la Tabella Completa
    </a>

  </div>

  <!-- Linea Oro Inferiore -->
  <div style="
    height: 2px;
    width: 80%;
    margin: 15px auto 0 auto;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
  "></div>

</div>

<script>
(function() {
  const box = document.getElementById("allergeni-inner");
  const container = document.getElementById("allergeni-box");

  function adaptBox() {
    const maxWidth = container.clientWidth * 0.9;
    let fontTitle = 16;
    let fontText = 13;
    let fontButton = 12;

    const title = box.querySelector("p:first-of-type");
    const text = box.querySelector("p:nth-of-type(2)");
    const button = box.querySelector("a");

    // Reset
    title.style.fontSize = fontTitle + "px";
    text.style.fontSize = fontText + "px";
    button.style.fontSize = fontButton + "px";

    // Riduci finché non entra
    while (box.scrollWidth > maxWidth && fontTitle > 12) {
      fontTitle -= 1;
      fontText -= 1;
      fontButton -= 1;

      title.style.fontSize = fontTitle + "px";
      text.style.fontSize = fontText + "px";
      button.style.fontSize = fontButton + "px";
    }
  }

  window.addEventListener("resize", adaptBox);
  adaptBox();
})();
</script>












footer
<style>
  body { margin: 0; padding: 0; overflow: hidden; background-color: #000; }

  .footer-container {
    background-color: #000;
    color: #fff;
    font-family: 'Segoe UI', Arial, sans-serif;
    padding: 20px 10px;
    border-top: 3px solid #FFD700;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
  }

  .footer-section {
    min-width: 200px;
    max-width: 300px;
  }

  .footer-title {
    color: #FFD700;
    font-size: 15px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .footer-text {
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
  }

  .footer-btn {
    display: inline-block;
    margin-top: 12px;
    background-color: #FFD700;
    color: #000;
    padding: 10px 18px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    white-space: nowrap;
  }
</style>

<div id="footer-adaptive" class="footer-container">

  <!-- DELIVERY -->
  <div style="margin-bottom: 20px;">
    <h2 id="delivery-title" style="color: #FFD700; margin: 0; font-size: 20px; letter-spacing: 1px; white-space: nowrap;">
      🚀 PIZZA DELIVERY
    </h2>
    <p id="delivery-hours" style="margin: 5px 0; font-size: 17px;">Ven - Dom: <b>18:30 – 21:30</b></p>
    <p id="delivery-note" style="color: #FFD700; font-size: 13px; margin: 0; white-space: nowrap;">
      CONSEGNA GRATIS IN CITTÀ (MIN. 2 PIZZE)
    </p>
  </div>

  <!-- SEZIONI -->
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 25px; border-top: 1px solid #222; padding-top: 15px;">

    <!-- ORARI -->
    <div class="footer-section">
      <h3 class="footer-title" id="orari-title">ORARI LOCALE</h3>
      <p class="footer-text" id="orari-text">
        <span style="font-weight: bold;">PRANZO FISSO e PIZZERIA:</span><br>
        Mar - Ven | 12:00 - 14:00<br>
        <span style="font-weight: bold;">PIZZERIA:</span> Mar - Dom | 18:30 - 23:00<br>
        <span style="color: #888;">Lunedì: Chiuso per riposo</span>
      </p>
    </div>

    <!-- INFO -->
    <div class="footer-section">
      <h3 class="footer-title" id="info-title">INFO & SEDE</h3>
      <p class="footer-text" id="info-text">
        Via Battaglione 86, 26100 - Cremona (CR)<br>
        P.IVA: <b>01358540191</b>
      </p>

      <a id="info-btn" href="tel:+390372451964" class="footer-btn">
        📞 Info e Prenotazioni: Tocca e chiama
      </a>
    </div>

  </div>

  <!-- PRIVACY + COPYRIGHT -->
  <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #222;">

    <div style="margin-bottom: 10px;">
      <a id="privacy-btn" href="https://sites.google.com/view/locandadelcontadino/privacy-info-legali"
         style="color: #FFD700; text-decoration: none; font-size: 12px; font-weight: bold; padding: 8px 15px; border: 1px solid #FFD700; border-radius: 20px; display: inline-block; white-space: nowrap;">
        🔒 Privacy - Info Legali
      </a>
    </div>

    <div id="copyright" style="font-size: 10px; color: #444;">
      © 2025 LOCANDA DEL CONTADINO - Tutti i diritti riservati.
    </div>

  </div>

</div>

<script>
(function() {
  const container = document.getElementById("footer-adaptive");

  const elements = [
    document.getElementById("delivery-title"),
    document.getElementById("delivery-hours"),
    document.getElementById("delivery-note"),
    document.getElementById("orari-title"),
    document.getElementById("orari-text"),
    document.getElementById("info-title"),
    document.getElementById("info-text"),
    document.getElementById("info-btn"),
    document.getElementById("privacy-btn"),
    document.getElementById("copyright")
  ];

  const baseSizes = [20, 17, 13, 15, 13, 15, 13, 12, 12, 10];

  function adaptFooter() {
    const maxWidth = container.clientWidth * 0.95;
    let scale = 1;

    // Reset
    elements.forEach((el, i) => {
      el.style.fontSize = baseSizes[i] + "px";
    });

    // Riduci finché non entra
    while (container.scrollWidth > maxWidth && scale > 0.75) {
      scale -= 0.02;
      elements.forEach((el, i) => {
        el.style.fontSize = (baseSizes[i] * scale) + "px";
      });
    }
  }

  window.addEventListener("resize", adaptFooter);
  adaptFooter();
})();
</script>








menu pranzo
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu del Giorno</title>
  <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">

  <style>
  body {
      background-color: transparent; /* così si integra nella pagina Sites */
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: fadeIn 0.8s ease-out;
      font-family: "Architects Daughter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
  }

  .titolo-pranzo-fisso {
      font-size: 1.6rem;
      color: #FFD700;
      text-align: center;
      margin: 10px 0 5px 0;
      text-shadow: 0 0 6px rgba(255,215,0,0.4);
  }

  .sottotitolo-pranzo-fisso {
      font-size: 1rem;
      color: #e6e6e6;
      text-align: center;
      margin-bottom: 10px;
      opacity: 0.85;
      line-height: 1.35;
  }

  .contenitore {
      width: 100%;
      max-width: 480px; /* leggermente più larga */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5px;
  }

  .lavagna {
      background: #000 url('https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/blackboard.png') repeat;
      background-size: 400px;
      filter: contrast(1.05) brightness(0.95);
      border: 6px double #FFD700;
      padding: 25px 15px;
      width: 100%;
      box-shadow: 0 0 40px rgba(255,215,0,0.25);
      text-align: center;
      border-radius: 4px;
      position: relative;
      box-sizing: border-box;
  }

  .intestazione {
      color: #FFD700;
      font-size: 1.1rem;
      margin-bottom: 15px;
      font-style: italic;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
  }

  .data-serviamo {
      color: rgba(255, 215, 0, 0.85);
      font-size: 0.95rem;
      font-style: normal;
  }

  h2 {
      color: #FFD700;
      margin-top: 15px;
      margin-bottom: 8px;
      font-size: 1.1rem;
      text-transform: uppercase;
      border-bottom: 1px dashed rgba(255, 215, 0, 0.4);
      display: inline-block;
      padding: 0 10px 3px 10px;
      text-shadow: 0 0 4px rgba(255,215,0,0.25);
      letter-spacing: 1px;
  }

  ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
  }

  li {
      color: #FFFFFF;
      font-size: 1.05rem;
      margin: 6px 0;
      line-height: 1.25;
      word-break: break-word;
  }

  .piatto-nome {
      display: block;
  }

  .piatto-meta {
    display: block;
    font-size: 0.9rem;
    opacity: 0.85;
    color: #c9a23f;
  }

  li.top-dish {
      color: #FFFFFF !important;
      font-weight: bold;
      text-shadow: none;
  }

  .top-dish .piatto-nome {
      color: #FFFFFF !important;
      font-weight: 600;
  }

  .top-dish .piatto-meta {
      color: #c9a23f !important;
      font-weight: 500;
      font-size: 0.9rem;
  }

  li.top-dish:hover {
      text-shadow: 0 0 10px rgba(255,215,0,0.9);
      transform: scale(1.02);
  }

  .top-dish .piatto-nome .emoji {
      font-size: 0.8rem !important;
      vertical-align: middle;
      margin-right: 4px;
  }

  .chiusura {
    margin-top: 25px;
    color: #FFD700;
    font-size: 1rem;
    opacity: 0.7;
  }

  /* Firma elegante sotto "Grazie e Buon Appetito" */
  .firma-locanda {
    margin-top: 5px;
    color: #FFD700;
    font-size: 0.9rem;
    opacity: 0.65;
    font-style: italic;
    letter-spacing: 0.5px;
  }

  /* WHATSAPP */
  #whatsapp-vertical {
      position: fixed !important;
      right: -6px !important;
      top: 40% !important;
      background: #FFD700 !important;
      padding: 8px 6px !important;
      border-radius: 6px 0 0 6px !important;
      cursor: pointer !important;
      z-index: 9999 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 4px !important;
  }

  .whatsapp-icon {
      width: 22px !important;
      height: 22px !important;
      filter: hue-rotate(90deg) saturate(2);
  }

  .whatsapp-text {
      writing-mode: vertical-rl !important;
      text-orientation: upright !important;
      color: #0a7c2f !important;
      font-weight: bold !important;
      font-size: 12px !important;
      letter-spacing: 0.5px !important;
  }

  .legenda-badges {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,0.2);
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      color: white;
      font-size: 0.9rem;
  }

  .legenda-badges span {
      background: rgba(255,255,255,0.08);
      padding: 6px 10px;
      border-radius: 6px;
      display: inline-block;
  }
  </style>
</head>

<body>

<h2 class="titolo-pranzo-fisso">✦ Menù del Giorno ✦</h2>

<p class="sottotitolo-pranzo-fisso">
  🍽️ Tre primi, tre secondi e tre contorni a scelta.<br>
  💧🍷 Mezzo litro d’acqua e mezzo litro di vino inclusi.<br>
  ☕ Caffè compreso.<br>
  ✔️ Servizio e coperto inclusi.
</p>

<!-- WHATSAPP -->
<div id="whatsapp-vertical" onclick="condividiWhatsApp()">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="whatsapp-icon">
    <span class="whatsapp-text">Invia Menu</span>
</div>

<div class="contenitore">
  <div class="lavagna">

    <div class="intestazione">
      <span id="data-odierna" class="data-serviamo"></span>
      <span>Oggi vi serviamo...</span>
    </div>

    <section>
      <h2>✦ Primi</h2>
      <ul>
        <li>Orecchiette al Pesto</li>
        <li>Tortelli di Carne Panna e Prosciutto</li>
        <li>Spaghetti al Pomodoro e Basilico</li>
      </ul>
    </section>

    <section>
      <h2>✦ Secondi</h2>
      <ul>
        <li>Arrosto di Coppa e Lonza con Patate al forno</li>
        <li>Bistecche alla Pizzaiola</li>
        <li>Coppa alla griglia</li>
      </ul>
    </section>

    <section>
      <h2>✦ Contorni</h2>
      <ul>
        <li>Zucchine Trifolate</li>
        <li>Insalata mista</li>
        <li>Mix di Verdure Lessate</li>
      </ul>
    </section>

    <div class="chiusura">✦ Grazie e Buon Appetito ✦</div>

    <div class="legenda-badges">
      <span>🥇 Iconico</span>
      <span>🔥 Top</span>
      <span>✨ Selezione</span>
      <span>📝 Nota di gusto</span>
      <span>📍 Regione di origine</span>
    </div>

  </div>
</div>

<script id="json-ld" type="application/ld+json"></script>

<script>
const opzioni = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let data = new Date().toLocaleDateString('it-IT', opzioni);
data = data.charAt(0).toUpperCase() + data.slice(1);
document.getElementById('data-odierna').textContent = data;
</script>

<script>
function condividiWhatsApp() {
    const data = document.getElementById("data-odierna").textContent;

    const sezioni = document.querySelectorAll("section");
    let testo = `Menu del giorno (${data}):\n\n`;

    sezioni.forEach(section => {
        const titolo = section.querySelector("h2").textContent.replace("✦ ", "");
        testo += titolo + ":\n";

        const piatti = section.querySelectorAll("li");
        piatti.forEach(piatto => {
            testo += "- " + piatto.textContent.trim() + "\n";
        });

        testo += "\n";
    });

    testo += "Buon appetito!";
    const encoded = encodeURIComponent(testo);

    const scelta = confirm("Vuoi usare WhatsApp Business?\nPremi OK per Business, Annulla per WhatsApp normale.");

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
        window.open("https://wa.me/?text=" + encoded, "_blank");
        return;
    }

    if (scelta) {
        window.location.href =
            "intent://send?text=" + encoded +
            "#Intent;scheme=whatsapp-business;package=com.whatsapp.w4b;end";
    } else {
        window.location.href =
            "intent://send?text=" + encoded +
            "#Intent;scheme=whatsapp;package=com.whatsapp;end";
    }
}
</script>

<!-- DATABASE ESTERNO (per potenziamenti futuri) -->
<script src="https://sites070-ai.github.io/schema/piatti-menu-pranzo.js"></script>
<script src="https://sites070-ai.github.io/schema/script-6.js"></script>

<!-- AUTO-ADATTAMENTO JS (stile QR Code) -->
<script>
(function() {
  const lavagna = document.querySelector(".lavagna");
  if (!lavagna) return;

  const baseWidth = 480; // larghezza di riferimento
  const scalableSelectors = [
    ".titolo-pranzo-fisso",
    ".sottotitolo-pranzo-fisso",
    ".intestazione",
    ".lavagna h2",
    ".lavagna li",
    ".chiusura",
    ".legenda-badges span"
  ];

  const elements = [];
  scalableSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const style = window.getComputedStyle(el);
      const baseSize = parseFloat(style.fontSize);
      el.dataset.baseSize = baseSize;
      elements.push(el);
    });
  });

  function adaptMenu() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const effectiveWidth = Math.min(baseWidth, viewportWidth);
    let scale = effectiveWidth / baseWidth;
    if (scale > 1) scale = 1;

    lavagna.style.transformOrigin = "top center";
    lavagna.style.transform = "scale(" + scale + ")";

    elements.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adaptMenu);
  window.addEventListener("orientationchange", adaptMenu);
  adaptMenu();
})();
</script>

</body>
</html>









informativa gdpr
<div id="privacy-box" style="text-align:center;padding:10px;background-color:#000;overflow:hidden;box-sizing:border-box;font-family:Arial,sans-serif;width:100%;max-width:750px;margin:0 auto;">

  <div style="background-color:rgba(255,215,0,0.05);border:1px solid #FFD700;padding:15px;margin:0 auto;text-align:left;font-size:10px;color:#ddd;width:100%;max-width:95%;border-radius:8px;box-sizing:border-box;">

    <div class="scalable" style="color:#FFD700;font-size:11px;font-weight:bold;margin-bottom:8px;text-align:center;">
      🔒 INFORMATIVA PRIVACY - CONFORMITÀ GDPR
    </div>

    <p class="scalable" style="margin:0 0 4px 0;line-height:1.4;">
      <strong style="color:#FFD700;">✓ Nessun cookie:</strong> Questi widget non installano cookie di alcun tipo.
    </p>

    <p class="scalable" style="margin:0 0 4px 0;line-height:1.4;">
      <strong style="color:#FFD700;">✓ Nessun tracciamento:</strong> Non vengono raccolti dati personali o informazioni di navigazione.
    </p>

    <p class="scalable" style="margin:0 0 4px 0;line-height:1.4;">
      <strong style="color:#FFD700;">✓ Link diretti:</strong> I collegamenti portano direttamente alle piattaforme senza intermediari.
    </p>

    <p class="scalable" style="margin:0;line-height:1.4;">
      <strong style="color:#FFD700;">✓ Nessun contenuto esterno:</strong> Solo testo e link, nessuna immagine o script caricato da terze parti.
    </p>

    <div style="margin-top:10px;padding-top:10px;border-top:1px solid #333;font-size:9px;color:#999;line-height:1.5;">
      <p class="scalable" style="margin:0 0 6px 0;text-align:center;">
        Cliccando sui link verrai reindirizzato alle rispettive piattaforme che applicano le proprie informative privacy:
      </p>

      <div style="text-align:center;">

        <span style="display:inline-block;max-width:100%;padding-right:8px;margin:0 8px 6px 0;border-right:1px solid #666;box-sizing:border-box;">
          <a class="scalable" href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer"
             style="color:#FFB800;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:2px;overflow-wrap:anywhere;">
            policies.google.com/<wbr>privacy
          </a>
        </span>

        <span style="display:inline-block;max-width:100%;padding-right:8px;margin:0 8px 6px 0;border-right:1px solid #666;box-sizing:border-box;">
          <a class="scalable" href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer"
             style="color:#1877F2;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:2px;overflow-wrap:anywhere;">
            facebook.com/<wbr>privacy/<wbr>policy
          </a>
        </span>

        <span style="display:inline-block;max-width:100%;padding-right:8px;margin:0 8px 6px 0;border-right:1px solid #666;box-sizing:border-box;">
          <a class="scalable" href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer"
             style="color:#E4405F;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:2px;overflow-wrap:anywhere;">
            privacycenter.instagram.com/<wbr>policy
          </a>
        </span>

        <span style="display:inline-block;max-width:100%;padding-right:8px;margin:0 8px 6px 0;border-right:1px solid #666;box-sizing:border-box;">
          <a class="scalable" href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
             style="color:#00F2EA;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:2px;overflow-wrap:anywhere;">
            tiktok.com/<wbr>legal/<wbr>privacy-policy
          </a>
        </span>

        <span style="display:inline-block;max-width:100%;padding-right:8px;margin:0 8px 6px 0;border-right:1px solid #666;box-sizing:border-box;">
          <a class="scalable" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer"
             style="color:#A2AAAD;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:2px;overflow-wrap:anywhere;">
            Apple (Maps): apple.com/<wbr>legal/<wbr>privacy
          </a>
        </span>

        <span style="display:inline-block;max-width:100%;margin:0 0 6px 0;box-sizing:border-box;">
          <a class="scalable" href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer"
             style="color:#34A853;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:2px;overflow-wrap:anywhere;">
            Google (Maps): policies.google.com/<wbr>privacy
          </a>
        </span>

      </div>
    </div>

  </div>
</div>

<!-- AUTO‑ADATTAMENTO JS -->
<script>
(function() {
  const container = document.getElementById("privacy-box");
  const scalable = document.querySelectorAll(".scalable");

  scalable.forEach(el => {
    el.dataset.baseSize = parseFloat(window.getComputedStyle(el).fontSize);
  });

  function adapt() {
    const baseWidth = 750;
    const currentWidth = container.clientWidth;
    let scale = currentWidth / baseWidth;
    if (scale > 1) scale = 1;

    scalable.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adapt);
  window.addEventListener("orientationchange", adapt);
  adapt();
})();
</script>












banner maps
<div id="maps-box" style="text-align: center; padding: 20px 10px; background-color: #000; overflow: hidden; box-sizing: border-box; position: relative; font-family: Arial, sans-serif; width: 100%; max-width: 600px; margin: 0 auto;">

  <div style="position: absolute; top: 10px; right: 10px; background-color: rgba(0,0,0,0.9); color: #34A853; padding: 6px 12px; border-radius: 20px; font-size: 10px; font-weight: bold; border: 1px solid #34A853; z-index: 100;">
    🔒 ZERO COOKIE
  </div>

  <div style="height: 1px; width: 70%; max-width: 300px; margin: 0 auto 20px auto; background: linear-gradient(90deg, transparent, #4285F4, #34A853, #FBBC05, #EA4335, transparent);"></div>

  <div style="background-color: #111; padding: 20px; border: 1px solid #34A853; text-align: center; border-radius: 12px; overflow: hidden; width: 100%; max-width: 400px; margin: 0 auto; box-shadow: 0 6px 12px rgba(52, 168, 83, 0.2); box-sizing: border-box;">
    
    <h3 class="scalable" style="color: #34A853; font-size: 18px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; line-height: 1.3;">📍 Vieni a Trovarci</h3>

    <div style="padding: 15px; background-color: #0a0a0a; border-radius: 8px; border: 1px solid #333;">
      <p class="scalable" style="color: #34A853; font-size: 14px; margin: 0 0 5px 0; font-weight: bold;">📍 Locanda Del Contadino</p>
      <p class="scalable" style="color: #fff; font-size: 13px; margin: 0; line-height: 1.5;">
        Via Battaglione,86<br>
        (26100) Cremona (CR)
      </p>
    </div>

    <div style="margin-top: 15px; width: 100%;">
      <a class="scalable" href="https://www.google.com/maps/dir/?api=1&destination=Locanda+Del+Contadino" target="_blank" rel="noopener noreferrer nofollow external" referrerpolicy="no-referrer" style="display: inline-block; background-color: #34A853; color: #fff; padding: 12px 25px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 14px; box-shadow: 0 3px 6px rgba(0,0,0,0.3);">
        🧭 AVVIA NAVIGATORE
      </a>
    </div>

    <div style="margin-top: 12px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
      <a class="scalable" href="https://maps.apple.com/?daddr=Locanda+Del+Contadino" target="_blank" rel="noopener noreferrer nofollow external" referrerpolicy="no-referrer" style="color: #999; font-size: 11px; text-decoration: none;">🍎 Apple Maps</a>
    </div>

    <div style="margin-top: 15px; padding: 12px; background-color: #0a0a0a; border-radius: 8px; border: 1px solid #333;">
      <p class="scalable" style="color: #34A853; font-size: 12px; margin: 0 0 8px 0; font-weight: bold;">🕐 Orari di Apertura</p>
      <p class="scalable" style="color: #fff; font-size: 11px; margin: 0; line-height: 1.6;">
        <strong>Mar-Ven:</strong> 12:00-14:00 | 18:30-23:00<br>
        <strong>Sab-Dom:</strong> 18:30-23:00<br>
        <strong>Lunedì:</strong> Chiuso
      </p>
    </div>
  </div>

  <div style="height: 1px; width: 70%; max-width: 300px; margin: 20px auto 0 auto; background: linear-gradient(90deg, transparent, #4285F4, #34A853, #FBBC05, #EA4335, transparent);"></div>

</div>

<!-- AUTO‑ADATTAMENTO JS -->
<script>
(function() {
  const box = document.getElementById("maps-box");
  const scalable = document.querySelectorAll(".scalable");

  scalable.forEach(el => {
    el.dataset.baseSize = parseFloat(window.getComputedStyle(el).fontSize);
  });

  function adapt() {
    const baseWidth = 600;
    const currentWidth = box.clientWidth;
    let scale = currentWidth / baseWidth;
    if (scale > 1) scale = 1;

    scalable.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adapt);
  window.addEventListener("orientationchange", adapt);
  adapt();
})();
</script>










banner recensioni
<div id="reviews-box" style="text-align:center;padding:20px 10px;background-color:#000;overflow:hidden;box-sizing:border-box;position:relative;font-family:Arial,sans-serif;width:100%;max-width:600px;margin:0 auto;">

  <div style="position:absolute;top:10px;right:10px;background-color:rgba(0,0,0,0.9);color:#FFB800;padding:6px 12px;border-radius:20px;font-size:10px;font-weight:bold;border:1px solid #FFB800;z-index:100;">
    🔒 ZERO COOKIE
  </div>

  <div style="height:1px;width:70%;max-width:300px;margin:0 auto 20px auto;background:linear-gradient(90deg,transparent,#FFB800,transparent);"></div>

  <div style="background-color:#111;padding:25px 20px;border:1px solid #FFB800;text-align:center;border-radius:12px;overflow:hidden;width:100%;max-width:350px;margin:0 auto;box-shadow:0 6px 12px rgba(255,184,0,0.2);box-sizing:border-box;">

    <div class="scalable" style="font-size:40px;margin-bottom:10px;line-height:1;">⭐</div>

    <h3 class="scalable" style="color:#FFB800;font-size:16px;margin:0 0 12px 0;text-transform:uppercase;letter-spacing:1.2px;font-weight:700;line-height:1.25;">
      Le Nostre Recensioni
    </h3>

    <div style="background-color:#0a0a0a;padding:15px;border-radius:8px;border:1px solid #333;margin-bottom:15px;">
      <p class="scalable" style="color:#FFB800;font-size:20px;margin:0 0 8px 0;font-weight:bold;line-height:1.1;">⭐⭐⭐⭐⭐</p>

      <div style="margin:0 0 10px 0;">
        <div class="scalable" style="color:#999;font-size:10px;letter-spacing:.6px;text-transform:uppercase;margin-bottom:6px;">
          Scheda Locanda del Contadino
        </div>

        <a class="scalable" href="https://share.google/EUBfJStD6x1miReSF" target="_blank" rel="noopener noreferrer nofollow" referrerpolicy="no-referrer"
           style="display:inline-block;background:rgba(255,184,0,0.10);border:1px solid #FFB800;color:#FFB800;padding:7px 10px;border-radius:999px;text-decoration:none;font-weight:bold;font-size:11px;max-width:100%;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          Apri scheda su Google →
        </a>
      </div>

      <p class="scalable" style="color:#ccc;font-size:12px;margin:0;line-height:1.5;">
        Leggi le opinioni dei nostri clienti soddisfatti!<br>
        Qualità, passione e tradizione dal 2005.
      </p>
    </div>

    <div style="display:flex;flex-wrap:nowrap;justify-content:center;gap:10px;width:100%;box-sizing:border-box;">

      <a class="scalable" href="https://www.google.com/maps/search/?api=1&query=place_id:Locanda+Del+Contadino+Cremona" target="_blank" rel="noopener noreferrer nofollow" referrerpolicy="no-referrer"
         style="flex:1 1 0;min-width:0;display:flex;align-items:center;justify-content:center;background-color:#FFB800;color:#000;padding:12px 10px;border-radius:25px;text-decoration:none;font-weight:bold;font-size:13px;box-shadow:0 3px 6px rgba(0,0,0,0.3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;">
        LEGGI RECENSIONI
      </a>

      <a class="scalable" href="https://search.google.com/local/writereview?placeid=ChIJP8tBTKj_gEcR_kqlXU3nBaI" target="_blank" rel="noopener noreferrer nofollow" referrerpolicy="no-referrer"
         style="flex:1 1 0;min-width:0;display:flex;align-items:center;justify-content:center;background-color:rgba(255,184,0,0.12);color:#FFB800;padding:12px 10px;border-radius:25px;text-decoration:none;font-weight:bold;font-size:13px;border:1px solid #FFB800;box-shadow:0 3px 6px rgba(0,0,0,0.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;">
        LASCIA RECENSIONE
      </a>

    </div>

    <p class="scalable" style="color:#888;font-size:11px;margin:12px 0 0 0;">
      Anche tu puoi lasciare la tua opinione!
    </p>

  </div>

  <div style="height:1px;width:70%;max-width:300px;margin:20px auto 0 auto;background:linear-gradient(90deg,transparent,#FFB800,transparent);"></div>

</div>

<!-- AUTO‑ADATTAMENTO JS -->
<script>
(function() {
  const box = document.getElementById("reviews-box");
  const scalable = document.querySelectorAll(".scalable");

  scalable.forEach(el => {
    el.dataset.baseSize = parseFloat(window.getComputedStyle(el).fontSize);
  });

  function adapt() {
    const baseWidth = 600;
    const currentWidth = box.clientWidth;
    let scale = currentWidth / baseWidth;
    if (scale > 1) scale = 1;

    scalable.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adapt);
  window.addEventListener("orientationchange", adapt);
  adapt();
})();
</script>












banner facebook
<div id="facebook-box" style="text-align: center; padding: 20px 10px; background-color: #000; overflow: hidden; box-sizing: border-box; position: relative; font-family: Arial, sans-serif; width: 100%; max-width: 600px; margin: 0 auto;">

  <div style="position: absolute; top: 10px; right: 10px; background-color: rgba(0,0,0,0.9); color: #1877F2; padding: 6px 12px; border-radius: 20px; font-size: 10px; font-weight: bold; border: 1px solid #1877F2; z-index: 100;">
    🔒 ZERO COOKIE
  </div>

  <div style="height: 1px; width: 70%; max-width: 300px; margin: 0 auto 20px auto; background: linear-gradient(90deg, transparent, #1877F2, transparent);"></div>

  <div style="background-color: #111; padding: 25px 20px; border: 1px solid #1877F2; text-align: center; border-radius: 12px; overflow: hidden; width: 100%; max-width: 350px; margin: 0 auto; box-shadow: 0 6px 12px rgba(24, 119, 242, 0.2); box-sizing: border-box;">
    
    <div class="scalable" style="font-size: 50px; margin-bottom: 15px; color: #1877F2;">f</div>
    
    <h3 class="scalable" style="color: #1877F2; font-size: 18px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; line-height: 1.3;">Seguici su Facebook</h3>

    <div style="background-color: #0a0a0a; padding: 15px; border-radius: 8px; border: 1px solid #333; margin-bottom: 15px;">
      <p class="scalable" style="color: #1877F2; font-size: 16px; margin: 0 0 10px 0; font-weight: bold;">Entra nella Community!</p>
      <p class="scalable" style="color: #ccc; font-size: 12px; margin: 0; line-height: 1.5;">
        News, eventi e offerte esclusive.<br>
        Foto, video e aggiornamenti dal nostro locale.<br>
        Unisciti ai nostri fan!
      </p>
    </div>

    <div style="width: 100%;">
      <a class="scalable" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer nofollow external" referrerpolicy="no-referrer" style="display: inline-block; background-color: #1877F2; color: #fff; padding: 12px 25px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 13px; box-shadow: 0 3px 6px rgba(0,0,0,0.3);">
        VISITA LA PAGINA →
      </a>
    </div>
    
    <p class="scalable" style="color: #888; font-size: 11px; margin: 12px 0 0 0;">
      Metti Mi Piace e resta aggiornato!
    </p>
  </div>

  <div style="height: 1px; width: 70%; max-width: 300px; margin: 20px auto 0 auto; background: linear-gradient(90deg, transparent, #1877F2, transparent);"></div>

</div>

<!-- AUTO‑ADATTAMENTO JS -->
<script>
(function() {
  const box = document.getElementById("facebook-box");
  const scalable = document.querySelectorAll(".scalable");

  scalable.forEach(el => {
    el.dataset.baseSize = parseFloat(window.getComputedStyle(el).fontSize);
  });

  function adapt() {
    const baseWidth = 600;
    const currentWidth = box.clientWidth;
    let scale = currentWidth / baseWidth;
    if (scale > 1) scale = 1;

    scalable.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adapt);
  window.addEventListener("orientationchange", adapt);
  adapt();
})();
</script>








banner instagrram
<div id="instagram-box" style="text-align: center; padding: 20px 10px; background-color: #000; overflow: hidden; box-sizing: border-box; position: relative; font-family: Arial, sans-serif; width: 100%; max-width: 600px; margin: 0 auto;">

  <div style="position: absolute; top: 10px; right: 10px; background-color: rgba(0,0,0,0.9); color: #E4405F; padding: 6px 12px; border-radius: 20px; font-size: 10px; font-weight: bold; border: 1px solid #E4405F; z-index: 100;">
    🔒 ZERO COOKIE
  </div>

  <div style="height: 1px; width: 70%; max-width: 300px; margin: 0 auto 20px auto; background: linear-gradient(90deg, transparent, #F58529, #DD2A7B, #8134AF, #515BD4, transparent);"></div>

  <div style="background-color: #111; padding: 25px 20px; border: 1px solid #E4405F; text-align: center; border-radius: 12px; overflow: hidden; width: 100%; max-width: 350px; margin: 0 auto; box-shadow: 0 6px 12px rgba(228, 64, 95, 0.2); box-sizing: border-box;">
    
    <div class="scalable" style="font-size: 50px; margin-bottom: 15px;">📷</div>
    
    <h3 class="scalable" style="color: #E4405F; font-size: 18px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; line-height: 1.3;">Seguici su Instagram</h3>

    <div style="background-color: #0a0a0a; padding: 15px; border-radius: 8px; border: 1px solid #333; margin-bottom: 15px;">
      <p class="scalable" style="color: #E4405F; font-size: 16px; margin: 0 0 10px 0; font-weight: bold;">Foto & Stories!</p>
      <p class="scalable" style="color: #ccc; font-size: 12px; margin: 0; line-height: 1.5;">
        Le nostre creazioni più belle in foto.<br>
        Stories, Reels e dietro le quinte.<br>
        Segui il profilo per non perderti nulla!
      </p>
    </div>

    <div style="width: 100%;">
      <a class="scalable" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer nofollow external" referrerpolicy="no-referrer" style="display: inline-block; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); color: #fff; padding: 12px 25px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 13px; box-shadow: 0 3px 6px rgba(0,0,0,0.3);">
        SEGUI IL PROFILO →
      </a>
    </div>
    
    <p class="scalable" style="color: #888; font-size: 11px; margin: 12px 0 0 0;">
      Tagga le tue foto con #NomeLocale
    </p>
  </div>

  <div style="height: 1px; width: 70%; max-width: 300px; margin: 20px auto 0 auto; background: linear-gradient(90deg, transparent, #F58529, #DD2A7B, #8134AF, #515BD4, transparent);"></div>

</div>

<!-- AUTO‑ADATTAMENTO JS -->
<script>
(function() {
  const box = document.getElementById("instagram-box");
  const scalable = document.querySelectorAll(".scalable");

  scalable.forEach(el => {
    el.dataset.baseSize = parseFloat(window.getComputedStyle(el).fontSize);
  });

  function adapt() {
    const baseWidth = 600;
    const currentWidth = box.clientWidth;
    let scale = currentWidth / baseWidth;
    if (scale > 1) scale = 1;

    scalable.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adapt);
  window.addEventListener("orientationchange", adapt);
  adapt();
})();
</script>











banner policy
<div id="privacy-box" style="width:100%;max-width:700px;margin:0 auto;padding:20px 10px;background:#000;color:#fff;font-family:Arial,sans-serif;text-align:center;box-sizing:border-box;overflow-x:hidden;word-wrap:break-word;overflow-wrap:break-word;">

 <!-- HEADER -->
<div style="margin:0 0 22px; text-align:center; max-width:100%; box-sizing:border-box;">
  <h2 class="scalable" style="
    margin:0;
    color:#efbf04;
    font-size:clamp(18px, 2.6vw, 24px);
    line-height:1.2;
    text-transform:uppercase;
    letter-spacing:0.12em;
    font-weight:700;
  ">
    <span style="white-space:nowrap;">🔒 Privacy</span>
    <span> - </span>
    <span style="white-space:nowrap;">Info legali ⚖️</span>
  </h2>

  <div style="
    height:1px;
    width:min(280px, 70%);
    margin:14px auto 0;
    background:linear-gradient(90deg, transparent, #efbf04, transparent);
  "></div>
</div>

  <!-- TITOLARE -->
  <div style="background:#111;border:1px solid #FFD700;border-radius:12px;padding:20px;margin-bottom:15px;text-align:left;font-size:13px;line-height:1.6;max-width:100%;box-sizing:border-box;">
    <h3 class="scalable" style="color:#FFD700;font-size:16px;margin:0 0 15px;text-transform:uppercase;">📋 Titolare del Sito</h3>
    <p class="scalable" style="margin:0;">
      <strong style="color:#FFD700;">Ragione Sociale:</strong> "Locanda del Contadino"<br>
      <strong style="color:#FFD700;">Indirizzo:</strong> "Via Battaglione 86, Cremona, 26100"<br>
      <strong style="color:#FFD700;">P.IVA:</strong> "01358540191"<br>
      <strong style="color:#FFD700;">Email:</strong> "locandadelcontadino@gmail.com"<br>
      <strong style="color:#FFD700;">Telefono:</strong> "+39 0372 451964"
    </p>
  </div>

  <!-- PRIVACY POLICY SEMPLIFICATA -->
  <div style="background:#111;border:1px solid #FFD700;border-radius:12px;padding:20px;margin-bottom:15px;text-align:left;font-size:13px;line-height:1.6;max-width:100%;box-sizing:border-box;">
    <h3 class="scalable" style="color:#FFD700;font-size:16px;margin:0 0 15px;text-transform:uppercase;">🛡️ Informativa Privacy</h3>
    
    <p class="scalable" style="margin:0 0 15px;">
      Ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003, ti informiamo che:
    </p>

    <!-- BOX COSA NON FACCIAMO -->
    <div style="background:#0a0a0a;border-radius:8px;padding:15px;margin-bottom:15px;font-size:12px;line-height:1.6;max-width:100%;box-sizing:border-box;">
      <p class="scalable" style="color:#FFD700;font-weight:bold;margin:0 0 8px;">✅ COSA NON FACCIAMO</p>
      <ul class="scalable" style="margin:0;padding-left:20px;line-height:1.8;">
        <li>Non utilizziamo Google Analytics o altri sistemi di tracciamento</li>
        <li>Non installiamo cookie di profilazione o marketing</li>
        <li>Non raccogliamo dati personali tramite form</li>
        <li>Non inviamo newsletter o comunicazioni commerciali</li>
        <li>Non condividiamo dati con terze parti</li>
      </ul>
    </div>

    <!-- BOX HOSTING E COOKIE TECNICI -->
    <div style="background:#0a0a0a;border-radius:8px;padding:15px;margin-bottom:15px;font-size:12px;line-height:1.6;max-width:100%;box-sizing:border-box;">
      <p class="scalable" style="color:#FFD700;font-weight:bold;margin:0 0 8px;">ℹ️ HOSTING E COOKIE TECNICI</p>
      <p class="scalable" style="margin:0;">
        Questo sito è ospitato su <strong>Google Sites</strong>, un servizio di Google LLC.
        Google potrebbe utilizzare cookie tecnici strettamente necessari per il funzionamento del servizio.
        Questi cookie non richiedono il tuo consenso preventivo ai sensi dell'art. 122 del Codice Privacy,
        in quanto indispensabili per l'erogazione del servizio.
      </p>
    </div>

   <!-- BOX LINK ESTERNI -->
<div style="background:#0a0a0a;border-radius:8px;padding:15px;margin-bottom:15px;font-size:12px;line-height:1.6;max-width:100%;box-sizing:border-box;">

 <p class="scalable" style="color:#FFD700;font-weight:bold;margin:0 0 8px;">🔗 LINK A SITI E APP ESTERNI</p>

<p class="scalable" style="margin:0 0 10px;">
  I link presenti su questo sito (social network, mappe, recensioni) sono
  <strong>collegamenti diretti</strong> che non installano cookie prima del clic.
  Su smartphone alcuni link possono aprire le rispettive <strong>app</strong>.
  Cliccando, verrai reindirizzato a <strong>servizi di terze parti</strong> che applicano le proprie informative privacy.
</p>

<!-- WHATSAPP -->
<div style="background:#0a0a0a;border-radius:8px;padding:15px;margin:15px 0;font-size:12px;line-height:1.6;max-width:100%;box-sizing:border-box;">
  <p class="scalable" style="color:#FFD700;font-weight:bold;margin:0 0 8px;">💬 Pulsante WhatsApp</p>

 <p class="scalable" style="margin:0 0 10px;"> Nella pagina <strong>Menu Pranzo Fisso</strong>, è possibile <strong>condividerlo tramite l’app WhatsApp</strong> utilizzando l’apposito pulsante presente a destra della lavagna. Questo pulsante: 
</p>
  <ul class="scalable" style="margin:0 0 10px 18px;padding:0;line-height:1.7;">
    <li>non installa cookie</li>
    <li>non traccia la navigazione</li>
    <li>non raccoglie dati personali</li>
  </ul>

  <p class="scalable" style="margin:0;">
    Cliccando, l’utente viene reindirizzato all’app o al servizio WhatsApp, 
    che applica la propria informativa privacy:
    <br>
    <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
       style="color:#efbf04;text-decoration:none;overflow-wrap:anywhere;">
      whatsapp.com/legal/privacy-policy
    </a>
  </p>
</div>

  <ul class="scalable" style="color:#999;font-size:11px;margin:0;padding-left:0;list-style-position:inside;line-height:1.7;">
    <li style="margin:0 0 6px;">
      <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer"
         style="color:#efbf04;text-decoration:none;overflow-wrap:anywhere;">
        Google: policies.google.com/<wbr>privacy
      </a>
    </li>

    <li style="margin:0 0 6px;">
      <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer"
         style="color:#efbf04;text-decoration:none;overflow-wrap:anywhere;">
        Facebook: facebook.com/<wbr>privacy/<wbr>policy
      </a>
    </li>

    <li style="margin:0 0 6px;">
      <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer"
         style="color:#efbf04;text-decoration:none;overflow-wrap:anywhere;">
        Instagram: privacycenter.instagram.com/<wbr>policy
      </a>
    </li>

    <li style="margin:0 0 6px;">
      <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
         style="color:#efbf04;text-decoration:none;overflow-wrap:anywhere;">
        TikTok: tiktok.com/<wbr>legal/<wbr>privacy-policy
      </a>
    </li>

    <li style="margin:0;">
      <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer"
         style="color:#efbf04;text-decoration:none;overflow-wrap:anywhere;">
        Apple (Maps): apple.com/<wbr>legal/<wbr>privacy
      </a>
    </li>
  </ul>

</div>

    <!-- BOX IMMAGINI E CONTENUTI -->
    <div style="background:#0a0a0a;border-radius:8px;padding:15px;font-size:12px;line-height:1.6;max-width:100%;box-sizing:border-box;">
      <p class="scalable" style="color:#FFD700;font-weight:bold;margin:0 0 8px;">🖼️ IMMAGINI E CONTENUTI</p>
      <p class="scalable" style="margin:0;">
        "Tutti i contenuti multimediali futuri (banner social, mappe, carosello) saranno ospitati esclusivamente sui nostri server (o su Google Sites), evitando l'uso di hosting esterni di terze parti."
      </p>
    </div>
  </div>

 <!-- I TUOI DIRITTI -->
<div style="background:#111;border:1px solid #FFD700;border-radius:12px;padding:20px;margin-bottom:15px;text-align:left;font-size:13px;line-height:1.6;max-width:100%;box-sizing:border-box;">
  <h3 class="scalable" style="color:#FFD700;font-size:16px;margin:0 0 15px;text-transform:uppercase;">⚖️ I Tuoi Diritti</h3>

  <p class="scalable" style="margin:0 0 10px;">
    Ai sensi degli artt. 15-22 del GDPR, hai diritto di:
  </p>

  <ul class="scalable" style="margin:0 0 15px;padding-left:20px;line-height:1.8;">
    <li>Accedere ai tuoi dati personali</li>
    <li>Richiederne la rettifica o cancellazione</li>
    <li>Limitare o opporti al trattamento</li>
    <li>Richiedere la portabilità dei dati</li>

    <li>
      Proporre reclamo al Garante Privacy
      <div style="margin-top:6px;">
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer"
           style="color:#FFD700;text-decoration:underline;overflow-wrap:anywhere;display:inline-block;">
          garanteprivacy.it
        </a>
      </div>
    </li>
  </ul>

  <p class="scalable" style="color:#999;font-size:11px;margin:0;line-height:1.5;font-style:italic;">
    Nota: Poiché questo sito non raccoglie dati personali, tali diritti si applicano solo
    in relazione ai dati eventualmente trattati da Google Sites come hosting provider.
  </p>
</div>

  <!-- HOSTING GOOGLE -->
  <div style="background:#111;border:1px solid #FFD700;border-radius:12px;padding:20px;margin-bottom:15px;text-align:left;font-size:13px;line-height:1.6;max-width:100%;box-sizing:border-box;">
    <h3 class="scalable" style="color:#FFD700;font-size:16px;margin:0 0 15px;text-transform:uppercase;">☁️ Informazioni sull'Hosting</h3>
    
    <p class="scalable" style="margin:0 0 10px;">
      <strong style="color:#FFD700;">Provider:</strong> Google Sites (Google LLC)<br>
      <strong style="color:#FFD700;">Sede:</strong> 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
    </p>
    
    <p class="scalable" style="font-size:12px;margin:0 0 10px;">
      Google aderisce al Data Privacy Framework UE-USA per il trasferimento di dati personali.
    </p>
    
    <p class="scalable" style="color:#999;font-size:11px;margin:0;line-height:1.5;">
      Per maggiori informazioni:
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style="color:#FFD700;text-decoration:none;word-break:break-all;overflow-wrap:anywhere;">policies.google.com/privacy</a> |
      <a href="https://support.google.com/sites" target="_blank" rel="noopener" style="color:#FFD700;text-decoration:none;word-break:break-all;overflow-wrap:anywhere;">support.google.com/sites</a>
    </p>
  </div>

 <!-- AGGIORNAMENTI -->
<div style="background:#111;border:1px solid #FFD700;border-radius:12px;padding:20px;text-align:left;font-size:13px;line-height:1.6;max-width:100%;box-sizing:border-box;">
  <h3 class="scalable" style="color:#FFD700;font-size:16px;margin:0 0 15px;text-transform:uppercase;">📅 Ultimo Aggiornamento</h3>

  <p class="scalable" style="margin:0 0 10px 0;">
    Questa informativa è stata aggiornata il
  </p>

  <div style="margin:0 0 10px 0;">
    <span class="scalable" style="display:inline-block;border:1px solid #FFD700;background:rgba(255,215,0,0.06);color:#FFD700;padding:6px 10px;border-radius:999px;font-weight:700;white-space:nowrap;">
      21-02-2026
    </span>
  </div>

  <p class="scalable" style="margin:0;">
    Eventuali modifiche saranno pubblicate su questa pagina.
  </p>
</div>

  <!-- FOOTER -->
  <div style="margin-top:20px;padding-top:15px;border-top:1px solid #333;max-width:100%;box-sizing:border-box;">
    <p class="scalable" style="color:#666;font-size:10px;margin:0;line-height:1.5;">
      Informativa redatta ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 e s.m.i.
    </p>
  </div>

</div>

<!-- AUTO‑ADATTAMENTO JS -->
<script>
(function() {
  const box = document.getElementById("privacy-box");
  const scalable = document.querySelectorAll(".scalable");

  scalable.forEach(el => {
    el.dataset.baseSize = parseFloat(window.getComputedStyle(el).fontSize);
  });

  function adapt() {
    const baseWidth = 700;
    const currentWidth = box.clientWidth;
    let scale = currentWidth / baseWidth;
    if (scale > 1) scale = 1;

    scalable.forEach(el => {
      const base = parseFloat(el.dataset.baseSize);
      el.style.fontSize = (base * scale) + "px";
    });
  }

  window.addEventListener("resize", adapt);
  window.addEventListener("orientationchange", adapt);
  adapt();
})();
</script>







