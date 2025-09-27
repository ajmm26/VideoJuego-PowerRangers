import { Sprites } from '../Class/classSprites.js';
import { playMusic,pauseMusic,stateMusic } from '../js/musicTheme.js';
import * as Helpers from '../globalFunctions.js';
import { menuScreen } from './menuScreen.js';
import { scalePhotoBackground,scaleButtonSettings } from '../functionsScreens/functionsSettings.js';



export async function settingsScreen(){

    const container = document.getElementById('div-game');
    const app = Helpers.createApp(container);
    const appContainer = new Sprites(app);
    const containerWidth = appContainer.app.screen.width 
    const containerHeight = appContainer.app.screen.height;
    container.appendChild(app.view);
    let scaleButtonBack=scaleButtonSettings (containerWidth);
    let scalebackground=scalePhotoBackground(containerWidth)

    const backGroundimageStart = await appContainer.createSprite(
            '/CursoPHP/Img/starPhoto.png',
            10,
            10,
            240,
            200,
            0, // posX
            0, // posY
           scalebackground, // scale
            'backgroundStart' // name
        );
        appContainer.centerSprite(backGroundimageStart, 2, 2);



    const buttonMusic = await appContainer.createSprite(
        '/CursoPHP/Img/miniBotones.png',
        70*3,
        73*6,
        72,
        74,
        0,
        0,
        1,
        'nwiofhw'
    )

    appContainer.centerSprite(buttonMusic,2,2);
    appContainer.makeButton(buttonMusic,'pointerdown',()=>{
         pauseMusic();
        appContainer.app.stage.removeChild(buttonMusic)
        appContainer.app.stage.addChild(buttonMusicpaused);     
      })
     Helpers.changeBrightnessDinamic(buttonMusic,1,0.5);
    

    const buttonMusicpaused = await appContainer.createSprite(
        '/CursoPHP/Img/miniBotones.png',
        0,
        73*7,
        72,
        74,
        0,
        0,
        1,
        'nwiofhw'
    )
        appContainer.centerSprite(buttonMusicpaused,2,2);
        appContainer.makeButton(buttonMusicpaused,'pointerdown',()=>{
        playMusic('mainTheme.mp3', 0.5);
         appContainer.app.stage.removeChild(buttonMusicpaused)
        appContainer.app.stage.addChild(buttonMusic);

        })
             Helpers.changeBrightnessDinamic(buttonMusicpaused,1,0.5);

        if(stateMusic()){
              appContainer.app.stage.removeChild(buttonMusic)
              appContainer.app.stage.addChild(buttonMusicpaused);
        }else{
            appContainer.app.stage.removeChild(buttonMusicpaused)
            appContainer.app.stage.addChild(buttonMusic);
        }
       

        


        const buttonBack = await appContainer.createSprite(
        '/CursoPHP/Img/buttons-options.png',
        520,
        190,
        130,
        140,
        10,
        10,
       scaleButtonBack,
        'buttonPlay')
     
         appContainer.makeButton(buttonBack,'pointerdown',async ()=>{
            container.removeChild(app.view);
            await menuScreen();
         })
        Helpers.changeBrightnessDinamic(buttonBack,1,0.5);


}