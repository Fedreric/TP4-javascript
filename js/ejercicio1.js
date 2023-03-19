let auto = {
    color: 'Rojo',
    marca:'Fiat',
    modelo: 'Uno',
    encender: function(){
        document.write(`<p>${this.marca} ${this.modelo}: Encendido</p>`);
    },
    apagar: function(){
        document.write(`<p>${this.marca} ${this.modelo}: Apagado</p>`);
    }
}

auto.encender();
auto.apagar();