# 📘 Locanda del Contadino — Schema.org Ecosystem

Questo repository contiene l’intero ecosistema **Schema.org** utilizzato per il sito ufficiale *Locanda del Contadino*.  
Gli schema sono organizzati in modo modulare, validi e collegati tra loro tramite `@id`, seguendo le migliori pratiche SEO tecniche.

L’obiettivo è fornire a Google un modello semantico completo, coerente e facilmente indicizzabile.

---

## 📂 Struttura del Repository

Tutti gli schema si trovano nella cartella:


Ogni file rappresenta un’entità distinta, autonoma e collegata al resto dell’ecosistema.

---

## 🧩 Schema Principali

| File | Tipo | Descrizione |
|------|------|-------------|
| `website.html` | WebSite | Identità del sito, SearchAction, struttura principale. |
| `restaurant.html` | Restaurant | Entità principale del ristorante. |
| `service.html` | Service | Servizi offerti (es. consegna, prenotazioni). |
| `pizza-delivery-cremona.html` | Restaurant | Pagina dedicata al servizio di consegna a Cremona. |
| `organization.html` | Organization | Identità ufficiale dell’azienda. |
| `maps.html` | Restaurant (Local SEO) | Booster per Google Maps e coerenza NAP. |
| `aggregate-rating.html` | AggregateRating | Rating aggregato avanzato. |
| `searchbox.html` | WebSite | Sitelinks SearchBox per Google. |
| `about.html` | AboutPage | Collegato alla pagina “Chi siamo” su Google Sites. |
| `contact.html` | ContactPage | Collegato alla pagina “Contatti” su Google Sites. |

---

## 🗂️ Schema Secondari

| File | Tipo | Descrizione |
|------|------|-------------|
| `breadcrumbs.html` | BreadcrumbList | Navigazione strutturata. |
| `faq.html` | FAQPage | Domande frequenti. |
| `menu.html` | ItemList | Menu generale. |
| `pizze-bianche.html` | ItemList | Categoria pizze bianche. |
| `pizze-classiche.html` | ItemList | Categoria pizze classiche. |
| `pizze-integrali.html` | ItemList | Categoria pizze integrali. |
| `pizze-speciali.html` | ItemList | Categoria pizze speciali. |
| `impasti-biologici.html` | ItemList | Tipologie di impasti. |
| `allergeni.html` | ItemList | Informazioni sugli allergeni. |
| `recensioni.html` | Review | Recensioni singole. |
| `pranzo-fisso.html` | ItemList | Menu pranzo fisso. |

---

## 🔗 Schema Index

La pagina **Schema Index** (presente su Google Sites) elenca e collega tutti gli schema del repository, fungendo da mappa ufficiale dell’ecosistema semantico.

URL della pagina:  https://sites.google.com/view/locandadelcontadino/schema-index


---

## 🧠 Architettura Semantica

L’ecosistema è costruito secondo i seguenti principi:

- **Modularità**: ogni schema è indipendente e facilmente aggiornabile.  
- **Coerenza**: tutti gli schema condividono lo stesso `@id` di base.  
- **Collegamenti interni**: uso corretto di `isPartOf`, `publisher`, `itemReviewed`.  
- **Local SEO**: presenza di schema dedicati a Google Maps e NAP.  
- **Rich Snippet Ready**: rating avanzato, FAQ, menu, servizi.  
- **Scalabilità**: facile aggiungere nuove categorie o pagine.  

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

Locanda del Contadino  
Via Battaglione 86, Cremona (CR)  
Telefono: +39 0372 451964  

---

## © Licenza

Questo repository è parte del progetto *Locanda del Contadino*.  
Tutti i diritti riservati.
