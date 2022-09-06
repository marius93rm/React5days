const lib = require("./eserc2"); //importo stampaCarina

// Riempire una tabella di 4 righe e 3 colonne con
// interi pseudo-casuali compresi tra 1 e 9 (estremi
// inclusi). Per ciascuna riga della tabella
// visualizzare la somma degli interi presenti sulla
// riga e visualizzare la somma degli interi su
// ciascuna colonna


//Creo una tabella di 4 righe e 3 colonne

//Riempio con interi presudo-casuali
let random = Math.floor(Math.random() * (9 - 1)) + 1
console.log(random)

//stampo
lib.stampaCarina(random)

//la scorro con l'obiettivo di:
//calcolare la somma di OGNI riga
//calcolare la somma di OGNI colonna

//stampare tutto con la somma vicino al relativa riga/colonna