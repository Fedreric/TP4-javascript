let cuenta = {
    titular: 'Fede',
    saldo: 0,

    ingresar: function () {
        let saldoEntrante = +prompt('¿Cuando saldo desea ingresar?');
        if (!isNaN(saldoEntrante)) {
            this.saldo = this.saldo + saldoEntrante;
            alert('Saldo actualizado!');
        } else {
            alert('Ingresa un monto correcto! (En caso de ingresar centavos usar el punto, Ej: 140.50)');
        }
    },
    extraer: function () {
        let extraccion = +prompt('¿Cuando saldo desea extraer?');
        if (!isNaN(extraccion)) {
            if ((this.saldo - extraccion) >= 0) {
                this.saldo = this.saldo - extraccion;
                alert('Saldo actualizado!');
            } else {
                alert(`El monto que se desea extraer es mayor al disponible: ${this.saldo}`);
            }

        } else {
            alert('Ingresa un monto correcto! (En caso de ingresar centavos usar el punto, Ej: 140.50)');
        }
    },
    informe: function () {
        alert(`Cuenta: ${this.titular}
               Saldo actual: ${this.saldo}`);
    }
}

document.write(`<button onclick="cuenta.ingresar()">Ingresar</button>
                <button onclick="cuenta.extraer()">Extraer</button>
                <button onclick="cuenta.informe()">Informe</button>`);


