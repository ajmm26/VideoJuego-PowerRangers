import { Sprites } from './Class/classSprites.js';
import { Controles } from './Class/classControlls.js';
import { playMusic, pauseMusic } from './js/musicTheme.js';
import * as Helpers from './globalFunctions.js';
import { menuScreen } from './screens/menuScreen.js';


window.onload = async () => {
    initGame();
}


export async function initGame() {
    try {
        pauseMusic();
        const container = document.getElementById('div-game');
        const app= Helpers.createApp(container);
        container.appendChild(app.view);
        const appContainer = new Sprites(app);
        const containerWidth = appContainer.app.screen.width 
        const containerHeight = appContainer.app.screen.height;
        const controls = new Controles();

    
        const backGroundimageStart = await appContainer.createSprite(
            '/CursoPHP/Img/starPhoto.png',
            10,
            10,
            240,
            200,
            0, // posX
            0, // posY
            1, // scale
            'backgroundStart' // name
        );

        let nosew = containerWidth/ backGroundimageStart.texture.width;
        let noseh = containerHeight/ backGroundimageStart.texture.height;
        const sc = Math.min(nosew, noseh); // mantener proporción sin recorte
        backGroundimageStart.scale.set(sc);
        appContainer.centerSprite(backGroundimageStart, 2, 2);

        // Crear un sprite de botón
        const initButton = await appContainer.createSprite(
            '/CursoPHP/Img/basicButtons.png',
            300, // rectX
            100, // rectY 
            400, // width   
            200, // height
            0, // posX
            0, // posY
            0.3, // scale
            'myButton' // name
        )

             appContainer.centerSprite(initButton, 2, 2);
             Helpers.changeBrightnessDinamic(initButton, 1, 0.5);
             appContainer.makeButton(initButton ,'pointerdown', async ()=>{
              controls.init()
             playMusic('mainTheme.mp3', 0.3);
            container.removeChild(app.view)
           await menuScreen();
    })
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

