class Aeropuerto {
    #nombre;
    #listaAviones;
    constructor(nombre,listaAviones = []){
        this.#nombre = nombre;
        this.#listaAviones = listaAviones;
    }
    get nombre(){ return this.#nombre; }
    get listaAviones(){ return this.#listaAviones; }

    set nombre(newNombre) { this.#nombre =newNombre; }
    set listaAviones(newAvion) { this.#listaAviones.push(newAvion); }

    agregarAvion(avion){
        this.listaAviones = avion;
    }

    buscarAvion(avionBuscado){
        let avionB = [this.listaAviones.find(avion => avion.nombre.includes(avionBuscado))];
        if(avionB[0] === undefined){
         alert(`No se encontro el avion: ${avionBuscado}`);
        }else{
            alert(`${avionB[0].nombre}
            Capacidad: ${avionB[0].capacidad}
            Destino: ${avionB[0].destino}
            Pasajeros: ${avionB[0].listaPasajeros}`);
        }
    }
    listarAviones(){
        console.table(this.listaAviones);
    }
}
class Avion {
    #nombre;
    #capacidad;
    #destino;
    #listaPasajeros;
    constructor(nombre,capacidad,destino,listaPasajeros = []){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros = listaPasajeros;
    }

    get nombre() { return this.#nombre; }
    get capacidad() { return this.#capacidad; }
    get destino() { return this.#destino; }
    get listaPasajeros() { return this.#listaPasajeros; }
    
    set nombre(newNombre) {  this.#nombre = newNombre; }
    set capacidad(newCapacidad) {  this.#capacidad = newCapacidad; }
    set destino(newDestino) {  this.#destino = newDestino; }
    set listaPasajeros(newPasajero) {  this.#listaPasajeros.push(newPasajero); }

    abordar(){
        let pasajero = prompt(`Ingrese su nombre: `);

        if(this.capacidad >= 1){
            alert('Bienvenidos a bordo!');
            this.listaPasajeros = pasajero;
            this.capacidad --;
        }else{
            alert(`Disculpe las molestias, asientos dispobibles: ${this.capacidad}`);
        }
    }
}

function buscarAvion(){
    let avion = prompt(`Ingrese el nombre del avion`);
    aeropuertoInternacional.buscarAvion(avion);
}

let avion1 = new Avion('Avion 1',20,'Buenos Aires');
let avion2 = new Avion('Avion 2',10,'Catamarca');
let avion3 = new Avion('Avion 3',30,'Bariloche');

let aeropuertoInternacional = new Aeropuerto('Aeropuerto Internacional');

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

document.write(`<div class='contenedor'>
  <button onclick="aeropuertoInternacional.listarAviones()">Listar aviones</button>
  <button onclick="buscarAvion();">Buscar avion</button>
  <button onclick="avion1.abordar();">Abordar avion 1</button>
  <button onclick="avion2.abordar()">Abordar avion 2</button>
  <button onclick="avion3.abordar()">Abordar avion 3</button>
  </div>`);