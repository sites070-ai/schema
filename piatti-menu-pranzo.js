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
  "arrosto di coppa e lonza con patate al forno": {categoria:"secondo", regione:"emilia-romagna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["arrosto misto di maiale"], allergeni:[], dieta:"carne"},
  "arrosto di lonza": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["lonza arrosto","arrosto di maiale"], allergeni:[], dieta:"carne"},
  "bistecca alla griglia": {categoria:"secondo", regione:"italia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["bistecca ai ferri"], allergeni:[], dieta:"carne"},
  "bistecche alla pizzaiola": {categoria:"secondo", regione:"campania", iconico:false, top:true, selezione:true, punteggio:4, sinonimi:["fettine alla pizzaiola"], allergeni:[], dieta:"carne"},
  "brasato di lonza con polenta": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["brasato di lonza","lonza brasata"], allergeni:[], dieta:"carne"},
  "coppa alla griglia": {categoria:"secondo", regione:"emilia-romagna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["coppa di maiale alla griglia"], allergeni:[], dieta:"carne"},
  "costine di maiale con verze": {categoria:"secondo", regione:"lombardia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["costine e verze","puntine con verze"], allergeni:[], dieta:"carne"},
  "cotoletta": {categoria:"secondo", regione:"lombardia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["cotoletta alla milanese","fettina impanata"], allergeni:["glutine","uova"], dieta:"carne"},
  "fagiolini-carote-cavoletti di bruxelles": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["verdure miste bollite","contorno misto verdure"], allergeni:[], dieta:"vegetariano"},
  "fesa di tacchino con rucola e pomodorini": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["tacchino con rucola e pomodorini"], allergeni:[], dieta:"carne"},
  "fusilli al pomodoro e basilico": {categoria:"primo", regione:"italia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["pasta al pomodoro e basilico"], allergeni:["glutine"], dieta:"vegetariano"},
  "gnocchi al gorgonzola": {categoria:"primo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["gnocchi al gorgo"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "gnocchi sardi al ragù di salsiccia e fagioli": {categoria:"primo", regione:"sardegna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["malloreddus al ragù di salsiccia","gnocchetti sardi al ragù"], allergeni:["glutine"], dieta:"carne"},
  "grigliata mista salsiccia-coppa-wurstel": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["grigliata mista","grigliata di carne"], allergeni:[], dieta:"carne"},
  "guanciale in umido con polenta e purè": {categoria:"secondo", regione:"lombardia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["guanciale in umido","guanciale con polenta"], allergeni:["latte"], dieta:"carne"},
  "hamburger alla griglia": {categoria:"secondo", regione:"usa/italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["hamburger ai ferri"], allergeni:[], dieta:"carne"},
  "hamburger con patate al forno": {categoria:"secondo", regione:"usa/italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["hamburger e patate"], allergeni:[], dieta:"carne"},
  "insala mista": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["insalata mista"], allergeni:[], dieta:"vegetariano"},
  "insalata mista": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["insalata verde mista"], allergeni:[], dieta:"vegetariano"},
  "insalata verde": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["insalata semplice"], allergeni:[], dieta:"vegetariano"},
  "lonza di maiale arrosto": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["arrosto di lonza"], allergeni:[], dieta:"carne"},
  "mix di verdure gratinate (patate-carote-cavolfiore-fagiolini)": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["verdure gratinate","mix verdure gratinate"], allergeni:["latte"], dieta:"vegetariano"},
  "mix di verdure lessate (fagiolini-broccoli-carote-patate)": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["mix di verdure lessate","verdure bollite","verdure lessate"], allergeni:[], dieta:"vegetariano"},
  "mix di verdure lessate (patate-carote-broccoli-fagiolini)": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["verdure bollite","mix verdure lessate"], allergeni:[], dieta:"vegetariano"},
  "orecchiette al pesto": {categoria:"primo", regione:"puglia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["orecchiette al pesto di basilico"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "orecchiette con crema di broccoli": {categoria:"primo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["orecchiette ai broccoli","pasta con crema di broccoli"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "patate lesse": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["patate bollite"], allergeni:[], dieta:"vegetariano"},
  "penne con crema di friarielli e ricotta": {categoria:"primo", regione:"campania", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["pasta friarielli e ricotta","penne ai friarielli"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "pizzoccheri con spinaci-patate-verze": {categoria:"primo", regione:"lombardia", iconico:true, top:true, selezione:false, punteggio:5, sinonimi:["pizzoccheri valtellinesi","pizzoccheri"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "pisarei e fasoi": {categoria:"primo", regione:"emilia-romagna", iconico:true, top:true, selezione:false, punteggio:5, sinonimi:["pisarei e faso"], allergeni:["glutine"], dieta:"vegetariano"},
  "pollo arrosto con patate": {categoria:"secondo", regione:"italia", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["pollo al forno con patate"], allergeni:[], dieta:"carne"},
  "pomodori": {categoria:"contorno", regione:"italia", iconico:false, top:false, selezione:true, punteggio:3, sinonimi:["pomodori freschi","pomodori al piatto"], allergeni:[], dieta:"vegetariano"},
  "saltimbocca alla romana": {categoria:"secondo", regione:"lazio", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["saltimbocca"], allergeni:["glutine"], dieta:"carne"},
  "scarola con capperi e olive": {categoria:"contorno", regione:"campania", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["scarola alla napoletana"], allergeni:[], dieta:"vegetariano"},
  "seppioline in umido con piselli": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["seppioline coi piselli","seppie in umido"], allergeni:["pesce"], dieta:"pesce"},
  "spaghetti alla norma (pomodoro-melanzane-ricotta)": {categoria:"primo", regione:"sicilia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["spaghetti alla norma","pasta alla norma"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "spaghetti al pomodoro e basilico": {categoria:"primo", regione:"italia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["spaghetti al pomodoro"], allergeni:["glutine"], dieta:"vegetariano"},
  "spaghetti pomodoro e basilico": {categoria:"primo", regione:"italia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["spaghetti al pomodoro e basilico","spaghetti al pomodoro"], allergeni:["glutine"], dieta:"vegetariano"},
  "spiedino misto (pollo-salsiccia-lonza)": {categoria:"secondo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["spiedino misto","spiedino di carne"], allergeni:[], dieta:"carne"},
  "tacchino tonnato": {categoria:"secondo", regione:"piemonte", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["tacchino con salsa tonnata"], allergeni:["uova","pesce"], dieta:"carne"},
  "tagliatelle al ragù": {categoria:"primo", regione:"emilia-romagna", iconico:true, top:true, selezione:false, punteggio:5, sinonimi:["tagliatelle al ragù di carne","tagliatelle alla bolognese"], allergeni:["glutine","uova"], dieta:"carne"},
  "tortelli di carne panna e prosciutto": {categoria:"primo", regione:"emilia-romagna", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["tortelli panna e prosciutto"], allergeni:["glutine","latte","uova"], dieta:"carne"},
  "tortelli di zucca": {categoria:"primo", regione:"lombardia", iconico:true, top:true, selezione:false, punteggio:5, sinonimi:["tortelli alla zucca","tortelli mantovani"], allergeni:["glutine","latte","uova"], dieta:"vegetariano"},
  "tortiglioni al ragù": {categoria:"primo", regione:"emilia-romagna", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["pasta al ragù","tortiglioni al ragù di carne"], allergeni:["glutine"], dieta:"carne"},
  "tortiglioni all'arrabbiata": {categoria:"primo", regione:"lazio", iconico:true, top:true, selezione:false, punteggio:4, sinonimi:["pasta all'arrabbiata","penne all'arrabbiata"], allergeni:["glutine"], dieta:"vegetariano"},
  "tortiglioni al pomodoro e basilico": {categoria:"primo", regione:"italia", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["pasta al pomodoro e basilico"], allergeni:["glutine"], dieta:"vegetariano"},
  "tortiglioni cacio e pepe": {categoria:"primo", regione:"lazio", iconico:true, top:true, selezione:false, punteggio:5, sinonimi:["cacio e pepe","pasta cacio e pepe"], allergeni:["glutine","latte"], dieta:"vegetariano"},
  "tortiglioni con crema di broccoli e speck": {categoria:"primo", regione:"italia", iconico:false, top:true, selezione:false, punteggio:4, sinonimi:["pasta broccoli e speck","tortiglioni broccoli e speck"], allergeni:["glutine","latte"], dieta:"carne"},
  "vitello tonnato": {categoria:"secondo", regione:"piemonte", iconico:true, top:true, selezione:true, punteggio:5, sinonimi:["vitel tonné"], allergeni:["uova","pesce"], dieta:"carne"},
  "zucchine trifolate": {categoria:"contorno", regione:"italia", iconico:false, top:true, selezione:true, punteggio:4, sinonimi:["zucchine in padella"], allergeni:[], dieta:"vegetariano"}
};








