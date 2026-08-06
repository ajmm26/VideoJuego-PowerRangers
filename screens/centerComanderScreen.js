import * as Helpers from '../globalFunctions.js';
import { Sprites } from '../Class/classSprites.js';
import {Animation} from '../Class/classAnimation.js';
import { Text } from '../Class/classText.js';

export async function centerComanderScreen(){

    const container = document.getElementById('div-game');
    const app = Helpers.createApp(container);
    const appContainer = new Sprites(app);
    container.appendChild(app.view);
    const containerWidth = appContainer.app.screen.width;
    const containerHeight = appContainer.app.screen.height;
    const AS = new Animation(app);
    const text = new Text(app);
    const SpritesPositions = [
        {id: 0, Nombre:"Billy",  rectX: 22, rectY: 28, W: 68, H: 170, PosX: 0.054, PosY: 0.59},
        {id:1, Nombre:"Kimberly", rectX: 88, rectY: 45, W: 62, H: 155, PosX:0.192, PosY:0.625 },
        {id:2,Nombre:"Jason", rectX: 165, rectY: 20, W: 70, H: 180, PosX: 0.355, PosY: 0.565 },
        {id:3,Nombre:"Tommy", rectX: 230, rectY: 25, W: 75, H: 170, PosX: 0.492, PosY: 0.575},
        {id:4,Nombre:"Aisha", rectX: 310, rectY: 49, W: 60, H: 145, PosX: 0.659, PosY: 0.635},
        {id:5,Nombre:"Adam", rectX: 383, rectY: 20, W: 67, H: 180, PosX: 0.813, PosY: 0.565}
    ];
    const MaskPositions = [
        {id: 0, Nombre:"Billy", PosX: 0.054, PosY: 0.59, W: 0.13, H: 0.39},
        {id:1, Nombre:"Kimberly", PosX: 0.212, PosY: 0.625, W: 0.12, H: 0.35},
        {id:2,Nombre:"Jason", PosX: 0.358, PosY: 0.572, W: 0.135, H: 0.408},
        {id:3,Nombre:"Tommy", PosX: 0.503, PosY: 0.577, W: 0.149, H: 0.397},
        {id:4,Nombre:"Aisha", PosX: 0.67, PosY: 0.62, W: 0.12, H: 0.36},
        {id:5,Nombre:"Adam", PosX: 0.817, PosY: 0.571, W: 0.132, H: 0.405}
    ]; 

    const sl = [];





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

///titulo de elegir ranger
const fontTituLo = (sc * 10)
const txtTitulo = await text.createText('Elige Tu Ranger', 'Jersey 10', '#ffffff', (sc * 10) +'px');
txtTitulo.x = imgBackground.texture.height * 0.3
txtTitulo.y = imgBackground.texture.width * 0.4
imgBackground.addChild(txtTitulo)


////Mascaras
createMaskRanger(MaskPositions,imgBackground,appContainer,SpritesPositions,sc,sl,containerWidth,txtTitulo);


    //imgBackground.addChild(rangerSelectd);
    appContainer.centerSprite(imgBackground,2,2)
    appContainer.app.stage.addChild(imgBackground);
    //AS.animationSprite(appContainer,1.5,imgBackground,1);

}


function createMaskRanger(MaskPositions,imgBackground,appContainer,SpritesPositions,sc,sl,containerWidth,txtTitulo){

for( const mask of MaskPositions ){

let newMask = new PIXI.Graphics();
newMask.beginFill(0xfdfdfd,0.001);
newMask.drawRect(imgBackground.texture.width * mask.PosX , imgBackground.texture.height * mask.PosY, imgBackground.texture.width * mask.W,  imgBackground.texture.height * mask.H);  // Área local no escalada
newMask.endFill();
newMask.name = mask.id
appContainer.makeButton(newMask,'pointerenter', async ()=>{
    newMask.alpha = 0.2
await ShowSprite(mask.id,imgBackground,SpritesPositions[mask.id],sc,sl,containerWidth,appContainer,txtTitulo);
})

appContainer.makeButton(newMask,'pointerleave', async ()=>{
    newMask.alpha = 0
deleteSpriteRanger(sl,imgBackground);
})

appContainer.makeButton(newMask,'pointerdown', ()=>{
imgBackground.removeChild(txtTitulo);
console.log("njwls");
});

imgBackground.addChild(newMask);
}


async function ShowSprite(id,imgBackground,infoSprite,sc,sl,containerWidth,appContainer){


let divisor = null;

if(containerWidth > 380){

    divisor = 2.3

}else{

divisor = 1.65

}

 let rangerSelectd = await appContainer.createSprite(
 './Img/rangersColor.png',
 infoSprite.rectX,
 infoSprite.rectY,
 infoSprite.W,
 infoSprite.H,
 imgBackground.texture.width * infoSprite.PosX,
 imgBackground.texture.height * infoSprite.PosY,
 sc/divisor,
 infoSprite.Nombre
 ); 

imgBackground.addChild(rangerSelectd);
sl.push(rangerSelectd);
}

function deleteSpriteRanger(sl,imgBackground){

imgBackground.removeChild(sl[0]);
sl[0].destroy();
sl.pop();
}

}