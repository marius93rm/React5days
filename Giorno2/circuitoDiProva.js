ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


const distribuzione = {}

for (let elem of ages){
    distribuzione[elem] = 1
    console.log(Object.keys(distribuzione))
    
    
}


console.log("Lunghezza-età", ages.length)
console.log("Lunghezza-dist", Object.keys(distribuzione).length)

console.log("distribuzione", distribuzione)

console.log(Object.keys(distribuzione))
console.log(ages[0])
console.log(Object.keys(distribuzione).includes("31"))