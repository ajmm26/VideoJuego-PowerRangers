import * as Helpers from '../globalFunctions.js';
import { Sprites } from '../Class/classSprites.js';
import {Animation} from '../Class/classAnimation.js';
import { Text } from '../Class/classText.js';
const container = document.getElementById('div-game');
const app = Helpers.createApp(container);
const appContainer = new Sprites(app);
const text = new Text(app);

const messageChoiceRanger = [

    {id:0, descripcion: "Obtendrás los poderes del Blue Ranger, otorgándote una mente estratégica para anticipar ataques y explotar las debilidades enemigas.", atributo:"Intelecto / Astucia"},
    {id:1, descripcion: "Obtendrás los poderes de la Pink Ranger, otorgándote una puntería letal para dominar el combate desde cualquier distancia.", atributo:"Precisión / Alcance"},
    {id:2, descripcion:"Obtendrás los poderes del Red Ranger, otorgándote una fuerza imparable para aplastar a tus enemigos y romper sus defensas.", atributo:"Fuerza / Ataque"},
    {id:3, descripcion:"Obtendrás los poderes del White Ranger, otorgándote una energía superior para potenciar tus habilidades y dominar el combate.", atributo:"Poder / Energía"},
    {id:4, descripcion:"Obtendrás los poderes de la Yellow Ranger, otorgándote una velocidad fulminante para esquivar y atacar antes que tus enemigos.", atributo:"Velocidad / Agilidad"},
    {id:5, descripcion:" Obtendrás los poderes del Black Ranger, otorgándote una resistencia imparable para soportar ataques y dominar el combate cuerpo a cuerpo.", atributo:"Resistencia / Fuerza"}
]

const miniSpritesPositions = [
    {url:"spritesBlueRanger.png" ,rectX: 124, rectY: 7, W: 36, H: 65, X:0.77 ,Y:0.58,scale:2.5},
    {url:"spritesPinkRanger.png" ,rectX: 128, rectY: 8, W: 37, H: 64, X:0.77 ,Y:0.58,scale:2.6},
    {url: "spritesRedRanger.png",rectX: 200, rectY: 28, W: 51, H: 78, X:0.76 ,Y:0.58,scale:2.3},
    {url: "spritesWhiteRanger.png",rectX: 102, rectY: 146, W: 39, H: 65, X:0.77 ,Y:0.58,scale:2.5},
    {url: "spritesYellowRanger.png",rectX: 133, rectY: 39, W: 37, H: 62, X:0.77 ,Y:0.58,scale:2.5},
     {url: "spritesBlackRanger.png",rectX: 118, rectY: 9, W: 37, H: 62, X:0.77 ,Y:0.58,scale:2.5}


]

export async function centerComanderScreen(){
    container.appendChild(app.view);
    const containerWidth = appContainer.app.screen.width;
    const containerHeight = appContainer.app.screen.height;
    const AS = new Animation(app);

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
createMaskRanger(MaskPositions,imgBackground,SpritesPositions,sc,sl,containerWidth,txtTitulo);


    //imgBackground.addChild(rangerSelectd);
    appContainer.centerSprite(imgBackground,2,2)
    appContainer.app.stage.addChild(imgBackground);
    //AS.animationSprite(appContainer,1.5,imgBackground,1);

}


