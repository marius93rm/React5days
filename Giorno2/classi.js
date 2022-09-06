class ContoCorrente {
    constructor(intestatario){
        this.intestatario = intestatario
        this.saldo = 0
    }

    prelievo(somma){
        this.saldo-=somma
    }
    deposito(somma){
        this.saldo+=somma
    }

    get getSaldo(){
        return this.saldo
    }

    set setIntestatario(nuovoProprietario){
        this.intestatario=nuovoProprietario
    }

    static convertitore(euro){
        return euro * 1.01
    }

}

const marius = new ContoCorrente("Marius") //istanziare un oggetto di classe CC

ContoCorrente.convertitore(10)



console.log(marius.intestatario)
console.log(marius.saldo)
marius.deposito(100)
console.log(marius.saldo)
marius.deposito(100)
marius.deposito(100)
marius.deposito(100)
marius.deposito(100)
marius.deposito(100)
marius.deposito(100)
console.log(marius.saldo)
marius.prelievo(1)
console.log(marius.saldo)

marius.setIntestatario = "Gianni"