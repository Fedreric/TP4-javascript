function cantPaginas(libro1,libro2){
    if(libro1.numPaginas > libro2.numPaginas){
        document.write(`<p>${libro1.titulo} tiene mas paginas (${libro1.numPaginas})</p>`);
    }else{
        document.write(`<p>${libro2.titulo} tiene mas paginas (${libro2.numPaginas})</p>`);
    }
}
class Libro{
    #isbn;
    #titulo;
    #autor;
    #numPaginas;
    constructor(isbn,titulo,autor,numPaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numPaginas = numPaginas;
    }
    get isbn(){ return this.#isbn; }
    get titulo(){ return this.#titulo; }
    get autor(){ return this.#autor; }     
    get numPaginas(){ return this.#numPaginas; }

    set isbn(newIsbn){ this.#isbn = newIsbn; }
    set titulo(newTitulo){ this.#titulo = newTitulo; }
    set autor(newAutor){ this.#autor = newAutor; }
    set numPaginas(newNumPaginas){ this.#numPaginas = newNumPaginas; }

    mostrarLibro(){
        document.write(`<p>El libro: ${this.titulo} con ISBN ${this.isbn}, creado por el autor/a ${this.autor} tiene ${this.numPaginas} paginas.</p>`);
    }
}

const elSrDeLosAnillos = new Libro(	8445000667,'El señor de los anillos','John Ronald Reuel Tolkien',576);
const harryPotterYLaPiedraFilosofal = new Libro(8478884459,'Harry Potter y la piedra filosofal','Joanne Rowling​',309);

document.write('<h1>Libros</h1>');
elSrDeLosAnillos.mostrarLibro();
harryPotterYLaPiedraFilosofal.mostrarLibro();
cantPaginas(elSrDeLosAnillos, harryPotterYLaPiedraFilosofal);