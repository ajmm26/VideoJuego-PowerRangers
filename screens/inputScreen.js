import { Sprites } from '../Class/classSprites.js';
import * as Helpers from '../globalFunctions.js'
import { menuScreen } from './menuScreen.js';
import { Text } from '../Class/classText.js';
import { erroMessageName,removeinput, buttonBackPosition, messageBoxScaleXY,positionMessageBox} from '../functionsScreens/funtionsInputScreen.js';
import { transporBase } from '../js/animation/transportationBase.js';
import {Animation} from '../Class/classAnimation.js';

export async function inputScreen(){
  try {
    const container= document.getElementById('div-game');
    const app = Helpers.createApp(container); 
    const appContainer = new Sprites(app)
    const containerWidth = appContainer.app.screen.width 
    const containerHeight = appContainer.app.screen.height;
    container.appendChild(app.view);


    const AS = new Animation(app);
    container.appendChild(app.view);

    /// imagen de fondo
    const imgBackground= await appContainer.createSprite(
    './Img/sheetComandCenter.png',
    20,
    20,
    370,
    200,
    0,
    0,
    1,
    'center'
    )

    appContainer.app.stage.addChild(imgBackground);
    

    /// Se calcula el scale
     let nosew = containerWidth / imgBackground.texture.width;
    let noseh = containerHeight / imgBackground.texture.height;
    let sc=null;
    if(containerWidth <= 600){
   sc= Math.max(nosew,noseh);
    }else{
      
     sc = Math.min(nosew, noseh); // Escala mínima para que quepa dentro del contenedor
    }
    imgBackground.scale.set(sc); // Aplica misma escala a X e Y (uniforme)
    appContainer.centerSprite(imgBackground,2,2)
    
   const buttonBackPositionScreen = buttonBackPosition(containerWidth,imgBackground);
    /// Button de volver al menu
  
      const buttonBack= await appContainer.createSprite(
    
         './Img/miniBotones.png',
            0,
            0,
            72,
            74,
            buttonBackPositionScreen.X,
            buttonBackPositionScreen.Y,
            0.7,
            'nwiofhw'
    
    );
    

    appContainer.makeButton(buttonBack,'pointerdown',async ()=>{
      if (divInput && container.contains(divInput)) {
    container.removeChild(divInput);
  }
      container.removeChild(app.view)
      await  menuScreen()
    })
    Helpers.changeBrightnessDinamic(buttonBack,1,0.5);
    appContainer.app.stage.addChild(buttonBack);

    ///Texto de ingresar Nombre
    await document.fonts.ready;
    const text= new Text(app);
    let inputTextName= await text.createText('Ingrese su nombre','Jersey 10', '#ffffff','30px')
    inputTextName.x=imgBackground.x+(imgBackground.width*0.4);
    inputTextName.y=imgBackground.y + (imgBackground.height*0.1);
    appContainer.app.stage.addChild(inputTextName);
        
    

    /// div contenedor global del divInputName
    const divInput = Helpers.createHtmlItem('div','divInput','')
    divInput.style.left = `${imgBackground.x+(imgBackground.width*0.4)}px`;
    divInput.style.top = `${imgBackground.y + (imgBackground.height*0.8)}px`;
    /// Div que contiene el input y el button name
    const divInputName = Helpers.createHtmlItem('div','','div-inputName')
    ////Input name
    const input = Helpers.createHtmlItem('input','','input-name');
    input.placeholder='Ingrese su nombre';
    //// button name
   const buttonsubmit = Helpers.createHtmlItem('button','','submit-juego');
   //// img dentro del button name
    const imgButton= Helpers.createHtmlItem('img','','imgButton');
    imgButton.src='./Img/proximo.png';
    buttonsubmit.addEventListener('click', async()=>{
    /// se guarda el nombre en una constante
    const nombre = document.querySelector('.input-name').value.trim();
    let res= erroMessageName(nombre,divInput); /// la respuesta que verifica que exista un nombre valido
    ////se remueve el div que contiene el input
    removeinput(divInput,container,res);
    ///se verifica al respuesta de si hay un nombre valido
    if(res){
      /////se remueve el texto 'ingrese un nombre'
      appContainer.app.stage.removeChild(inputTextName);
     ////// se crean las constantes que colocan la foto de zordon sobre el monitor
      const monitorX = imgBackground.x + (imgBackground.width*0.399)
      const  monitorY = imgBackground.y + (imgBackground.height*0.216)
      /// se crea a zordon 
      const zordon= await appContainer.createSprite('./Img/sheetComandCenter.png', 20,250,90,60,monitorX,monitorY,sc)
      //se crean las constantes para posicionar el messagebox

     const positionMessageBoxXY= positionMessageBox(containerWidth,imgBackground)
     appContainer.app.stage.addChild(zordon);
      //// se hace la animacion de la aparicion de zordon
     AS.animationSprite(appContainer,1,zordon,1);
     //se crea el intervalo que hace el funcionamiento de la maquina para escribir
     setTimeout(async ()=>{
       /// se crea la message box
         const messageBox = await appContainer.createSprite('./Img/message-box.png', 0, 30, 819, 258, positionMessageBoxXY.X, positionMessageBoxXY.Y, 1);
const messageBoxScales = messageBoxScaleXY(containerWidth, imgBackground);
messageBox.scale.set(messageBoxScales.X, messageBoxScales.Y);

// Usa dimensiones NO escaladas para cálculos locales
const unscaledWidth = messageBox.texture.width;  // 819
const unscaledHeight = messageBox.texture.height;  // 258

// Reduce el factor a 0.05 para fuente más pequeña y más líneas (ajusta si necesitas)
const fontTextZordonName = (unscaledWidth * 0.1) + 'px';  // ~41px local, se escala proporcionalmente

const txtZordon = await text.createText('', 'Jersey 10', '#000000', fontTextZordonName);

// Márgenes locales (ajusta 0.11 si el gráfico de message-box.png tiene bordes visuales más gruesos)
const margenHorizontal = unscaledWidth * 0.11;
const margenVertical = unscaledHeight * 0.13;  // Reduce a 10% para más espacio vertical
appContainer.app.stage.addChild(messageBox);

txtZordon.x = margenHorizontal;
txtZordon.y = margenVertical;

txtZordon.style.wordWrap = true;
txtZordon.style.wordWrapWidth = unscaledWidth - (margenHorizontal * 2);  // Espacio efectivo para texto
txtZordon.style.breakWords = true;  // Rompe palabras largas si es necesario
txtZordon.style.align = 'left';  // Asegura alineación izquierda (por defecto, pero explícito)
txtZordon.style.lineHeight = parseFloat(fontTextZordonName) * 0.5;  // Altura de línea proporcional

messageBox.addChild(txtZordon);

// Agrega una máscara para recortar el texto que desborde (horizontal o vertical)
const mask = new PIXI.Graphics();
mask.beginFill(0xffffff);  // Color no importa, es para máscara
mask.drawRect(0, 0, unscaledWidth, unscaledHeight);  // Área local no escalada
mask.endFill();
messageBox.addChild(mask);
messageBox.mask = mask;
const skiptxt = await text.createText('Omitir', 'Jersey 10', '#7d7d7dff', (unscaledWidth * 0.05) + 'px');


const scbuttonContinue = imgBackground.scale.x/15;
const posXButtonContinue = imgBackground.x + (imgBackground.width*0.42);
const posYButtonContinue = imgBackground.y + (imgBackground.height*0.6);
const buttonContinue = await appContainer.createSprite('./Img/buttonContinue.png', 220, 220, 1100, 550, posXButtonContinue, posYButtonContinue, scbuttonContinue);
console.log(buttonContinue);
skiptxt.x = unscaledWidth - (unscaledWidth * 0.15); // Posición local
skiptxt.y = unscaledHeight - (unscaledHeight * 0.2); // Posición local
skiptxt.style.textDecoration = 'underline';
skiptxt.interactive = true;
skiptxt.buttonMode = true;
messageBox.addChild(skiptxt);

appContainer.makeButton(buttonContinue,'pointerdown',()=>{
          AS.animationSprite(appContainer,1.5,imgBackground,2);
          appContainer.app.stage.removeChild(zordon);
          appContainer.app.stage.removeChild(buttonBack);
          appContainer.app.stage.removeChild(buttonContinue);
          setTimeout(  async ()=>{
            container.removeChild(app.view);
            await transporBase();
    
        },1500 )
        })
messageBox.addChild(skiptxt);

const txtContinue= await text.createText2('Continuar', 'Jersey 10', '#ffffff', (unscaledWidth *0.27) + 'px');
     const unscaledWidthButton = buttonContinue.texture.width;
      const unscaledHeightButton = buttonContinue.texture.height;
     const maskButton = new PIXI.Graphics();
     maskButton.beginFill(0xffffff);
     maskButton.drawRect(0, 0, unscaledWidthButton, unscaledHeightButton);
      maskButton.endFill();
      buttonContinue.mask = maskButton;
      buttonContinue.addChild(maskButton);
     txtContinue.x=unscaledWidthButton/2 - txtContinue.width/2.1;
     txtContinue.y=unscaledHeightButton/2 - txtContinue.height/1.5;
     buttonContinue.interactive = true;
     buttonContinue.buttonMode = true;
     Helpers.changeBrightnessDinamic(buttonContinue, 1, 0.5);

skiptxt.on('pointerdown', () => {
  if (messageBox.typingInterval) {

    clearInterval(messageBox.typingInterval);
    messageBox.typingInterval = null;
    setTimeout(async () => {
     appContainer.app.stage.removeChild(messageBox);
     appContainer.app.stage.addChild(buttonContinue);
     buttonContinue.addChild(txtContinue);
    },2000)
  }
  txtZordon.text = "[NOMBRE], has sido elegido para enfrentar las fuerzas del mal dirigidas por Lord Zedd. Los Power Rangers están en otra misión y no pueden detener esta amenaza. Recibirás los poderes un Ranger para poder luchar. Ahora iremos al Centro de Control para que selecciones tus habilidades.".replace('[NOMBRE]', nombre.toUpperCase());
});
const dialogo = "[NOMBRE], has sido elegido para enfrentar las fuerzas del mal dirigidas por Lord Zedd. Los Power Rangers están en otra misión y no pueden detener esta amenaza. Recibirás los poderes un Ranger para poder luchar. Ahora iremos al Centro de Control para que selecciones tus habilidades.";
const dialogoReplace = dialogo.replace('[NOMBRE]', nombre.toUpperCase());
maquinaDeEscribir(messageBox, dialogoReplace, txtZordon).then((response2)=>{
  if(response2===1){
 console.log('Termino del comunicado');
      setTimeout(()=>{
        appContainer.app.stage.removeChild(messageBox);
        appContainer.app.stage.addChild(buttonContinue);
        buttonContinue.addChild(txtContinue);
      },3000);
  }
    
  }); 
     },1200);
    }

   })
      
    /// se agregan a la pantalla
    container.appendChild(divInput);
    divInput.appendChild(divInputName);
     divInputName.appendChild(input)
    divInputName.appendChild(buttonsubmit)
    buttonsubmit.appendChild(imgButton);

  } catch (error) {
    console.log(error);
  }
}
6

function maquinaDeEscribir(sprite=null,dialogue='',text=''){
return new Promise((resolve, reject) => {

const arrayText = dialogue.split("");

const cant = arrayText.length;

let i=0;

if(sprite.typingInterval){
 clearInterval(sprite.typingInterval);
 sprite.typingInterval = null;
}

const interval = setInterval(()=>{
 if(i<cant){
   text.text+= arrayText[i];
   i++
    sprite.addChild(text);
 }else{
   clearInterval(interval);
   resolve(1);
 }
}, 70)
sprite.typingInterval = interval
})
}