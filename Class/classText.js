

export class Text{

constructor(app){
this.app=app;
}

async createText(message,font, color,size){

const styles= new PIXI.TextStyle({

    fontFamily:font,
    fill: color,
<<<<<<< HEAD
    size: size
=======
    fontSize: size
>>>>>>> 9dce883 (Creacion del centro de mando y animaciones)

})


const text = new PIXI.Text(message,styles);

return text
}

}