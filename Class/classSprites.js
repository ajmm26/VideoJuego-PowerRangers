 import * as Helpers from '../globalFunctions.js';
<<<<<<< HEAD

=======
>>>>>>> 9dce883 (Creacion del centro de mando y animaciones)
 
 
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
    sprite.name = name;

    return sprite;
  }


makeButton(sprite,e,onClickCallback) {
        // 6)ss Convertir cualquier sprite en botón
        sprite.interactive = true;
        sprite.buttonMode  = true;
        sprite.on(e, onClickCallback);
      }



centerSprite(sprite, numX=2, numY=2, nmX=1,nmY=1) {
  const bounds = sprite.getBounds(); // incluye escala
  sprite.x = ((this.app.screen.width - bounds.width) / numX) * nmX;
  sprite.y = ((this.app.screen.height - bounds.height) / numY) * nmY;

}

 }
