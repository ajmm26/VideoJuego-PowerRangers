//ANIMACION DE TRANSPORTE BASE
import * as Helpers from '../../globalFunctions.js'
import { Sprites } from '../../Class/classSprites.js';
import { Animation } from '../../Class/classAnimation.js'; 
import { centerComanderScreen } from '../../screens/centerComanderScreen.js';

export async function transporBase() {

    const container = document.getElementById('div-game');
    const app = Helpers.createApp(container);
    const appContainer = new Sprites(app);
    container.appendChild(app.view);
    const containerWidth = appContainer.app.screen.width;
    const containerHeight = appContainer.app.screen.height;
    const AS = new Animation(app);

    console.log('Transporte Base Animation Initialized');
    
    try{
     
   
    /// imagen de fondo
    const imgBackground= await appContainer.createSprite(
    './Img/sheetComandCenter.png',
    25,
    340,
    400,
    200,
    0,
    0,
    1,
    'center'
    )
    console.log('Sprite created:', imgBackground);
    appContainer.app.stage.addChild(imgBackground);
    let scale = Helpers.getScale(containerWidth, containerHeight, imgBackground);
    imgBackground.scale.set(scale); // Aplica misma escala a X e Y (uniforme)
    appContainer.centerSprite(imgBackground,2,2);

    ////Inicio de animacion de transporte base
    AS.animationSprite(appContainer,1,imgBackground,1);

    // Movimiento de la nave    
    const listImgs = getListImgs();

    console.log('List of image movements:', listImgs[0].posX.length);

    let elapsed = 0;
    let index = 0;
   let inicialX = 0;
   let inicialY = 0;

const prueba = async (delta) => {
    elapsed += appContainer.app.ticker.deltaTime; // segundos reales

    if (elapsed >= 100 && index < listImgs[0].posX.length) {
        
               inicialX += listImgs[0].posX[index];
               inicialY += listImgs[0].posy[index];

       imgBackground.texture.frame = new PIXI.Rectangle(
        inicialX,
        inicialY,
        400,
        200,  
      )
          let sc = Helpers.getScale(containerWidth, containerHeight, imgBackground);
           imgBackground.scale.set(sc); // Aplica misma escala a X e Y (uniforme)
          appContainer.centerSprite(imgBackground,2,2);
        elapsed = 0; // reset timer
        index++;
    }else{
        if(index >= listImgs[0].posX.length){
            elapsed = 0; // forzar fin
             appContainer.app.ticker.remove(prueba);
            console.log('Animación de transporte base completada.');
            container.removeChild(app.view);
            await centerComanderScreen();
            }   
         }

};

appContainer.app.ticker.add(prueba);

    }catch (error) {
        console.error('Error initializing transportation base animation:', error);
    }

}

function getListImgs() {

    const listImgs = [
        {
      posX :[25,393.5, -393.5, 393.5],
      posy: [340,0,210,0]
        }
    ];

    return listImgs;

}