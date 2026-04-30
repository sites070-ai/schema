document.addEventListener("DOMContentLoaded", function () {
    generaMiglioramentiPiatti();
    generaJSONLD();
    aggiungiFirmaLocanda();
});

/* ============================================================
   UTILITY — normalizza una stringa per il confronto
   ============================================================ */
function normalizza(str) {
    return str.toLowerCase().replace(/\s+/g, " ").trim();
}

/* ============================================================
   UTILITY — trova la chiave del database che corrisponde
   al nome del piatto (chiave diretta, sinonimo, o parziale)
   ============================================================ */
function trovaPiatto(nomeLI) {
    const n = normalizza(nomeLI);

    // 1. Corrispondenza diretta con la chiave
    if (TOP_PIATTI[n]) return TOP_PIATTI[n];

    // 2. Ricerca tra i sinonimi
    for (const chiave in TOP_PIATTI) {
        const dati = TOP_PIATTI[chiave];
        if (dati.sinonimi && dati.sinonimi.some(s => normalizza(s) === n)) return dati;
    }

    // 3. Corrispondenza parziale
    for (const chiave in TOP_PIATTI) {
        if (chiave.includes(n) || n.includes(chiave)) return TOP_PIATTI[chiave];
    }

    return null;
}

/* ============================================================
   1. DESCRIZIONI + REGIONE + BADGE
   ============================================================ */
function generaMiglioramentiPiatti() {

    const piattiHTML = document.querySelectorAll("section li");

    piattiHTML.forEach(li => {
        const nomeRaw = li.childNodes[0] ? li.childNodes[0].textContent.trim() : li.textContent.trim();
        if (!nomeRaw) return;

        const dati = trovaPiatto(nomeRaw);
        if (!dati) return;

        if (li.querySelector(".piatto-meta")) return; // evita duplicati

        /* SPAN NOME */
        const spanNome = document.createElement("span");
        spanNome.className = "piatto-nome";
        spanNome.textContent = nomeRaw;

        /* SPAN META */
        const meta = document.createElement("span");
        meta.className = "piatto-meta";

        const descrizione = generaDescrizione(dati);
        const regione     = dati.regione ? "📍 " + dati.regione : "📍 Italia";

        let badge = "";
        if (dati.iconico)   badge += "🥇 Iconico ";
        if (dati.top)       badge += "🔥 Top ";
        if (dati.selezione) badge += "✨ Selezione ";

        meta.innerHTML = descrizione + "<br>" + regione + (badge ? "<br>" + badge.trim() : "");

        if (dati.top || dati.iconico) li.classList.add("top-dish");

        li.textContent = "";
        li.appendChild(spanNome);
        li.appendChild(meta);
    });
}

/* ============================================================
   2. DESCRIZIONI "DA CHEF"
   ============================================================ */
function generaDescrizione(dati) {
    const categorie = {
        "primo": [
            "Ricetta semplice e genuina, perfetta per ogni palato.",
            "Un primo piatto che valorizza ingredienti freschi e di qualità.",
            "Piatto di tradizione italiana preparato con cura.",
            "Un classico della cucina casalinga, saporito e confortante.",
            "Preparazione equilibrata, dal gusto autentico.",
            "Piatto avvolgente, preparato con ingredienti selezionati.",
            "Una ricetta che unisce semplicità e gusto autentico.",
            "Un primo che celebra la tradizione italiana con equilibrio.",
            "Preparazione cremosa e ricca di profumi.",
            "Un piatto caldo e confortante, perfetto per ogni stagione."
        ],
        "secondo": [
            "Secondo piatto ricco e gustoso, tipico della cucina italiana.",
            "Cottura lenta per ottenere morbidezza e sapore.",
            "Ricetta tradizionale, saporita e soddisfacente.",
            "Un secondo che unisce semplicità e gusto.",
            "Preparazione rustica, dal carattere deciso.",
            "Secondo piatto preparato con attenzione per esaltarne il sapore.",
            "Cottura studiata per ottenere una consistenza morbida e piacevole.",
            "Ricetta dal gusto deciso, tipica della cucina casalinga.",
            "Un secondo equilibrato, ricco di profumi e tradizione.",
            "Preparazione saporita che valorizza ogni ingrediente."
        ],
        "contorno": [
            "Un accompagnamento sano e gustoso.",
            "Preparazione semplice, fresca e saporita.",
            "Contorno leggero e genuino, ideale per ogni piatto.",
            "Verdure selezionate e cucinate con cura.",
            "Un contorno classico della cucina italiana.",
            "Contorno leggero che accompagna perfettamente ogni portata.",
            "Verdure cucinate con cura per mantenere freschezza e gusto.",
            "Un contorno semplice ma ricco di sapore.",
            "Preparazione genuina, ideale per un pasto equilibrato.",
            "Un mix di sapori delicati e naturali."
        ]
    };
    const lista = categorie[dati.categoria] || ["Piatto preparato con ingredienti freschi."];
    return lista[Math.floor(Math.random() * lista.length)];
}

