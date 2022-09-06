const lib = require("./eserc2"); //importo stampaCarina

// Riempire una tabella di 4 righe e 3 colonne con
// interi pseudo-casuali compresi tra 1 e 9 (estremi
// inclusi). Per ciascuna riga della tabella
// visualizzare la somma degli interi presenti sulla
// riga e visualizzare la somma degli interi su
// ciascuna colonna

const rig = 4
const col = 3

const mioArra = Array(rig) //creo le righe

for (let i=0; i < rig; i++){ //scorro tutte le righe
    mioArra[i] = Array(col) //per ogni riga creo le colonne
    for (let j = 0; j < col; j++){ //scorro gli elementi della riga i
        mioArra[i][j]= Math.floor(Math.random() * (9 - 1)) + 1 //creo un valore random e lo assegno all'elemento di indici i,j
    }
    console.log(mioArra[i].join(" "))
}

//la scorro con l'obiettivo di:
//calcolare la somma di OGNI riga
//calcolare la somma di OGNI colonna

//stampare tutto con la somma vicino al relativa riga/colonna


//lib.stampaCarina(risultato)