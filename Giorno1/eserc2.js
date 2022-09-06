//Stampare una matrice quadrata con un carattere lungo le diagonali e tutti 0 altrove.
// grandezza e carattere a scelta


//scelgo la grandezza
const grandezza = 7

//scelgo il carattere
const carattere = "F"

//creo l'array di grandezza
const arr = Array(grandezza)
for (let i = 0; i < grandezza; i++) {
    arr[i] = Array(grandezza).fill(0)
}

//stampo
stampaCarina(arr)

for (let i = 0; i < grandezza; i++) {
    for (let j = 0; j < grandezza; j++) {
        if (i == j || i+j==grandezza-1) {
            arr[i][j] = carattere
        }
    }
}
stampaCarina(arr)


function stampaCarina(daStampare) {
    let stampa = ""
    for (let i = 0; i < daStampare.length; i++) {
        for (let j = 0; j < daStampare.length; j++) {
            stampa += daStampare[i][j] + " "
        }
        console.log(stampa)
        stampa = ""
    }
    console.log("=============================== \n")
}