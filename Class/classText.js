

export class Text{

constructor(app){
this.app=app;
}

async createText(message,font, color,size){

const styles= new PIXI.TextStyle({

    fontFamily:font,
    fill: color,
    size: size

})


const text = new PIXI.Text(message,styles);

return text
}

}