console.log()

// // //var miaVariabile = "ciao" //non usare
// // /*
// // let miaVariabile2 = "ciao"
// // const miaCostante = "test"
// // */

// // const PI = 3.14

// // /*PRIMITIVI
// // -numbers
// // -strings
// // -booleans
// // -null
// // -undefined
// // -symbol

// // NON-PRIMITIVI
// // - Objects
// // - Arrays
// // */

// // const arr = Array()
// // let arr2 = Array()
// // const arr3 = ["ciao","ciao",3]
// // let lunghezza = arr3.length

// // console.log(arr)

// // //creo 8 elementi vuoti
// // const arr8 = Array(8)
// // //creo 8 elementi pieni
// // const arr9 = Array(8).fill("XD")
// // console.log(arr9)

// // arr9[3]="ciaone"
// // console.log(arr9)
// // console.log(arr9[3])
// // console.log(arr9[4])

// //concatena 2 array
// const arra1 = [1,2,3]
// const arra2 = [4,5,6]

// const lunghezzaRisultato = arra1.length + arra2.length
// const risultato = Array(lunghezzaRisultato)
// let posizione=0

// for (let i = 0; i < arra1.length; i++) {
//     risultato[posizione] = arra1[i]
//     posizione+=1
// }
// for (let i = 0; i < arra2.length; i++) {
//     risultato[posizione] = arra2[i]
//     posizione+=1
// }

// console.log(risultato)



// let risultato2 = arra1.concat(arra2)
// console.log(risultato2)

// console.log( arra1[2] )


// console.log( risultato2.indexOf(5))

//risultato2
//devo trovare il 5

// for (let i=0; i<risultato2.length; i++){
//     if (risultato2[i]==5){
//         console.log(i)
//     }
// }


// console.log( risultato2.lastIndexOf(5))


// let var1 = 5
// let var2 = "5"

// if (var1===var2){
//     console.log("uguali")
// }
// else{
//     console.log("diversi")
// // }

// const numbers = [333,67,8,2,79,6]
// const numbersBis = [333,67,8,2,79,6]
// // console.log(numbers.includes(5))
// // console.log(numbers.includes(6))

// // // console.log( Array.isArray(numbers) )
// // console.log( numbers.toString() )
// // console.log( numbers)

// // let risultato = numbers.join("---")
// // console.log(risultato)

// // console.log( numbers.slice())
// // console.log( numbers.slice(0))
// // console.log( numbers.slice(0, numbers.length))

// // console.log( numbers.slice(1,3))

// // numbers.push(6)
// // numbers.push(7)
// // let rimosso=numbers.pop()

// // console.log(numbers)
// // console.log(rimosso)

// // numbers.shift()
// // console.log(numbers)

// // numbers.unshift(1)

// // numbers.reverse()
// // console.log(numbers)

// const skills = ["Javascript","HTML","CSS"]
// skills.sort()
// numbers.sort()
// numbersBis.sort( (a, b) => a - b )

// console.log(skills)
// console.log(numbers)
// console.log(numbersBis)

// const matrice = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matrice[1][1])

// const matriceStrana = Array(9).fill( Array(9).fill(0) )

// matriceStrana[0][0]=5

// console.log(matriceStrana)

//matriceAuto

const matriceAuto = Array(9)
for(let i=0;i<9;i++){
    matriceAuto[i] = Array(9)
}
console.log(matriceAuto)
let numeretto=0
for(let i=0;i<matriceAuto.length;i++){
    for (let j=0; j<matriceAuto[i].length;j++){
        matriceAuto[i][j] = numeretto
        numeretto += 1
    }
}

console.log(matriceAuto)