class Usuario {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura!`);
    }
}

const user = new Usuario("Isabella", 69, 1.6);
const user1 = new Usuario("Ana", 70, 1.62);

console.log(user.seApresentar());
console.log(user1.seApresentar());

