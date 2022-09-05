// // Declare an empty array;
// const emptyArray = []

// // Declare an array with more than 5 number of elements
// const fiveElements = [5,2,1,5,7,8]

// // Find the length of your array
// const dimensione = fiveElements.length

// // Get the first item, the middle item and the last item of the array
// const first = fiveElements[0]
// let lunghezzaMezzi = fiveElements.length/2
// const middle = fiveElements.slice(lunghezzaMezzi-0.5,lunghezzaMezzi+0.5)

// // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const mixedDataTypes = [5,2,1,5,7,"8"]

// // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// // Print the array using console.log()
// // console.log(itCompanies)

// // Print the number of companies in the array
// // console.log(itCompanies.length)

// // Print the first company, middle and last company
// const prima = itCompanies[0]
// const mezza = (itCompanies.slice(itCompanies.length/2-0.5,itCompanies.length/2+0.5))[0]
// const ultima = itCompanies[itCompanies.length-1]

// // console.log(prima)
// // console.log(mezza)
// // console.log(ultima)

// // Print out each company
// // for (let i=0; i<itCompanies.length;i++){
// //     console.log( itCompanies[i] )
// // }

// // Change each company name to uppercase one by one and print them out
// for (let i=0; i<itCompanies.length;i++){
//     itCompanies[i] = itCompanies[i].toUpperCase()
//     console.log(itCompanies[i])

// }

// // Print the array like as a sentence: 
// //Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const lunghezza = itCompanies.length
// let stampa =(( itCompanies.slice(0, lunghezza-1) ).join(", "))+" and "+ itCompanies[lunghezza-1]+" are big IT companies."
// console.log(stampa)

// Check if a certain company exists in the itCompanies array. 
//If it exist return the company else return a company is not found

// const toSearch="Apple"
// if (itCompanies.includes(toSearch)){
//     console.log(itCompanies[itCompanies.indexOf(toSearch)])
// }
// else{
//     console.log("not found")
// }

// Filter out companies which have more than one 'o' without the filter method
// const risultato = []
// for (let i=0; i<itCompanies.length; i++){
//     let o = 0;
//     for(let j=0; j<itCompanies[i].length;j++){
//         if(itCompanies[i][j]=="o" || itCompanies[i][j]=="O"){
//             o+=1
//         }
//     }
//     console.log(itCompanies[i],o)

//     if(o<2){
//         risultato.push(itCompanies[i])
//     }

//     o=0;
// }
// console.log(risultato)

// // Sort the array using sort() method
// console.log(risultato.sort())

// Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

//The following is an array of 10 students ages: 
// - Sort the array and find the min and max age 
// - Find the median age(one middle item or two middle items divided by two) 
// - Find the average age(all items divided by number of items) 
// - Find the range of the ages(max minus min) 
// - Compare the value of (min - average) and (max - average), use abs() method


// [1,2,3,4,5,6]
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// const lung = ages.length
// ages.sort((a, b) => a - b)
// console.log(ages)
// const min = ages[0]
// const max = ages[lung-1]
// let median;
// if(lung%2==0){ //pari
//     median = (ages[lung/2]+ages[lung/2-1])/2
// }
// else { //dispari
//     median = ages[lung/2-0.5]
// }

// let average = 0
// for (let i=0; i<lung; i++){
//     average+=ages[i]
// }
// average = average/lung

// const range = max-min

// console.log( Math.abs(min - average))
// console.log( max - average)

// console.log(min, max, median, average, range)


const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Trovare le compagnie con le doppie nel nome
const risultato = []

//ciclo le parole
for (let i=0;i<itCompanies.length;i++){
    
    //ciclo le lettere
    for (let j=0;j<itCompanies[i].length-1;j++){ //-1 perchè evito di controllare l'ultimo con il "successivo" che non esiste
        if(itCompanies[i][j]==itCompanies[i][j+1]){
            risultato.push(itCompanies[i])
            break //se l'ho trovata, la doppia, inutile che vada avanti
        }
    }
}
console.log(risultato)

//Stampare una matrice quadrata con un carattere lungo le diagonali e tutti 0 altrove.
// grandezza e carattere a scelta


//scelgo la grandezza
//scelgo il carattere
//creo l'array di grandezza
//per ogni elemento dell'array ci metto dentro un array di grandezza pieno di 0

//scorro tutto l'array
//se mi trovo in una posizione che sta sulla diagonale ci metto uno 0