class Pizza {
    constructor(massa, molho, cobertura, queijo){
        this.massa = massa;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo;
    }
    pedido(){
        console.log(`Olá, eu quero uma pizza de massa ${this.massa}, com molho ${this.molho}, com cobertura de ${this.cobertura} e quero queijo ${this.queijo}.`);
    }
}

const recheio = new Pizza("fina", "tomate", "calabresa", "mussarela");

recheio.pedido();