/* ============================================================
   3. JSON-LD AUTOMATICO
   ============================================================ */
function generaJSONLD() {
    const sezioni = document.querySelectorAll("section");
    let piatti = [];

    sezioni.forEach(section => {
        const categoria = section.querySelector("h2").textContent.replace("✦", "").trim();
        section.querySelectorAll("li").forEach(li => {
            const spanNome = li.querySelector(".piatto-nome");
            const nome = spanNome ? spanNome.textContent.trim()
                                  : (li.childNodes[0] ? li.childNodes[0].textContent.trim() : li.textContent.trim());
            if (nome) piatti.push({ "@type": "MenuItem", "name": nome, "category": categoria });
        });
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Menù del Giorno — Pranzo Fisso",
        "servesCuisine": "Cucina tradizionale italiana",
        "provider": { "@type": "Restaurant", "name": "Locanda del Contadino" },
        "url": window.location.href,
        "hasMenuItem": piatti
    };

    const tag = document.getElementById("json-ld");
    if (tag) tag.textContent = JSON.stringify(schema, null, 2);
}

/* ============================================================
   4. FIRMA AUTOMATICA
   ============================================================ */
function aggiungiFirmaLocanda() {
    const chiusura = document.querySelector(".chiusura");
    if (!chiusura || document.querySelector(".firma-locanda")) return;
    const firma = document.createElement("div");
    firma.className = "firma-locanda";
    firma.textContent = "Locanda del Contadino — dal 2005";
    chiusura.insertAdjacentElement("afterend", firma);
}

/* ============================================================
   BARRA SOCIAL
   ============================================================ */
document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("icona-social")) return;
    const azione = e.target.dataset.azione;
    if (azione === "copia")    copiaMenu();
    if (azione === "whatsapp") condividiWhatsApp();
    if (azione === "telegram") condividiTelegram();
    if (azione === "facebook") condividiFacebook();
});

function generaTestoMenu() {
    const data = document.getElementById("data-odierna").textContent;
    let testo = "Menù del giorno (" + data + ")\n\n";
    document.querySelectorAll("section").forEach(section => {
        const titolo = section.querySelector("h2").textContent.replace("✦ ", "");
        testo += titolo + ":\n";
        section.querySelectorAll("li").forEach(li => {
            const spanNome = li.querySelector(".piatto-nome");
            const nome = spanNome ? spanNome.textContent.trim() : li.textContent.trim();
            testo += "- " + nome + "\n";
        });
        testo += "\n";
    });
    return testo.trim();
}

function copiaMenu() {
    navigator.clipboard.writeText(generaTestoMenu());
    alert("Menù copiato negli appunti!");
}
function condividiTelegram() {
    window.open("https://t.me/share/url?text=" + encodeURIComponent(generaTestoMenu()), "_blank");
}
function condividiFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), "_blank");
}
