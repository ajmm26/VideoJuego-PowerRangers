 import * as Helpers from './globalFunctions';

 
 
 export  class Sprites{

constructor(app){

    this.app = app;
    
}


async createSprite(url, rectX, rectY, width, height, posX, posY, scale = 1, name = '') {
    const texture = await PIXI.Assets.load(url);
    // CORRECCIÓN 1: Usar los parámetros para el recorte
    const spriteTexture = new PIXI.Texture(
      texture.baseTexture,
      new PIXI.Rectangle(rectX, rectY, width, height) // Parámetros dinámicos
    );

   
    const sprite = new PIXI.Sprite(spriteTexture);
    sprite.x = posX;
    sprite.y = posY;
    sprite.scale.set(scale);
    
    // CORRECCIÓN 2: Asignar nombre al sprite
      //sprite.tint = 0xFF0000; // Poner el sprite en rojo
    ///sprite.anchor.set(0.5); // Centrar el ancla del sprite  

    sprite.name = name;


      this.app.stage.addChild(sprite);
    return sprite;
  }


makeButton(sprite,e,onClickCallback) {
        // 6)ss Convertir cualquier sprite en botón
        console.log(e)
        sprite.interactive = true;
        sprite.buttonMode  = true;
        sprite.on(e, onClickCallback);
      }



centerSprite(sprite, numX=2, numY=2, nmX=1,nmY=1) {

sprite.x = ((this.app.screen.width - sprite.width) / numX)* nmX;
sprite.y = ((this.app.screen.height - sprite.height) / numY)* nmY;

}

 }
