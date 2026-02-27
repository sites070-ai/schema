# 📘 Locanda del Contadino — Ecosistema Schema.org

Questo repository contiene l’intero ecosistema **Schema.org** utilizzato dal sito ufficiale *Locanda del Contadino*.  
Gli schema sono organizzati in modo modulare, validati e collegati tra loro tramite `@id`, seguendo le migliori pratiche di SEO tecnica e semantica.

L’obiettivo è fornire a Google un modello strutturato, coerente e facilmente indicizzabile, migliorando la comprensione del sito e la visibilità nei risultati di ricerca.

---

## 📂 Struttura del Repository

Tutti gli schema si trovano nella cartella:

`/schema/`

Ogni file rappresenta un’entità autonoma, connessa al resto dell’ecosistema tramite:

- `@id`
- `isPartOf`
- `about`
- `publisher`
- `itemListElement`

---

## 🧩 Schema Principali

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/website.html | WebSite | Identità del sito, SearchAction, struttura principale. |
| /schema/restaurant.html | Restaurant | Entità principale del ristorante. |
| /schema/organization.html | Organization | Identità aziendale ufficiale. |
| /schema/service.html | Service | Servizi offerti (consegna, prenotazioni, asporto). |
| /schema/pizza-delivery-cremona.html | Restaurant | Pagina dedicata alla consegna a Cremona. |
| /schema/maps.html | LocalBusiness | Booster per Google Maps e coerenza NAP. |
| /schema/aggregate-rating.html | AggregateRating | Rating aggregato avanzato. |
| /schema/searchbox.html | WebSite | Sitelinks SearchBox per Google. |
| /schema/schema-index.html | WebPage | Mappa ufficiale dell’ecosistema semantico. |

---

## 🗂️ Schema Secondari

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/breadcrumbs.html | BreadcrumbList | Navigazione strutturata. |
| /schema/faq.html | FAQPage | Domande frequenti. |
| /schema/menu.html | ItemList | Menu generale. |
| /schema/pizze-bianche.html | OfferCatalog | Categoria pizze bianche. |
| /schema/pizze-classiche.html | OfferCatalog | Categoria pizze classiche. |
| /schema/pizze-integrali.html | OfferCatalog | Categoria pizze integrali. |
| /schema/pizze-speciali.html | OfferCatalog | Categoria pizze speciali. |
| /schema/impasti-biologici.html | ItemList | Tipologie di impasti. |
| /schema/allergeni.html | ItemList | Informazioni sugli allergeni. |
| /schema/recensioni.html | Review | Recensioni singole. |
| /schema/pranzo-fisso.html | ItemList | Menu pranzo fisso. |
| /schema/about.html | AboutPage | Pagina “Chi siamo”. |
| /schema/contact.html | ContactPage | Pagina “Contatti”. |
| /schema/privacy.html | WebPage | Privacy policy. |
| /schema/qr-code.html | WebPage | QR code interattivi. |

---

## 🔗 Schema Index (Hub Semantico)

La pagina **Schema Index** funge da mappa ufficiale dell’intero ecosistema.  
È ospitata su **GitHub Pages** e collega tutte le 24 pagine schema.

🔗 https://sites070-ai.github.io/schema/schema-index.html

---

## 🗺️ Sitemap Ufficiale

La sitemap è ottimizzata per:

- crawl budget  
- priorità semantica  
- scansione completa  
- compatibilità con GitHub Pages  

🔗 https://sites070-ai.github.io/schema/sitemap.xml

---

## 🤖 Robots.txt

Il file robots permette la scansione completa e indica la sitemap.

🔗 https://sites070-ai.github.io/schema/robots.txt

---

## 🧠 Architettura Semantica

L’ecosistema è costruito secondo i seguenti principi:

- **Modularità** — ogni schema è indipendente e aggiornabile.  
- **Coerenza** — tutti gli schema condividono lo stesso dominio `@id`.  
- **Collegamenti interni** — uso corretto di `isPartOf`, `about`, `publisher`.  
- **Local SEO** — presenza di schema dedicati a Maps, NAP e recensioni.  
- **Rich Snippet Ready** — rating, FAQ, menu, servizi, SearchBox.  
- **Scalabilità** — facile aggiungere nuove categorie o entità.  

---

## 🏁 Obiettivo

Questo repository fornisce una struttura semantica completa e professionale, progettata per:

- migliorare la comprensione del sito da parte di Google  
- aumentare la visibilità nei risultati di ricerca  
- rafforzare la presenza locale  
- ottenere rich snippet avanzati  
- mantenere ordine e coerenza nel tempo  

---

## 📞 Contatti

**Locanda del Contadino**  
Via Battaglione 86, Cremona (CR)  
Telefono: +39 0372 451964  

---

## © Licenza

Questo repository è parte del progetto *Locanda del Contadino*.  
Tutti i diritti riservati.
