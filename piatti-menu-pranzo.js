/* 
===========================================
 PROMEMORIA: SCRIVERE IL DATABASE IN ORIZZONTALE
===========================================
- Ogni piatto deve stare su UNA sola riga.
- Nessuna formattazione verticale.
- Struttura compatta: {categoria:"", regione:"", iconico:false, top:false, selezione:false, ...}
- Questo formato è ottimizzato per il menù del giorno.
*/
let TOP_PIATTI = {
  "arrosto di coppa e lonza con patate al forno": {categoria:"secondo", regione:"Emilia-Romagna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["arrosto misto di maiale"], allergeni:[], dieta:"carne"},
  "bistecca alla griglia": {categoria:"secondo", regione:"Italia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["bistecca ai ferri"], allergeni:[], dieta:"carne"},
  "bistecche alla pizzaiola": {categoria:"secondo", regione:"Campania", iconico:false, top:true, selezione:true, punteggio:4, sinonimi:["fettine alla pizzaiola"], allergeni:[], dieta:"carne"},
  "coppa alla griglia": {categoria:"secondo", regione:"Emilia-Romagna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["coppa di maiale alla griglia"], allergeni:[], dieta:"carne"},
  "costine di maiale con verze": {categoria:"secondo", regione:"Lombardia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["costine e verze","puntine con verze"], allergeni:[], dieta:"carne"},
  "cotoletta": {categoria:"secondo", regione:"Lombardia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["cotoletta alla milanese","fettina impanata"], allergeni:["glutine","uova"], dieta:"carne"},
  "grigliata mista salsiccia-coppa-wurstel": {categoria:"secondo", regione:"Italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["grigliata mista","grigliata di carne"], allergeni:[], dieta:"carne"},
  "guanciale in umido con polenta e purè": {categoria:"secondo", regione:"Lombardia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["guanciale in umido","guanciale con polenta"], allergeni:["latte"], dieta:"carne"},
  "insalata mista": {categoria:"contorno", regione:"Italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["insalata verde mista"], allergeni:[], dieta:"vegetariano"},
  "insalata verde": {categoria:"contorno", regione:"Italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["insalata semplice"], allergeni:[], dieta:"vegetariano"},
  "mix di verdure lessate (fagiolini-broccoli-carote-patate)": {categoria:"contorno", regione:"Italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["mix di verdure lessate","verdure bollite","verdure lessate"], allergeni:[], dieta:"vegetariano"},
  "orecchiette al pesto": {categoria:"primo", regione:"Puglia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["orecchiette al pesto di basilico"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "orecchiette con crema di broccoli": {categoria:"primo", regione:"Italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["orecchiette ai broccoli","pasta con crema di broccoli"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "pisarei e fasoi": {categoria:"primo", regione:"Emilia-Romagna", iconico:true, top:true, selezione:false, punteggio:5, sinonimi:["pisarei e faso"], allergeni:["glutine"], dieta:"vegetariano"},
  "pollo arrosto con patate": {categoria:"secondo", regione:"Italia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["pollo al forno con patate"], allergeni:[], dieta:"carne"},
  "pomodori": {categoria:"contorno", regione:"Italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["pomodori freschi","pomodori al piatto"], allergeni:[], dieta:"vegetariano"},
  "saltimbocca alla romana": {categoria:"secondo", regione:"Lazio", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["saltimbocca"], allergeni:["glutine"], dieta:"carne"},
  "spaghetti alla norma (pomodoro-melanzane-ricotta)": {categoria:"primo", regione:"Sicilia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["spaghetti alla norma","pasta alla norma"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "spaghetti al pomodoro e basilico": {categoria:"primo", regione:"Italia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["spaghetti al pomodoro"], allergeni:["glutine"], dieta:"vegetariano"},
  "spaghetti pomodoro e basilico": {categoria:"primo", regione:"Italia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["spaghetti al pomodoro e basilico","spaghetti al pomodoro"], allergeni:["glutine"], dieta:"vegetariano"},
  "spiedino misto (pollo-salsiccia-lonza)": {categoria:"secondo", regione:"Italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["spiedino misto","spiedino di carne"], allergeni:[], dieta:"carne"},
  "tacchino tonnato": {categoria:"secondo", regione:"Piemonte", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["tacchino con salsa tonnata"], allergeni:["uova","pesce"], dieta:"carne"},
  "tortelli di carne panna e prosciutto": {categoria:"primo", regione:"Emilia-Romagna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["tortelli panna e prosciutto"], allergeni:["glutine","latte","uova"], dieta:"carne"},
  "tortiglioni al ragù": {categoria:"primo", regione:"Emilia-Romagna", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["pasta al ragù","tortiglioni al ragù di carne"], allergeni:["glutine"], dieta:"carne"},
  "tortiglioni all'arrabbiata": {categoria:"primo", regione:"Lazio", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["pasta all'arrabbiata","penne all'arrabbiata"], allergeni:["glutine"], dieta:"vegetariano"},
  "tortiglioni con crema di broccoli e speck": {categoria:"primo", regione:"Italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["pasta broccoli e speck","tortiglioni broccoli e speck"], allergeni:["glutine","latte"], dieta:"carne"},
  "zucchine trifolate": {categoria:"contorno", regione:"Italia", iconico:false, top:true, selezione:true, punteggio:4, sinonimi:["zucchine in padella"], allergeni:[], dieta:"vegetariano"}
};





