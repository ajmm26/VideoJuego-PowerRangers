import { Sprites } from '../Class/classSprites';
import * as Helpers from '../globalFunctions'
import { menuScreen } from './menuScreen';
import { Text } from '../Class/classText';
import { erroMessageName,removeinput, buttonBackPosition, messageBoxScaleXY,positionMessageBox} from '../functionsScreens/funtionsInputScreen';

export async function inputScreen(){
  try {
    const container= document.getElementById('div-game');
    const app = Helpers.createApp(container); 
    const appContainer = new Sprites(app)
    const containerWidth = appContainer.app.screen.width 
    const containerHeight = appContainer.app.screen.height;
    container.appendChild(app.view);


    /// imagen de fondo
    const imgBackground= await appContainer.createSprite(
    '/CursoPHP/Img/sheetComandCenter.png',
    20,
    20,
    370,
    200,
    0,
    0,
    1,
    'center'
    )
    /// Se calcula el scale
     let nosew = containerWidth / imgBackground.texture.width;
    let noseh = containerHeight / imgBackground.texture.height;
    let sc=null;
    if(containerWidth <= 500){
   sc= Math.max(nosew,noseh);
    }else{
      
     sc = Math.min(nosew, noseh); // Escala mínima para que quepa dentro del contenedor
    }
    imgBackground.scale.set(sc); // Aplica misma escala a X e Y (uniforme)
    appContainer.centerSprite(imgBackground,2,2)
    
   const buttonBackPositionScreen = buttonBackPosition(containerWidth,imgBackground);
    /// Button de volver al menu
  
      const buttonBack= await appContainer.createSprite(
    
         '/CursoPHP/Img/miniBotones.png',
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
    imgButton.src='../CursoPHP/Img/proximo.png';
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
      const zordon= await appContainer.createSprite('/CursoPHP/Img/sheetComandCenter.png', 20,250,90,60,monitorX,monitorY,sc)
      //se crean las constantes para posicionar el messagebox
     const positionMessageBoxXY= positionMessageBox(containerWidth,imgBackground)
      //// se hace la animacion de la aparicion de zordon
     animationSprite(appContainer,1,zordon);
     //se crea el intervalo que hace el funcionamiento de la maquina para escribir
     setTimeout(async ()=>{
       /// se crea la message box
       const messageBox= await appContainer.createSprite('/CursoPHP/Img/message-box.png', 0,30,819,258,positionMessageBoxXY.X,positionMessageBoxXY.Y,1)
      ////se calcula la escala de la messageBox
       const messageBoxScales = messageBoxScaleXY(containerWidth,imgBackground);
       messageBox.scale.set(messageBoxScales.X,messageBoxScales.Y)
        const border = new PIXI.Graphics();
       border.lineStyle(4, 0xff0000, 1); // grosor=4, color rojo, opacidad=1
        border.drawRect(messageBox.x, messageBox.y, messageBox.width, messageBox.height);
        appContainer.app.stage.addChild(border)
       const fontTextZordonName=String(messageBox.width*0.1)+'px'
        let kakakak= await text.createText('','Jersey 10', '#000000', fontTextZordonName)
        console.log(kakakak.style.size)
         const margenHorizontal = messageBox.width*0.11;
         const margenVertical= messageBox.height * 0.4;
          kakakak.x = margenHorizontal; // margen dentro del messageBox
          kakakak.y = margenVertical;
           kakakak.style.wordWrap = true;             // Activar salto de línea
       kakakak.style.wordWrapWidth = messageBox.width      // Ancho máximo antes de saltar
       kakakak.style.lineHeight=30
       messageBox.addChild(kakakak);
       const dialogo="[NOMBRE], has sido elegido para enfrentar las fuerzas del mal dirigidas por Lord Zedd y Rita Repulsa. Los Power Rangers están en otra misión y no pueden detener esta amenaza. Recibirás los poderes del Ranger que elijas para poder luchar. Ahora iremos al Centro de Control para que selecciones tus habilidades. El Destino del planeta está en tus manos."
      const dialogoReplace = dialogo.replace('[NOMBRE]', nombre.toUpperCase())
       maquinaDeEscribir(messageBox,dialogoReplace, kakakak);
           
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


function animationSprite(appContainer, duration, sprite) {
    const startTime = Date.now();

    const animate = () => {
        const elapsedTime = (Date.now() - startTime) / 1000; // Tiempo en segundos

        if (elapsedTime < duration) {
           sprite.alpha = elapsedTime / duration;
        } else {
          sprite.alpha=1;
            console.log("Animación completada");
            appContainer.app.ticker.remove(animate);
        }
    };

    appContainer.app.ticker.add(animate);
}


function maquinaDeEscribir(sprite,dialogue,text){

const arrayText = dialogue.split("");

const cant = arrayText.length;

let i=0;

const interval = setInterval(()=>{
 if(i<cant){
   text.text+= arrayText[i];
   i++
    sprite.addChild(text);
 }else{
   clearInterval(interval);
 }
}, 100)
  

}