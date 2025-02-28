aldoaquino451/vue-todolist

Elenco delle cose da fare di Vue
Esercizio
Rifare l'esercizio della to do list fatto in classe. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà fatta è uguale a vera, visualizzare il testo del tutto sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni articolo ha una “x”: cliccando su di essa, il tutto viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo tutto, che quindi viene aggiunto alla lista dei tutto esistente. Oltre al clic sul pulsante, intercettare anche il tasto INVIO per aggiungere il tutto alla lista

Bonus:

se il todo ha meno di 5 caratteri espone un messaggio di errore
cliccando sul testo dell'articolo, invertire il valore della proprietà fatto del todo corrispondente (se fatto era uguale a false, impostare true e viceversa)
eliminare il tutto solo se è stato svolto, altrimenti esporre un messaggio di errore
Buon lavoro e buon fine settimana!

Codice HTML
crea la stuttura in html con: un logo e un wrapper #app
nel wrapper inseriamo: un tag input text con un bottone a fianco; un paragrafo che descrive il tipo di errore; un contenitore dove è inserito l'elenco di attività del todo
la lista sarà formattata da un paragrafo/span che verrà sbarrato se la task è completa e un button per la rimozione della task
ogni task avrà un effetto hover e un border come separatore
JAVA SCRIPT
salvo un array di oggetti già compilati
nell'html è inserito un ciclo per ciclare gli elementi dell'array
al click del paragrafo isdone verrà modificato e una classe fatta verrà attivata/disattivata (il testo sbarratp)
al clic del pulsante rimuovi task verrà rimosso l'oggetto dell'array in base alla posizione che occupa (che possiamo verificare con indice del ciclo v-for)
DOPO

salvo un array di oggetti costituiti da un testo con stringa vuota (da riempire) e dalla variabile isdone (che è false di default)
nell'html nell'input inserisco v-model con il nome della variabile newtask, che salverò in js
con una funzione pusho nell'array tutti gli elementi che stampo nell'input
INCLUSIONE

se il todo ha meno di 5 caratteri espone un messaggio di errore
eliminare il tutto solo se è stato svolto, altrimenti esporre un messaggio di errore