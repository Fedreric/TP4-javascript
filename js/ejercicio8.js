class Persona {
    #nombre;
    #edad;
    #profesion;
    constructor(nombre, edad, profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }
    get nombre () { return this.#nombre; }
    get edad () { return this.#edad; }
    get profesion () { return this.#profesion; }

    set nombre (newNombre) { this.#nombre = newNombre; }
    set edad (newEdad) { this.#edad = newEdad; }
    set profesion (newProfesion) { this.#profesion = newProfesion; }

    saludar(){
        alert(`Hola me llamo ${this.nombre}, tengo ${this.edad} y soy ${this.profesion}`);
    }

    despedirse(){
        alert(`${this.nombre}:
        Adios!!`);
    }
}

let roberto = new Persona('Roberto Carlos Rodriguez', 40, 'Contador');
let patricia = new Persona('Patricia Carla Rodriguez', 37, 'Abogada');

roberto.saludar();
roberto.despedirse();
patricia.saludar();
patricia.despedirse();
