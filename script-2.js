/* ============================================================
   SCRIPT-2.JS — POTENZIAMENTI PRIORITÀ 1
   - Descrizioni gastronomiche automatiche
   - Regione di origine
   - Badge Iconico / Top / Selezione
   - Colore ambrato coerente con la lavagna
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    generaMiglioramentiPiatti();
});

/* ============================================================
   1. GENERA DESCRIZIONI + REGIONE + BADGE
   ============================================================ */
function generaMiglioramentiPiatti() {

    const piattiHTML = document.querySelectorAll("li");

    piattiHTML.forEach(li => {
        const nomePiatto = li.textContent.trim().toLowerCase();

        if (!TOP_PIATTI[nomePiatto]) return;

        const dati = TOP_PIATTI[nomePiatto];

        /* CREA CONTENITORE META SE NON ESISTE */
        let meta = li.querySelector(".piatto-meta");
        if (!meta) {
            meta = document.createElement("span");
            meta.classList.add("piatto-meta");
            li.appendChild(meta);
        }

        /* ============================================================
           DESCRIZIONE GASTRONOMICA
           ============================================================ */
        const descrizione = generaDescrizione(nomePiatto, dati);

        /* ============================================================
           REGIONE DI ORIGINE
           ============================================================ */
        const regione = dati.regione ? `📍 ${dati.regione}` : "📍 Italia";

        /* ============================================================
           BADGE ICONICO / TOP / SELEZIONE
           ============================================================ */
        let badge = "";
        if (dati.iconico) badge += "🥇 Iconico ";
        if (dati.top) badge += "🔥 Top ";
        if (dati.selezione) badge += "✨ Selezione ";

        /* ============================================================
           COLORE AMBRATO (coerente con la lavagna)
           ============================================================ */
        const colore = "#c9a23f";

        meta.style.color = colore;
        meta.style.fontWeight = "500";

        /* ============================================================
           COSTRUZIONE TESTO META
           ============================================================ */
        meta.innerHTML = `
            ${descrizione}<br>
            ${regione}<br>
            ${badge}
        `;
    });
}

/* ============================================================
   GENERATORE DESCRIZIONI "DA CHEF"
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
