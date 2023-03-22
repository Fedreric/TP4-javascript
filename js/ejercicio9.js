class Animal {
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    get nombre () { return this.#nombre; }
    get edad () { return this.#edad; }

    set nombre (newNombre) { this.#nombre = newNombre; }
    set edad (newEdad) { this.#edad = newEdad; }

    emitirSonido(){
        alert(`${this.nombre} emite sonido`);
    }

}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido(){
        let ladrido = new Audio ('../sonido/ladrido.mp3');
        ladrido.play();
        alert(`${this.nombre} guaau!`);
    }
}
class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido(){
        let maullido = new Audio ('../sonido/maullido.mp3');
        maullido.play();
        alert(`${this.nombre} miaauu!`);
    }
}

let gatito = new Gato('Gato con botas', 10);
let perrito = new Perro('Ayudante de santa', 25);

document.write(`<div class='contenedor'>
  <button onclick="perrito.emitirSonido()">Perro</button>
  <button onclick="gatito.emitirSonido()">Gato</button>
  </div>`);
