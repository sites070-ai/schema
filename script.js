let TOP_PIATTI = {};

async function caricaDatabase() {
  const url = "https://sites070-ai/.github.io/schema/piatti-menu-pranzo.js";
  const risposta = await fetch(url);
  const testo = await risposta.text();
  eval(testo);
}

/* ============================
   NORMALIZZAZIONE NOME PIATTO
============================ */
function normalizzaNome(nome) {
  return nome.toLowerCase().trim().replace(/\s+/g, " ");
}

/* ============================
   RICERCA PIATTO NELLA TOP
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
   ALLERGENI AUTOMATICI
============================ */
function allergeniAutomatici(nomePiatto, datiTop) {
  if (datiTop && Array.isArray(datiTop.allergeni)) return datiTop.allergeni;

  const t = normalizzaNome(nomePiatto);
  const a = [];

  if (t.includes("panna") || t.includes("burro") || t.includes("formaggio") || t.includes("zola") || t.includes("mozzarella"))
    a.push("latte");

  if (t.includes("uova") || t.includes("carbonara") || t.includes("maionese"))
    a.push("uova");

  if (t.includes("farina") || t.includes("pasta") || t.includes("penne") || t.includes("spaghetti") || t.includes("pappardelle") || t.includes("gnocchi") || t.includes("lasagne"))
    a.push("glutine");

  if (t.includes("tonno") || t.includes("acciughe") || t.includes("salmone") || t.includes("pesce") || t.includes("branzino") || t.includes("spigola"))
    a.push("pesce");

  if (t.includes("noci") || t.includes("mandorle") || t.includes("nocciole") || t.includes("pistacchi"))
    a.push("frutta a guscio");

  return [...new Set(a)];
}

/* ============================
   DIETA AUTOMATICA
============================ */
function dietaAutomatica(nomePiatto, datiTop) {
  if (datiTop && datiTop.dieta) return datiTop.dieta;

  const t = normalizzaNome(nomePiatto);

  if (t.includes("salmone") || t.includes("tonno") || t.includes("acciughe") || t.includes("pesce") || t.includes("branzino") || t.includes("spigola"))
    return "pesce";

  if (t.includes("arrosto") || t.includes("maiale") || t.includes("tacchino") || t.includes("coppa") || t.includes("salsiccia") || t.includes("pollo") || t.includes("vitello") || t.includes("manzo"))
    return "carne";

  if (t.includes("verdure") || t.includes("zucchine") || t.includes("finocchi") || t.includes("insalata") || t.includes("patate") || t.includes("fagioli") || t.includes("lenticchie"))
    return "vegetariano";

  return "non specificato";
}

/* ============================
   REGIONALITÀ
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
   TRADUZIONI
============================ */
function traduci(nomePiatto, lingua) {
  const diz = {
    "spaghetti alla carbonara": { en: "Spaghetti Carbonara" },
    "risotto ai funghi porcini": { en: "Porcini Mushroom Risotto" },
    "spaghetti al pomodoro e basilico": { en: "Spaghetti with Tomato and Basil" },
    "cotoletta alla milanese": { en: "Milanese Cutlet" },
    "pollo arrosto con patate": { en: "Roast Chicken with Potatoes" },
    "branzino al forno": { en: "Baked Sea Bass" }
  };
  const key = normalizzaNome(nomePiatto);
  return diz[key]?.[lingua] || nomePiatto;
}

/* ============================
   QR CODE
============================ */
function generaQRCode() {
  return "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(window.location.href);
}

/* ============================
   STELLE
============================ */
function stelle(n) {
  const s = Math.max(0, Math.min(5, n || 0));
  return "★★★★★".slice(0, s) + "☆☆☆☆☆".slice(0, 5 - s);
}

/* ============================
   EVIDENZIAZIONE PIATTI TOP
============================ */
function evidenziaPiattiTop() {
  const piatti = document.querySelectorAll("section ul li");

  piatti.forEach(li => {
    const nomeOriginale = li.textContent.trim();
    const datiTop = trovaPiatto(nomeOriginale);

    if (datiTop) {

      let badgeIcon = "⭐";
      if (datiTop.iconico) badgeIcon = "🥇";
      else if (datiTop.top) badgeIcon = "🔥";

      li.classList.add("top-dish");

      li.innerHTML = `
        <span class="piatto-nome"><span class="emoji">${badgeIcon}</span> ${nomeOriginale}</span>
        <span class="piatto-meta">${stelle(datiTop.punteggio)} — ${datiTop.regione}</span>
      `;
    }
  });
}

/* ============================
   ESTRAZIONE PIATTI
============================ */
function estraiPiatti(selector) {
  return Array.from(document.querySelectorAll(selector))
    .map(li => li.textContent.trim())
    .filter(t => t.length > 0);
}

/* ============================
   JSON-LD
============================ */
function generaMenuSection(nome, piatti) {
  return {
    "@type": "MenuSection",
    "name": nome,
    "hasMenuItem": piatti.map(piatto => {
      const datiTop = trovaPiatto(piatto);

      return {
        "@type": "MenuItem",
        "name": piatto,
        "description": "Piatto del giorno preparato secondo tradizione italiana.",
        "image": "",
        "allergen": allergeniAutomatici(piatto, datiTop),
        "region": regionalitaPiatto(piatto, datiTop),
        "suitableForDiet": dietaAutomatica(piatto, datiTop),
        "offers": {
          "@type": "Offer",
          "price": "14.00",
          "priceCurrency": "EUR"
        },
        "alternateName": traduci(piatto, "en"),
        "isTopDish": !!datiTop,
        "topScore": datiTop ? datiTop.punteggio : null,
        "topIconico": datiTop ? !!datiTop.iconico : null,
        "topStorico": datiTop ? !!datiTop.storico : null,
        "topBadge": datiTop
          ? (datiTop.iconico ? "Piatto Iconico" : datiTop.top ? "Piatto Top" : "Piatto Storico")
          : null,
        "topRegion": datiTop ? datiTop.regione : null
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
    "description": "Menu del giorno con piatti tipici italiani.",
    "servesCuisine": "Italian",
    "image": generaQRCode(),
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
window.onload = async function() {
  await caricaDatabase();
  evidenziaPiattiTop();
  generaJSONLD();
};
