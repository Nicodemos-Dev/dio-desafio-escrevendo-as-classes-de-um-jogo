class heroi {

	constructor (nome, idade, tipo, ataque ) {
    
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    
    }
    
    escrever () {
    
    	console.log (`O pequeno ${this.tipo}, com ${this.idade} aninhos de idade, de nome ${this.nome} atacou o monstro brabo, usando como sua arma uma ${this.ataque}!`)
    
    }

}

let heroi2 = new heroi ("guerreiro" , "espada")

heroi2.tipo = "guerreiro"
heroi2.ataque = "espada"
heroi2.nome = "Felipinho das quebradas"
heroi2.idade = "11"


heroi2.escrever ()