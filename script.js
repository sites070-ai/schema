/* ============================
   NORMALIZZAZIONE
============================ */
function normalizzaNome(nome) {
  return nome.toLowerCase().trim().replace(/\s+/g, " ");
}

/* ============================
   TROVA PIATTO NEL DATABASE
============================ */
function trovaPiatto(nomePiatto) {
  const n = normalizzaNome(nomePiatto);
  if (TOP_PIATTI[n]) return TOP_PIATTI[n];

  for (const [nomeBase, dati] of Object.entries(TOP_PIATTI)) {
    if (dati.sinonimi && dati.sinonimi.some(s => normalizzaNome(s) === n)) {
      return dati;
    }
  }
  return null;
}

/* ============================
   DESCRIZIONE GASTRONOMICA
============================ */
function descrizioneBreve(nome) {
  const t = normalizzaNome(nome);

  if (t.includes("pesto")) return "Fresco e aromatico";
  if (t.includes("panna") || t.includes("formaggio")) return "Ricco e cremoso";
  if (t.includes("pomodoro") || t.includes("basilico")) return "Classico intramontabile";
  if (t.includes("arrosto") || t.includes("forno")) return "Ricetta della tradizione";
  if (t.includes("griglia")) return "Grigliatura lenta";
  if (t.includes("zucchine") || t.includes("verdure")) return "Cottura leggera";
  if (t.includes("insalata")) return "Fresca e semplice";

  return "Specialità del giorno";
}

/* ============================
   REGIONE AUTOMATICA
============================ */
function regionalitaPiatto(nomePiatto, datiTop) {
  if (datiTop && datiTop.regione) return datiTop.regione;

  const t = normalizzaNome(nomePiatto);

  if (t.includes("carbonara") || t.includes("amatriciana") || t.includes("cacio e pepe"))
    return "Lazio";

  if (t.includes("ragù") || t.includes("pappardelle"))
    return "Emilia Romagna / Toscana";

  if (t.includes("milanese") || t.includes("ossobuco"))
    return "Lombardia";

  if (t.includes("norma") || t.includes("sarde") || t.includes("arancini") || t.includes("caponata"))
    return "Sicilia";

  return "Italia";
}

/* ============================
   BADGE + REGIONE + DESCRIZIONE
============================ */
function evidenziaPiattiTop() {
  const piatti = document.querySelectorAll("section ul li");

  piatti.forEach(li => {
    const nomeOriginale = li.textContent.trim();
    const datiTop = trovaPiatto(nomeOriginale);

    if (datiTop) {
      let badgeIcon = "✨";
      if (datiTop.iconico) badgeIcon = "🥇";
      else if (datiTop.top) badgeIcon = "🔥";
      else if (datiTop.selezione) badgeIcon = "✨";

      const regione = regionalitaPiatto(nomeOriginale, datiTop);
      const descr = descrizioneBreve(nomeOriginale);

      li.classList.add("top-dish");
      li.innerHTML = `
        <span class="piatto-nome"><span class="emoji">${badgeIcon}</span> ${nomeOriginale}</span>
        <span class="piatto-meta">${regione} — ${descr}</span>
      `;
    }
  });
}

/* ============================
   JSON-LD SERIO PER GOOGLE
============================ */
function estraiPiatti(selector) {
  return Array.from(document.querySelectorAll(selector))
    .map(li => li.textContent.trim())
    .filter(t => t.length > 0);
}

function generaMenuSection(nome, piatti) {
  return {
    "@type": "MenuSection",
    "name": nome,
    "hasMenuItem": piatti.map(piatto => {
      const datiTop = trovaPiatto(piatto);
      const regione = regionalitaPiatto(piatto, datiTop);
      const descr = descrizioneBreve(piatto);

      return {
        "@type": "MenuItem",
        "name": piatto,
        "description": `${regione} — ${descr}`,
        "offers": {
          "@type": "Offer",
          "price": "14.00",
          "priceCurrency": "EUR"
        }
      };
    })
  };
}

function generaJSONLD() {
  const primi = estraiPiatti("section:nth-of-type(1) ul li");
  const secondi = estraiPiatti("section:nth-of-type(2) ul li");
  const contorni = estraiPiatti("section:nth-of-type(3) ul li");

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu del Giorno - Locanda del Contadino",
    "description": "Menu del giorno aggiornato quotidianamente.",
    "hasMenuSection": [
      generaMenuSection("Primi", primi),
      generaMenuSection("Secondi", secondi),
      generaMenuSection("Contorni", contorni)
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(jsonLD, null, 2);
  document.body.appendChild(script);
}

/* ============================
   AVVIO
============================ */
window.onload = function() {
  evidenziaPiattiTop();
  generaJSONLD();
};
