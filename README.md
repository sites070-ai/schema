# 📘 Locanda del Contadino — Ecosistema Schema.org

Questo repository contiene l'intero ecosistema **Schema.org** utilizzato dal sito ufficiale *Locanda del Contadino*.  
Gli schema sono organizzati in modo modulare, validati e collegati tra loro tramite `@id`, seguendo le migliori pratiche di SEO tecnica e semantica.

L'obiettivo è fornire a Google un modello strutturato, coerente e facilmente indicizzabile, migliorando la comprensione del sito e la visibilità nei risultati di ricerca.

---

## 📂 Struttura del Repository

Tutti gli schema si trovano nella cartella:

`/schema/`

Ogni file rappresenta un'entità autonoma, connessa al resto dell'ecosistema tramite:

- `@id`
- `isPartOf`
- `about`
- `publisher`
- `itemListElement`

---

## 🧩 Schema Core

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/restaurant.html | Restaurant | Entità principale del ristorante. |
| /schema/local-business.html | LocalBusiness | Booster Knowledge Panel e Google Maps. |
| /schema/organization.html | Organization | Identità aziendale ufficiale. |
| /schema/website.html | WebSite | Identità del sito e struttura principale. |
| /schema/service.html | Service | Servizio pizza delivery a domicilio. |
| /schema/aggregate-rating.html | AggregateRating | Rating aggregato 4.3/5 · 473 recensioni. |
| /schema/maps.html | Restaurant | Booster coordinate e coerenza NAP. |
| /schema/opening-hours.html | WebPage | Fonte unica degli orari di apertura. |
| /schema/searchbox.html | WebSite | Sitelinks SearchBox e OrderAction. |
| /schema/schema-index.html | WebPage | Hub semantico — mappa di tutti i 33 schema. |

---

## 🍕 Schema Menù Pizze

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/menu.html | Menu | Indice generale del menù pizzeria e pranzo. |
| /schema/pizze-classiche.html | OfferCatalog | 16 pizze classiche con prezzi. |
| /schema/pizze-speciali.html | OfferCatalog | 53 pizze speciali della casa con prezzi. |
| /schema/pizze-bianche.html | OfferCatalog | 18 pizze bianche senza pomodoro con prezzi. |
| /schema/pizze-integrali.html | OfferCatalog | 16 pizze con impasto integrale biologico. |

---

## 🍽️ Schema Menù del Giorno

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/menu-giorno.html | Menu | Indice padre del menù del giorno. |
| /schema/menu-giorno-primi.html | MenuSection | 44 primi piatti del menù giornaliero. |
| /schema/menu-giorno-secondi.html | MenuSection | 55 secondi piatti del menù giornaliero. |
| /schema/menu-giorno-contorni.html | MenuSection | 17 contorni del menù giornaliero. |
| /schema/pranzo-fisso.html | MenuSection | Pranzo fisso 14€ · martedì–venerdì · solo in loco. |

---

## 📄 Schema Pagine Tematiche

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/pizza-delivery-cremona.html | Restaurant | Delivery venerdì–domenica 18:30–21:30. |
| /schema/impasti-biologici.html | WebPage | Farine biologiche Bio Tipo 1 e Bio Integrale. |
| /schema/allergeni.html | WebPage | 14 allergeni Reg. UE 1169/2011. |
| /schema/recensioni.html | LocalBusiness | Rating 4.3/5 · 473 recensioni · Google Maps e TripAdvisor. |
| /schema/event.html | Event | Pranzo fisso, pizzeria serale e delivery come eventi ricorrenti. |

---

## 🔍 Schema SEO e Supporto

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/faq.html | FAQPage | 13 domande frequenti su delivery, orari, impasti, allergeni. |
| /schema/breadcrumbs.html | BreadcrumbList | 10 percorsi di navigazione gerarchici. |
| /schema/speakable.html | WebPage | Contenuti ottimizzati per voice search e Google Assistant. |
| /schema/social-profiles.html | Organization | sameAs Google Maps, Facebook, TripAdvisor. |
| /schema/qr-code.html | WebPage | 8 QR code con link ai servizi e menù. |

---

## ℹ️ Schema Info e Legale

| File | Tipo | Descrizione |
|------|------|-------------|
| /schema/about.html | AboutPage | Chi siamo — storia e valori. |
| /schema/contact.html | ContactPage | Contatti, orari e pagamenti. |
| /schema/privacy.html | WebPage | Privacy policy — nessun tracciamento. |

---

## 🔗 Schema Index (Hub Semantico)

La pagina **Schema Index** funge da hub di navigazione ufficiale dell'intero ecosistema.  
È ospitata su **GitHub Pages** e collega tutti i **33 file schema** tramite link HTML diretti.

🔗 https://sites070-ai.github.io/schema/schema-index.html

---

## 🗺️ Sitemap Ufficiale

La sitemap è ottimizzata per:

- crawl budget
- priorità semantica
- scansione completa
- compatibilità con GitHub Pages

🔗 https://sites070-ai.github.io/schema/sitemap.txt

---

## 🤖 Robots.txt

Il file robots permette la scansione completa e indica la sitemap ufficiale.

🔗 https://sites070-ai.github.io/robots.txt

---

## 🕐 Orari

| Servizio | Giorni | Orario |
|----------|--------|--------|
| Pranzo fisso in loco | Martedì – Venerdì | 12:00 – 14:00 |
| Pizzeria serale in loco | Martedì – Domenica | 18:30 – 23:00 |
| Delivery | Venerdì – Sabato – Domenica | 18:30 – 21:30 |
| Lunedì | — | Chiuso |

---

## 🧠 Architettura Semantica

L'ecosistema è costruito secondo i seguenti principi:

- **Modularità** — ogni schema è indipendente e aggiornabile.
- **Coerenza** — tutti gli schema condividono lo stesso `@id` base.
- **Collegamenti interni** — uso corretto di `isPartOf`, `about`, `publisher`.
- **Local SEO** — schema dedicati a Maps, NAP, rating e recensioni.
- **Rich Snippet Ready** — rating, FAQ, menù, servizi, SearchBox, Event.
- **Scalabilità** — facile aggiungere nuove categorie o entità.
- **Voice Search** — SpeakableSpecification per Google Assistant.

---

## 🏁 Obiettivo

Questo repository fornisce una struttura semantica completa e professionale, progettata per:

- migliorare la comprensione del sito da parte di Google
- aumentare la visibilità nei risultati di ricerca
- rafforzare la presenza locale a Cremona
- ottenere rich snippet avanzati (FAQ, rating, menù, eventi)
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
