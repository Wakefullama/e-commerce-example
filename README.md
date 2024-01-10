# E-commerce Simulato

Questo è un semplice sito web di e-commerce simulato con funzionalità di caricamento dinamico dei prodotti, un carrello della spesa, un modulo per i dati della carta di credito e i dati di consegna.

## Funzionalità principali

- Caricamento dinamico dei prodotti generici.
- Aggiunta dei prodotti al carrello.
- Validazione dei dati della carta di credito e dei dati di consegna.
- Messaggio di "acquisto avvenuto" quando tutti i campi sono compilati correttamente.

## Utilizzo

1. Clona o scarica il repository in una directory locale.

2. Apri il file `index.html` nel tuo browser.

3. Visualizza i prodotti generici caricati dinamicamente.

4. Aggiungi i prodotti al carrello cliccando sul pulsante "Aggiungi al Carrello" sotto ciascun prodotto.

5. Compila il modulo per i dati della carta di credito e i dati di consegna.

6. Clicca su "Acquista" per confermare l'acquisto. Verifica che tutti i campi siano stati compilati correttamente. Se i campi sono corretti, riceverai un messaggio di "acquisto avvenuto".

## Spiegazione del Codice JavaScript

Il codice JavaScript nel file `script.js` gestisce molte delle funzionalità principali del sito web. Di seguito, una breve spiegazione delle parti chiave del codice:

- **Caricamento dinamico dei prodotti**: Il codice carica dinamicamente i prodotti generici quando la pagina è pronta. Utilizza una lista di prodotti predefiniti e li aggiunge al DOM.

- **Aggiunta dei prodotti al carrello**: Quando si fa clic su "Aggiungi al Carrello" sotto un prodotto, il codice aggiunge quel prodotto al carrello.

- **Validazione dei dati della carta di credito e dei dati di consegna**: Prima di confermare l'acquisto, il codice verifica che tutti i campi del modulo di pagamento e di consegna siano stati compilati correttamente. Se manca qualche informazione o ci sono errori, viene mostrato un avviso.

- **Messaggio di "acquisto avvenuto"**: Se tutti i campi sono compilati correttamente, il codice visualizza un messaggio di "acquisto avvenuto".

## Tecnologie utilizzate

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap (facoltativo, ma consigliato per una migliore formattazione)

## Personalizzazione

Puoi personalizzare il sito web e lo stile CSS secondo le tue esigenze. Puoi anche aggiungere ulteriori prodotti modificando il file `script.js`.

## Autori

- [Il tuo nome]

## Licenza

Questo progetto è distribuito con la licenza [Nome della licenza]. Vedi il file `LICENSE` per ulteriori informazioni.

**Caricamento Dinamico dei Prodotti**
- La funzione principale nel codice è all'interno di $(document).ready(function() {...});. Questa funzione jQuery viene eseguita quando il documento HTML è completamente caricato nel browser. Qui è dove vengono gestite le principali funzionalità del tuo sito web.

- La funzione inizia definendo una costante products, che contiene un array di oggetti rappresentanti i tuoi prodotti simulati.

- Successivamente, crea dinamicamente le card dei prodotti e le aggiunge all'elemento con l'ID #product-list. Per ogni prodotto nell'array products, viene creato un elemento di card Bootstrap contenente il nome del prodotto, il prezzo e un pulsante "Aggiungi al Carrello".

**Gestione del Carrello**
- Dopo il caricamento dinamico dei prodotti, il codice gestisce l'aggiunta di prodotti al carrello quando l'utente fa clic sul pulsante "Aggiungi al Carrello". Questo è fatto attraverso l'uso di eventi jQuery.

- Quando viene fatto clic su un pulsante "Aggiungi al Carrello", l'ID del prodotto associato viene estratto dall'attributo data-id, e l'oggetto prodotto corrispondente viene trovato nell'array products. Se il prodotto esiste, viene aggiunto al carrello rappresentato da un array cart, e il nome del prodotto e il prezzo vengono visualizzati nel carrello.

**Gestione dell'Acquisto**
- La funzione gestisce anche la logica dell'acquisto quando l'utente invia il modulo dei dati di pagamento e di consegna.

- Quando viene inviato il modulo, vengono raccolti i dati dai campi di input relativi ai dati della carta di credito e ai dati di consegna.

- Viene quindi effettuata una semplice validazione per assicurarsi che tutti i campi siano stati compilati. Se manca qualche informazione, viene visualizzato un messaggio di avviso.

- Se tutti i campi sono compilati correttamente, viene visualizzato un messaggio di "Acquisto avvenuto" nell'elemento con l'ID #purchase-message, simulando così un acquisto completato con successo.

- Queste sono le principali funzioni nel tuo codice JavaScript che alimentano il funzionamento del tuo sito web di e-commerce simulato.