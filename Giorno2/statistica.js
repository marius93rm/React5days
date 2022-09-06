ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistica {
    constructor(analizza){
        this.dati = analizza
    }

    stampa(){
        console.log( this.dati.join(","))
    }

    count() {
        return this.dati.length
    }
    sum(){
        return this.dati.reduce((a, b) => a + b )
    }
    min(){
        return 0
    }
    max(){
        return 0
    }
    range(){
        return 0
    }
    mean(){
        return Math.ceil(this.sum()/this.dati.length)
    }
    median(){
        return 0
    }
    mode(){
        const frequenza = this.freqDist()
        const max = {
            mode:"",
            count:""
        }
        for(let elem in frequenza ){
            if (frequenza[elem]>max["count"]){
                max["mode"]=elem
                max["count"]=frequenza[elem]
            }
        }
        return max
    }
    
    var(){
        let temporaneo = this.dati.map( (elem) => elem-this.mean()) //devianza dalla media
        temporaneo = temporaneo.map( (elem) => elem**2) //quadrato
        temporaneo = temporaneo.reduce((a, b) => a + b ) //sommo tutto
        let risultato = temporaneo/this.dati.length //divido per la popolazione
        return risultato
    }
    std(){
        return (Math.abs(Math.sqrt(this.var()))).toFixed(1)
    }
    freqDist(){
        
        //dichiarativa
        // return this.dati.reduce((acc, item) => {
        //     acc[item] = (acc[item] || 0) + 1
        //     return acc
        //   }, {})
        
        //imperativa
        const distribuzione = {}
        
        for (const elemento of this.dati) {  
            if(Object.keys(distribuzione).includes(elemento.toString())){
                distribuzione[elemento]+=1
            }
            else {
                distribuzione[elemento]=1
            }
        }
        return distribuzione
    }
}


const statistics = new Statistica(ages)
statistics.stampa()

console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
