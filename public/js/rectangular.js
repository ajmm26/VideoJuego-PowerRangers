

const body = document.querySelector('body')
console.log(body)


class Rectangulo {
    constructor(x,y,alto, ancho) {
      this.x=x;
      this.y=y; 
      this.alto = alto;
      this.ancho = ancho;
      this.id= "r"+x+y;
    }
  }

Rectangulo.prototype.insertarDOM=()=>{
    const div = document.createElement('div')
    div.textContent="soy el div"
    body.appendChild(div)
    
}