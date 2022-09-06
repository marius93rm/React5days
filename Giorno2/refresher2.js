// const numeretto = "3"

// if (numeretto === 3){ //comparazione senza tenere conto del tipo
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// if (numeretto > 3){
//     console.log("maggiore")
// }
// else if(numeretto == 3){
//     console.log("uguale")
// }
// else{
//     console.log("minore")
// }

// switch (numeretto){
//     case 1:
//         console.log("contiene 1")
//         break
//     case 2:
//         console.log("contiene 2")
//         break
//     default:
//         console.log("non è nessuno di questi")
// }

// //operatore ternario
// let staPiovendo = true
// staPiovendo ? console.log("sta piovendo") : console.log("non sta piovendo")
// //condizione ? true : false

// //while
// let valore = 3
// while (valore > 0){
//     console.log(count)
//     count--
// }

const vettore = Array(10).fill(10)
//FOR ciclo definito
for(let i=0;i<vettore.length;i++){
    vettore[i]-=i
}

//WHILE ciclo indefinito
// let indice = 100
// while (indice<vettore.length){
//     vettore[indice]-=indice
//     indice++
// }

//DO WHILE almeno un giro lo faccio
// let indice = 0
// do {
//     vettore[indice]-=indice
//     indice++
// } while(indice<vettore.length)
// console.log(vettore)

//FOR OF per gli array
// for (const numero of vettore){
//     console.log(numero/2)
// }

// //FOR EACH sugli array
// vettore.forEach( (number, i, arr) => {
//     console.log(number, i)
// } )

//FOR IN sugli oggetti
// const user = {
//     nome: "Marius",
//     cognome: "Minia"
// }
// console.log(  user["nome"]  )

// for(const key in user){
//     console.log(key, user[key])
// }


//Object
// const person = {}
// const rettangolo = {
//     length: 29,
//     width: 20
// }
// console.log(rettangolo)

// for (const chiave in rettangolo){
//     console.log("la "+chiave+" è: "+rettangolo[chiave]+" ")
// }

const persona = {
    nome: "Marius",
    cognome: "Minia",
    eta: 28,
    skills: [
        "HTML",
        "CSS",
        "Javascript"
    ],
    getNomeCompleto: function () {//concatenazione
        return this.nome+" "+this.cognome
    },
    getNomeECognome: function () { //literal template
        return `il nome completo è ${this.nome} ${this.cognome}`
    }
}

console.log(persona["nome"])
console.log(persona.nome)
console.log(persona.getNomeCompleto())
console.log(persona.getNomeECognome())

persona["residenza"]="Roma"
persona.stato="non sposato"

console.log(persona.residenza)
console.log(persona.stato)

persona.etaAllaPensione = function () {
    return 60-this.eta
}

console.log(persona.etaAllaPensione())

//prendere tutte le chiavi
const keys = Object.keys(persona)
console.log(keys)