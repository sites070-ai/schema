/* ============================================================
   SCRIPT-3.JS — PRIORITÀ 1 + PRIORITÀ 2
   - Descrizioni gastronomiche automatiche
   - Regione di origine
   - Badge Iconico / Top / Selezione
   - Copia Menu
   - Storico ricorrenze
   - JSON-LD automatico
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    generaMiglioramentiPiatti();
    generaStoricoRicorrenze();
    generaJSONLD();
});

/* ============================================================
   1. DESCRIZIONI + REGIONE + BADGE
   ============================================================ */
function generaMiglioramentiPiatti() {

    const piattiHTML = document.querySelectorAll("li");

    piattiHTML.forEach(li => {
        const nomePiatto = li.textContent.trim().toLowerCase();

        if (!TOP_PIATTI[nomePiatto]) return;

        const dati = TOP_PIATTI[nomePiatto];

        /* CREA CONTENITORE META */
        let meta = li.querySelector(".piatto-meta");
        if (!meta) {
            meta = document.createElement("span");
            meta.classList.add("piatto-meta");
            li.appendChild(meta);
        }

        /* DESCRIZIONE */
        const descrizione = generaDescrizione(nomePiatto, dati);

        /* REGIONE */
        const regione = dati.regione ? `📍 ${dati.regione}` : "📍 Italia";

        /* BADGE */
        let badge = "";
        if (dati.iconico) badge += "🥇 Iconico ";
        if (dati.top) badge += "🔥 Top ";
        if (dati.selezione) badge += "✨ Selezione ";

        /* COLORE AMBRATO */
        meta.style.color = "#c9a23f";
        meta.style.fontWeight = "500";

        /* OUTPUT */
        meta.innerHTML = `
            ${descrizione}<br>
            ${regione}<br>
            ${badge}
        `;
    });
}

/* ============================================================
   2. GENERATORE DESCRIZIONI "DA CHEF"
   ============================================================ */
function generaDescrizione(nome, dati) {

    const categorie = {
        "primo": [
            `Ricetta semplice e genuina, perfetta per ogni palato.`,
            `Un primo piatto che valorizza ingredienti freschi e di qualità.`,
            `Piatto di tradizione italiana preparato con cura.`,
            `Un classico della cucina casalinga, saporito e confortante.`,
            `Preparazione equilibrata, dal gusto autentico.`
        ],
        "secondo": [
            `Secondo piatto ricco e gustoso, tipico della cucina italiana.`,
            `Carne cotta lentamente per ottenere morbidezza e sapore.`,
            `Ricetta tradizionale, saporita e soddisfacente.`,
            `Un secondo che unisce semplicità e gusto.`,
            `Preparazione rustica, dal carattere deciso.`
        ],
        "contorno": [
            `Un accompagnamento sano e gustoso.`,
            `Preparazione semplice, fresca e saporita.`,
            `Contorno leggero e genuino, ideale per ogni piatto.`,
            `Verdure selezionate e cucinate con cura.`,
            `Un contorno classico della cucina italiana.`
        ]
    };

    const lista = categorie[dati.categoria] || ["Piatto preparato con ingredienti freschi."];

    return lista[Math.floor(Math.random() * lista.length)];
}

/* ============================================================
   3. STORICO RICORRENZE (localStorage)
   ============================================================ */
function generaStoricoRicorrenze() {

    const piattiHTML = document.querySelectorAll("li");

    let storico = JSON.parse(localStorage.getItem("storicoPiatti")) || {};

    piattiHTML.forEach(li => {
        const nome = li.textContent.trim();

        if (!storico[nome]) storico[nome] = 0;
        storico[nome]++;

        /* AGGIORNA BADGE AUTOMATICI */
        let meta = li.querySelector(".piatto-meta");
        if (!meta) return;

        if (storico[nome] >= 4) {
            meta.innerHTML += "<br>🥇 Iconico";
        } else if (storico[nome] >= 2) {
            meta.innerHTML += "<br>🔥 Top";
        } else {
            meta.innerHTML += "<br>✨ Selezione";
        }
    });

    localStorage.setItem("storicoPiatti", JSON.stringify(storico));
}

/* ============================================================
   4. COPIA MENU (funzione globale)
   ============================================================ */
function copiaMenu() {
    const sezioni = document.querySelectorAll("section");
    let testo = "Menù del Giorno:\n\n";

    sezioni.forEach(section => {
        const titolo = section.querySelector("h2").textContent.replace("✦ ", "");
        testo += titolo + ":\n";

        const piatti = section.querySelectorAll("li");
        piatti.forEach(p => testo += "- " + p.textContent.trim() + "\n");

        testo += "\n";
    });

    navigator.clipboard.writeText(testo);
    alert("Menù copiato negli appunti!");
}

/* ============================================================
   5. JSON-LD AUTOMATICO
   ============================================================ */
function generaJSONLD() {

    const sezioni = document.querySelectorAll("section");

    let piatti = [];

    sezioni.forEach(section => {
        const categoria = section.querySelector("h2").textContent.replace("✦ ", "").trim();
        const items = section.querySelectorAll("li");

        items.forEach(li => {
            piatti.push({
                "@type": "MenuItem",
                "name": li.textContent.trim(),
                "category": categoria
            });
        });
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Menù del Giorno — Pranzo Fisso",
        "servesCuisine": "Cucina tradizionale italiana",
        "provider": {
            "@type": "Restaurant",
            "name": "Locanda del Contadino"
        },
        "url": window.location.href,
        "hasMenuItem": piatti
    };

    document.getElementById("json-ld").textContent = JSON.stringify(schema, null, 2);
}
