class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(codigo, nombre, precio) {
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get codigo() { return this.#codigo; }
    get nombre() { return this.#nombre; }
    get precio() { return this.#precio; }
    set codigo(newCodigo) { this.#codigo = newCodigo; }
    set nombre(newNombre) { this.#nombre = newNombre; }
    set precio(newPrecio) { this.#precio = newPrecio; }

    imprimirDatos(){
        document.write(`<ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`);
    }
}
let jabon = new Producto(1,'Jabón Dove', 250); 
let yerba = new Producto(2,'Nobelza gaucha 1kg', 800); 
let gaseosa = new Producto(3,'Coca-Cola 2L', 370); 

let productos = [jabon,yerba,gaseosa];

productos.forEach(producto => {
    producto.imprimirDatos();
});