function createMaskRanger(MaskPositions,imgBackground,SpritesPositions,sc,sl,containerWidth,txtTitulo){

let isPressed = false;

for( const mask of MaskPositions ){

let newMask = new PIXI.Graphics();
newMask.beginFill(0xfdfdfd,0.001);
newMask.drawRect(imgBackground.texture.width * mask.PosX , imgBackground.texture.height * mask.PosY, imgBackground.texture.width * mask.W,  imgBackground.texture.height * mask.H);  // Área local no escalada
newMask.endFill();
newMask.name = mask.id
appContainer.makeButton(newMask,'pointerenter', async ()=>{

    if(isPressed) return;
    newMask.alpha = 0.2
    await ShowSprite(mask.id,imgBackground,SpritesPositions[mask.id],sc,sl,containerWidth,txtTitulo);
})

appContainer.makeButton(newMask,'pointerleave', async ()=>{
newMask.alpha = 0
if(!isPressed){
    deleteSpriteRanger(sl,imgBackground);
}
})

appContainer.makeButton(newMask,'pointerdown', async ()=>{
    if( isPressed){
        deleteSpriteRanger(sl,imgBackground);
        await ShowSprite(mask.id,imgBackground,SpritesPositions[mask.id],sc,sl,containerWidth,txtTitulo);
    }
    
    imgBackground.removeChild(txtTitulo);
    await createMessageBoxRanger(sc,SpritesPositions[mask.id],imgBackground,containerWidth)
    
    isPressed = true;
});


imgBackground.addChild(newMask);
}


async function ShowSprite(id,imgBackground,infoSprite,sc,sl,containerWidth){


let divisor = getDivisorRangers(containerWidth);

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



function getDivisorRangers(containerWidth){
if(containerWidth > 380){
    return 2.3
}else{
    return 1.75}
}


function getDivisorMessageBoxRangers(containerWidth){
if(containerWidth > 380){
    return 0.3
}else{
    return 0.4}
}

async function createMessageBoxRanger(sc,infoSprite,imgBackground,containerWidth){
let divisor = getDivisorMessageBoxRangers(containerWidth)

 let messageBoxRangerSelected = await appContainer.createSprite(
 './Img/messageBoxRanger.png',
 88,
 65,
 1197,
 622,
 imgBackground.texture.width * 0.1,
0,
 0.2,
 infoSprite.Nombre
 ); 

 const textosMessageBox = await createtxtMessageBoxRanger(infoSprite.id);
 let descripcion = textosMessageBox.descripcion;
 let atributo = textosMessageBox.atributo
 descripcion.x = messageBoxRangerSelected.texture.width * 0.1
 descripcion.y = messageBoxRangerSelected.texture.height * 0.18
descripcion.style.wordWrap = true;
descripcion.style.wordWrapWidth = messageBoxRangerSelected.width*4;

atributo.y = descripcion.y * 3.3
atributo.x = messageBoxRangerSelected.texture.width * 0.1
atributo.style.wordWrap = true;
atributo.style.wordWrapWidth = messageBoxRangerSelected.width*4;
 messageBoxRangerSelected.addChild(descripcion);
 messageBoxRangerSelected.addChild(atributo);

 let miniRangerSelected = await createMiniRanger(infoSprite.id,containerWidth,messageBoxRangerSelected)
 messageBoxRangerSelected.addChild(miniRangerSelected);

 await createtxtConfirm(imgBackground);

 ///messageBoxRangerSelected.scale.Y= 0.1
 imgBackground.addChild(messageBoxRangerSelected);

}



async function createtxtMessageBoxRanger(id){
const txtDescripcion = messageChoiceRanger[id].descripcion
const txtAtributo = messageChoiceRanger[id].atributo
let txtChoiceRanger = await text.createText2(txtDescripcion,'jersey 10', '#ffffff','65px');
let txtAttributeRanger =  await text.createText2( "Atributo: "+ txtAtributo,'jersey 10', '#ffffff','65px');

return {
    descripcion: txtChoiceRanger,
    atributo: txtAttributeRanger
}}


async function createMiniRanger(id,containerWidth,messageBoxRanger){

const MiniRangerY = messageBoxRanger.texture.height * miniSpritesPositions[id].Y
const MiniRangerX = messageBoxRanger.texture.width * miniSpritesPositions[id].X
const scaleMiniRanger = Math.max(MiniRangerX,MiniRangerY);

 let miniRanger = await appContainer.createSprite(
 './Img/'+ miniSpritesPositions[id].url,
 miniSpritesPositions[id].rectX,
 miniSpritesPositions[id].rectY,
 miniSpritesPositions[id].W,
 miniSpritesPositions[id].H,
MiniRangerX,
MiniRangerY,
 miniSpritesPositions[id].scale,
 'mini'
 ); 

 return miniRanger

}



async function createtxtConfirm(imgBackground){

    const txtConfirmRanger = await text.createText2("Presiona Y/A para confirmar tu ranger",'jersey 10', '#ffffff', imgBackground.texture.height * 0.07+'px');
    txtConfirmRanger.x = imgBackground.texture.width * 0.08
    txtConfirmRanger.y = imgBackground.texture.height * 0.5
    imgBackground.addChild(txtConfirmRanger);

}
}