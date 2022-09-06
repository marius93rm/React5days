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
        return 0
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
        return 0
    }
    median(){
        return 0
    }
    mode(){
        return 0
    }
    var(){
        return 0
    }
    std(){
        return 0
    }
    freqDist(){
        return 0
    }
}


const statistics = new Statistica(ages)
statistics.stampa()


console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
