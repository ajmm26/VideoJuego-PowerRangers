import { Sprites } from '../Class/classSprites.js';
import { initGame } from '../gameLogic.js';
import { settingsScreen } from './settingsScreen.js';
import * as Helpers from '../globalFunctions.js';
import * as RulesScreen from '../functionsScreens/functionsFirstScreen.js'
import { inputScreen } from './inputScreen.js';


export async function menuScreen(){
const container = document.getElementById('div-game');
const app = Helpers.createApp(container);
const appContainer= new Sprites(app);
container.appendChild(app.view);
const containerWidth = appContainer.app.screen.width 
 const containerHeight = appContainer.app.screen.height;

const iconMenu= await appContainer.createSprite(
    '/CursoPHP/Img/starPhoto.png',
            10,
            10,
            240,
            200,
            0, // posX
            0, // posY
            1, // scale
            'backgroundStart' // name 
)


let nosew = containerWidth/ iconMenu.texture.width;
let noseh = containerHeight/ iconMenu.texture.height;
const sc = Math.min(nosew, noseh); // mantener proporción sin recorte
iconMenu.scale.set(sc);
RulesScreen.oneScaleOptionsBackgroundInit(containerWidth,sc, iconMenu);
RulesScreen.positionBackgroundInit(appContainer, iconMenu);


$(document).ready(()=>{
  Helpers.changeBrightness(iconMenu, 2)
})

appContainer.app.stage.addChild(iconMenu);


      let scaleButton=RulesScreen.scaleButtonsMenu(containerWidth);
         const buttonPlay = await appContainer.createSprite(
        '/CursoPHP/Img/buttons-options.png',
        15,
        190,
        250,
        150,
        0,
        0,
        scaleButton,
        'buttonPlay')

         RulesScreen.posicionHorizontalMenuBotones(containerWidth,iconMenu,buttonPlay);
         if(containerWidth >= 600){
         buttonPlay.y= iconMenu.y;
         }else{
         RulesScreen.posicionVerticalMenuButtons(containerWidth,iconMenu,buttonPlay)
         }
         Helpers.changeBrightnessDinamic(buttonPlay,1,0.5);
         appContainer.makeButton(buttonPlay,'pointerdown',async ()=>{
          container.removeChild(app.view);
          await inputScreen()
         })
        appContainer.app.stage.addChild(buttonPlay);

        const buttonSettings = await appContainer.createSprite(
          '/CursoPHP/Img/buttons-options.png',
        15,
        20,
        320,
        150,
        10,
        10,
        scaleButton,
        'buttonSettings')

         RulesScreen.posicionHorizontalMenuBotones(containerWidth,iconMenu,buttonSettings);
         RulesScreen.posicionVerticalMenuButtons(containerWidth,buttonPlay,buttonSettings);
         buttonSettings.y= buttonSettings.y - 10;
         appContainer.makeButton(buttonSettings,'pointerdown',async ()=>{
          container.removeChild(app.view)
          await settingsScreen();
         })
         Helpers.changeBrightnessDinamic(buttonSettings,1,0.5);
appContainer.app.stage.addChild(buttonSettings);

         const buttonExit = await appContainer.createSprite(
        '/CursoPHP/Img/buttons-options.png',
        250,
        350,
        250,
        150,
        10,
        10,
        scaleButton,
        'buttonExit'
     )

    RulesScreen.posicionHorizontalMenuBotones(containerWidth,iconMenu,buttonExit);
     RulesScreen.posicionVerticalMenuButtons(containerWidth,buttonSettings,buttonExit);
     appContainer.makeButton(buttonExit,'pointerdown',async ()=>{
      container.removeChild(app.view);
      await initGame();

     });
     Helpers.changeBrightnessDinamic(buttonExit,1,0.5);

      appContainer.app.stage.addChild(buttonExit);
}