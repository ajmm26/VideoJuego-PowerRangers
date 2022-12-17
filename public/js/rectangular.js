




function Rectangulo (x,y,width,height) {
      this.x=x;
      this.y=y; 
      this.width = width;
      this.height = height;
      this.id="r"+x+y;
      this.insertarDOM();
    
  }

Rectangulo.prototype.insertarDOM=function(){
     
    const div = document.createElement('div')
    div.setAttribute("id",`${this.id}`)
    juego.appendChild(div)
    console.log(div)
    const color = '#'+ Math.floor(Math.random()*16777215).toString(16);
    div.style.position="absolute";
    div.style.left=this.x+"px";
    div.style.top=this.y+"px";
    div.style.width=this.width+"px";
    div.style.height=this.height+"px";
    div.style.backgroundColor=color;


}

