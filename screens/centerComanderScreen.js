import * as Helpers from '../globalFunctions';
import { Sprites } from '../Class/classSprites';
import {Animation} from '../Class/classAnimation';

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
    '/CursoPHP/Img/choiceRanger.png',
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
    let sc=null;
    if(containerWidth <= 600){
   sc= Math.max(nosew,noseh);
    }else{
      
     sc = Math.min(nosew, noseh); // Escala mínima para que quepa dentro del contenedor
    }
    imgBackground.scale.set(1.4); // Aplica misma escala a X e Y (uniforme)
    appContainer.centerSprite(imgBackground,2,2)
    appContainer.app.stage.addChild(imgBackground);
    AS.animationSprite(appContainer,1.5,imgBackground,1);

}