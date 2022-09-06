const lib = require("./eserc2"); //importo stampaCarina

// Riempire una tabella di 4 righe e 3 colonne con interi pseudo-casuali compresi tra 1 e 9 (estremi inclusi).
// Per ciascuna riga della tabella visualizzare la somma degli interi presenti sulla riga e visualizzare la somma degli interi su ciascuna colonna

const rig = 9
const col = 9

const mioArra = Array(rig) //creo le righe

for (let i=0; i < rig; i++){ //scorro tutte le righe
    mioArra[i] = Array(col) //per ogni riga creo le colonne
    for (let j = 0; j < col; j++){ //scorro gli elementi della riga i
        mioArra[i][j]= Math.floor(Math.random() * (9 - 1)) + 1 //creo un valore random e lo assegno all'elemento di indici i,j
    }
    //console.log(mioArra[i].join(" "))
}
const risultatoRighe = Array(rig).fill(0)
const risultatoColonne = Array(col).fill(0)


//la scorro con l'obiettivo di:
for (let i=0; i<rig; i++){
    for (let j=0; j <col; j++){
        risultatoRighe[i] += mioArra[i][j]
        risultatoColonne[j] += mioArra[i][j]
    }
}

// for (let i = 0; i <mioArra.length; i++){
//     let stampa = ""
//     for (let j = 0; j < mioArra[i].length; j++) {
//         stampa+= mioArra[i][j]+" "
//     }
//     stampa+=risultatoRighe[i]
//     console.log(stampa)
// }

for (let i = 0; i <mioArra.length; i++){
    console.log( mioArra[i].join(" ") + " |" + risultatoRighe[i])
}
console.log("________")
console.log(risultatoColonne.join(" "))


//calcolare la somma di OGNI riga
//calcolare la somma di OGNI colonna

//stampare tutto con la somma vicino al relativa riga/colonna


//lib.stampaCarina(risultato)