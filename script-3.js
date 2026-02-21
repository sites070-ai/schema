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
            // aggiorno solo il contatore, ma NON aggiungo badge
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
