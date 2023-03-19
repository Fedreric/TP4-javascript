class Rectangulo{
    constructor(alto = 10, ancho = 30){
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(){
      let nuevoAlto = parseInt(prompt(`Ingresa el alto del rectangulo`));  
      if(!isNaN(nuevoAlto)){
        this.alto = nuevoAlto;
      }else{
        alert('Ingresa un numero entero, Ej: 10');
      }
    }
  
    modificarAncho(){
        let nuevoAncho = parseInt(prompt(`Ingresa el ancho del rectangulo`));  
        if(!isNaN(nuevoAncho)){
          this.ancho = nuevoAncho;
        }else{
          alert('Ingresa un numero entero, Ej: 10');
        }
      }
  
    mostrarPropiedades() {
      alert(`Alto: ${this.alto} Ancho: ${this.ancho}`);
    }
  
    calcularPerimetro() {
      let perimetro = 2 * (this.alto + this.ancho);
      return alert(`Perimetro: ${perimetro}`);
    }
  
    calcularArea() {
      let area = this.alto * this.ancho; 
      return alert(`Area: ${area}`);;
    }
  }
  
  let rectangulo = new Rectangulo();

  document.write(`<div class='contenedor'>
  <h1>Rectangulo</h1>
  <button onclick="rectangulo.mostrarPropiedades()">Ver alto y ancho</button>
  <button onclick="rectangulo.modificarAlto()">Modificar alto</button>
  <button onclick="rectangulo.modificarAncho()">Modificar Ancho</button>
  <button onclick="rectangulo.calcularArea()">Area</button>
  <button onclick="rectangulo.calcularPerimetro()">Perimetro</button>
  </div>`);

