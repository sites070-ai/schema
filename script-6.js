document.addEventListener("DOMContentLoaded", function () {
    generaMiglioramentiPiatti();
    generaStoricoRicorrenze();
    generaJSONLD();
    aggiungiFirmaLocanda();
});

/* ============================================================
   1. DESCRIZIONI + REGIONE + BADGE (database)
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

        /* BADGE DAL DATABASE */
        let badge = "";
        if (dati.iconico) badge += "🥇 Iconico ";
        if (dati.top) badge += "🔥 Top ";
        if (dati.selezione) badge += "✨ Selezione ";

        /* COLORE AMBRATO */
        meta.style.color = "#c9a23f";
        meta.style.fontWeight = "500";

        /* SALVO BADGE DATABASE PER EVITARE DUPLICATI */
        meta.dataset.badgeDb = badge.trim();

        /* OUTPUT */
        meta.innerHTML = `
            ${descrizione}<br>
            ${regione}<br>
            ${badge}
        `;
    });
}

/* ============================================================
   2. DESCRIZIONI "DA CHEF"
   ============================================================ */
function generaDescrizione(nome, dati) {

    const categorie = {
        "primo": [
            `Ricetta semplice e genuina, perfetta per ogni palato.`,
            `Un primo piatto che valorizza ingredienti freschi e di qualità.`,
            `Piatto di tradizione italiana preparato con cura.`,
            `Un classico della cucina casalinga, saporito e confortante.`,
            `Piatto avvolgente, preparato con ingredienti selezionati.`,
            `Una ricetta che unisce semplicità e gusto autentico.`,
            `Un primo che celebra la tradizione italiana con equilibrio.`,
            `Preparazione cremosa e ricca di profumi.`,
            `Un piatto caldo e confortante, perfetto per ogni stagione.`,
            `Preparazione equilibrata, dal gusto autentico.`
        ],
        "secondo": [
    `Secondo piatto ricco e gustoso, tipico della cucina italiana.`,
    `Cottura lenta per ottenere morbidezza e sapore.`,
    `Ricetta tradizionale, saporita e soddisfacente.`,
    `Un secondo che unisce semplicità e gusto.`,
            `Secondo piatto preparato con attenzione per esaltarne il sapore.`,
`Cottura studiata per ottenere una consistenza morbida e piacevole.`,
`Ricetta dal gusto deciso, tipica della cucina casalinga.`,
`Un secondo equilibrato, ricco di profumi e tradizione.`,
`Preparazione saporita che valorizza ogni ingrediente.`,
    `Preparazione rustica, dal carattere deciso.`
        ],
        "contorno": [
            `Un accompagnamento sano e gustoso.`,
            `Preparazione semplice, fresca e saporita.`,
            `Contorno leggero e genuino, ideale per ogni piatto.`,
            `Verdure selezionate e cucinate con cura.`,
            `Contorno leggero che accompagna perfettamente ogni portata.`,
`Verdure cucinate con cura per mantenere freschezza e gusto.`,
`Un contorno semplice ma ricco di sapore.`,
`Preparazione genuina, ideale per un pasto equilibrato.`,
`Un mix di sapori delicati e naturali.`,
            `Un contorno classico della cucina italiana.`
        ]
    };

    const lista = categorie[dati.categoria] || ["Piatto preparato con ingredienti freschi."];

    return lista[Math.floor(Math.random() * lista.length)];
}

/* ============================================================
   3. STORICO RICORRENZE (senza duplicati)
   ============================================================ */
function generaStoricoRicorrenze() {

    const piattiHTML = document.querySelectorAll("li");

    let storico = JSON.parse(localStorage.getItem("storicoPiatti")) || {};

    piattiHTML.forEach(li => {
        const nome = li.textContent.trim();
        let meta = li.querySelector(".piatto-meta");
        if (!meta) return;

        /* SE CI SONO GIÀ BADGE → NON AGGIUNGO NULLA */
        const testoMeta = meta.innerHTML;

        if (
            testoMeta.includes("🥇") ||
            testoMeta.includes("🔥") ||
            testoMeta.includes("✨")
        ) {
            storico[nome] = (storico[nome] || 0) + 1;
            return;
        }

        /* ALTRIMENTI USO LO STORICO PER ASSEGNARE UN SOLO BADGE */
        storico[nome] = (storico[nome] || 0) + 1;

        let badge = "";
        if (storico[nome] >= 4) badge = "🥇 Iconico";
        else if (storico[nome] >= 2) badge = "🔥 Top";
        else badge = "✨ Selezione";

        meta.innerHTML += `<br>${badge}`;
    });

    localStorage.setItem("storicoPiatti", JSON.stringify(storico));
}

/* ============================================================
   4. JSON-LD AUTOMATICO (versione corretta)
   ============================================================ */
function generaJSONLD() {

    const sezioni = document.querySelectorAll("section");

    let piatti = [];

    sezioni.forEach(section => {
        const categoria = section.querySelector("h2")
            .textContent
            .replace("✦", "")
            .trim();

        const items = section.querySelectorAll("li");

        items.forEach(li => {
            const nome = li.childNodes[0].textContent.trim(); // solo nome piatto

            piatti.push({
                "@type": "MenuItem",
                "name": nome,
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

    const tag = document.getElementById("json-ld");
    if (tag) {
        tag.textContent = JSON.stringify(schema, null, 2);
    }
}

/* ============================================================
   5. FIRMA AUTOMATICA SOTTO "GRAZIE E BUON APPETITO"
   ============================================================ */
function aggiungiFirmaLocanda() {
    const chiusura = document.querySelector(".chiusura");
    if (!chiusura) return;

    if (document.querySelector(".firma-locanda")) return;

    const firma = document.createElement("div");
    firma.className = "firma-locanda";
    firma.textContent = "Locanda del Contadino — dal 2005";

    chiusura.insertAdjacentElement("afterend", firma);
}
/* ============================================================
   BARRA SOCIAL — AZIONI
   ============================================================ */
document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("icona-social")) return;

    const azione = e.target.dataset.azione;

    if (azione === "copia") copiaMenu();
    if (azione === "whatsapp") condividiWhatsApp();
    if (azione === "telegram") condividiTelegram();
    if (azione === "facebook") condividiFacebook();
});

/* TESTO MENÙ — versione breve e pulita */
function generaTestoMenu() {
    const data = document.getElementById("data-odierna").textContent;
    let testo = `Menù del giorno (${data})\n\n`;

    document.querySelectorAll("section").forEach(section => {
        const titolo = section.querySelector("h2").textContent.replace("✦ ", "");
        testo += titolo + ":\n";

        section.querySelectorAll("li").forEach(li => {
            testo += "- " + li.childNodes[0].textContent.trim() + "\n";
        });

        testo += "\n";
    });

    return testo.trim();
}

/* COPIA */
function copiaMenu() {
    navigator.clipboard.writeText(generaTestoMenu());
    alert("Menù copiato negli appunti!");
}

/* TELEGRAM */
function condividiTelegram() {
    const testo = encodeURIComponent(generaTestoMenu());
    window.open("https://t.me/share/url?text=" + testo, "_blank");
}

/* FACEBOOK */
function condividiFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + url, "_blank");
}
