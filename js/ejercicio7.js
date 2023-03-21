let agenda;
class Contacto {
    #nombre;
    #telefono;
    constructor(nombre, telefono) {
        this.#nombre = nombre;
        this.#telefono = telefono;
    }
    get nombre() { return this.#nombre; }
    get telefono() { return this.#telefono; }

    set nombre(newNombre) { this.#nombre = newNombre; }
    set telefono(newTelefono) { this.#telefono = newTelefono; }
}
class Agenda extends Contacto {
    #limite;
    #listaContactos;
    constructor(nombre, telefono, limite = 10, listaContactos = []) {
        super(nombre, telefono)
        this.#limite = limite;
        this.#listaContactos = listaContactos;
    }
    get limite() { return this.#limite; }
    get listaContactos() { return this.#listaContactos; }
    set limite(newLimite) { this.#limite = newLimite; }
    set listaContactos(newContacto) { this.#listaContactos.push(newContacto) }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            alert('La agenda esta llena, no se pueden guardar mas contactos!');
        } else {
            alert('Contacto agendado!');
            this.listaContactos = contacto;
        }

    }
    listarContactos() {
        console.table(this.listaContactos);
        this.huecosLibres();
    }
    buscarContacto(contactoBuscado) {
        let contactoB = this.listaContactos.find(contacto => contacto.nombre.includes(contactoBuscado));
        if (contactoB !== undefined) {
            alert(`${contactoBuscado} Si se encuentra en la agenda`);
        } else {
            alert(`${contactoBuscado} No se encuentra en la agenda`);
        }
    }
    existeContacto(contactoBuscado) {
        let bandera = false;
        this.listaContactos.forEach(contacto => {
            if(contacto.nombre === contactoBuscado){
                bandera = true;
            }
        });
        if(bandera === true){
            console.log(`${contactoBuscado}: Si existe el contacto`);
        }else{
            console.log(`${contactoBuscado}: NO existe el contacto`);
        }
        
    }
    eliminarContacto(contacto) {
        let indice = contacto;
        if(this.listaContactos >= indice && indice >= 0){  
        alert(`${this.listaContactos[indice].nombre} fue eliminado de la agenda`);
        this.listaContactos.splice(indice, 1);
        }else{
            alert(`No se encontro el indice ${indice} en la agenda, revisa bien la primera columna de la la`);
        }   
    }
    agendaLlena() {
        return this.limite - this.listaContactos.length === 0;
    }
    huecosLibres() {
        return console.log(`Huecos disponibles: ${this.limite - this.listaContactos.length}`);
    }
}
function crearAgenda(){
 let nombreAgenda = prompt('Ingresa el nombre de la agenda');
 let limiteAgenda = parseInt(prompt('Ingresa el limite de contactos que podra almacenar la agenda (solo numeros enteros)'));
 
 nombreAgenda = new Agenda('',0,limiteAgenda);
 agenda = nombreAgenda;
}
function agregar(agenda){
    let nombre = prompt('Ingresa el nombre del contacto');
    let numero = parseInt(prompt('Ingresa el numero de telefono'));
    let contacto = new Contacto(nombre, numero);
    agenda.aniadirContacto(contacto);
}
function eliminar (agenda){
    let indice = prompt('Ingresa indice mostrado en la primera columna de la tabla del contacto que desee ELIMINAR');
    agenda.eliminarContacto(indice);
}
function existe(agenda){
    let contacto = prompt('Ingresa el nombre del contacto');
    agenda.existeContacto(contacto);
}

document.write(`<div class='contenedor'>
  <h1>Agenda</h1>
  <button onclick="crearAgenda()">Crear agenda</button>
  <button onclick="agregar(agenda);">Agregar contacto</button>
  <button onclick="agenda.listarContactos();">Ver lista de contactos</button>
  <button onclick="eliminar(agenda)">Eliminar contacto</button>
  <button onclick="existe(agenda)">¿Existe el contacto?</button>
  </div>`);
