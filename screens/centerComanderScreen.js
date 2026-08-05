import * as Helpers from '../globalFunctions.js';
import { Sprites } from '../Class/classSprites.js';
import {Animation} from '../Class/classAnimation.js';

export async function centerComanderScreen(){

    const container = document.getElementById('div-game');
    const app = Helpers.createApp(container);
    const appContainer = new Sprites(app);
    container.appendChild(app.view);
    const containerWidth = appContainer.app.screen.width;
    const containerHeight = appContainer.app.screen.height;
    const AS = new Animation(app);

    console.log('Base Animation Initialized');


    const imgBackground= await appContainer.createSprite(
    './Img/choiceRanger.png',
    345,
    25,
    300,
    270,
    0,
    0,
    1,
    'center'  
)

/// Se calcula el scale
    let nosew = containerWidth / imgBackground.texture.width;
    let noseh = containerHeight / imgBackground.texture.height;
    let sc=Math.min(nosew, noseh);// Escala mínima para que quepa dentro del contenedor
    imgBackground.scale.set(sc); // Aplica misma escala a X e Y (uniforme)

////Mascara de prueba en billy
const mask = new PIXI.Graphics();
mask.beginFill(0xF54927,0);  // Color no importa, es para máscara
mask.drawRect(imgBackground.texture.width * 0.358, imgBackground.texture.height * 0.572, imgBackground.texture.width * 0.135,  imgBackground.texture.height * 0.408);  // Área local no escalada
mask.endFill();
imgBackground.addChild(mask);

 const rangerSelectd = await appContainer.createSprite(
 './Img/rangersColor.png',
 167,
 20,
 68,
 180,
 imgBackground.texture.width * 0.358,
 imgBackground.texture.height * 0.572,
 sc/1.8,
 'jason'
 ); 

    imgBackground.addChild(rangerSelectd);
    appContainer.centerSprite(imgBackground,2,2)
    appContainer.app.stage.addChild(imgBackground);
    //AS.animationSprite(appContainer,1.5,imgBackground,1);

}