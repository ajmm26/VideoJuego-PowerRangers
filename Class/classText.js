

export class Text{

constructor(app){
this.app=app;
}

async createText(message,font, color,size){

const styles= new PIXI.TextStyle({

    fontFamily:font,
    fill: color,
    font: size

})




const text = new PIXI.Text(message,styles);

return text
}

async createText2(message,font, color,size){

const styles= new PIXI.TextStyle({

    fontFamily:font,
    fill: color,
    fontSize: size

})




const text = new PIXI.Text(message,styles);

return text
}

}