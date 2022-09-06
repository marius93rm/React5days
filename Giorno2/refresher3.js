// function calcolaSomma(parametro, parametro2 = 100) {
//     return parametro+parametro2
// }

// const arra = []


// let risultato = calcolaSomma(4)
// console.log(risultato)
// function sommaTuttiINumeri() {
//     let risultato=0
//     for(let i=0;i<arguments.length; i++){
//         risultato += arguments[i]
//     }
//     return risultato
// }

// console.log(sommaTuttiINumeri(3,2,56,7,9))

// const sumAllNums = (...args) => {
//     let risultato=0
//     for (const element of args){
//         risultato+=element
//     }
//     return risultato
// }

// //classica funzione
// function quadrato(n){
//     return n*n
// }
// //ARROW FUNCTION
// const square2 = (n) => n*n

// //ANONYMOUS FUNCTION
// const anonymous = function () {
//     console.log("ciao")
// }


//Funzioni di ordine superiore

//callback

// const callback = () => {
//     console.log("Ciao")
// }

// function cube(callback, n){
//     return callback(n)*n
// }
// console.log( cube(callback,3) )

// setInterval(callback, 2000) 

// setInterval(() => console.log("ciao"), 2000);

// setTimeout(() => {
//     console.log("ciao")
// }, 2000);



//forEach
const countries = ['Finland','Estonia','Sweden','Norway', 'Iceland']

// //vecchio stile
// countries.forEach(function (country, index, arr){
//     console.log(index, country.toUpperCase())
// })

//ES6
countries.forEach( (country, i) => console.log(i, country.toUpperCase()))

//map
const newCountries = countries.map( (country) => country.toUpperCase())

//filter
const newCountries2 = countries.filter( (country) => country.includes("land") )

//reduce
const numeretti = [5,6,7,8,9]
const sum = numeretti.reduce( (accumulo, corrente) => accumulo+corrente ) 
// console.log(sum)

//find
const newCountries3 = countries.find( (country) => country.includes("land"))
// console.log(newCountries3)

//findIndex
const newCountries4 = countries.findIndex( (country) => country.length === 6)

//some
console.log( numeretti.some( (x) => x>10) )
console.log( numeretti.some( (x) => x<5) )
console.log( numeretti.some( (x) => x>7) )

//every
console.log( numeretti.every( (x) => x<10) )
console.log( numeretti.every( (x) => x<5) )
console.log( numeretti.every( (x) => x>7) )