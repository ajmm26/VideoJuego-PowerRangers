
export function oneScaleOptionsBackgroundInit(width, secondScale, sprite) {

    switch (true) {

    case (width > 900) && (width <= 1000):
        secondScale =1.7;
        break;
    case (width <= 900) && (width > 800):
        secondScale= 1.5;
        break;
    case (width <= 800) && (width > 700):
        secondScale = 1.4; 
        break 
    case (width <= 700) && (width > 600):  
     secondScale = 1.2; 
       break
    case (width <= 600):
         secondScale = 1;
        break;
      default:
         secondScale ; 
      break; 
    }
    
    


sprite.scale.set(secondScale);
}



export function positionBackgroundInit(appContainer, sprite) {
 let containerWidth = appContainer.app.screen.width;
 let containerHeight = appContainer.app.screen.height;

 if(containerWidth > 800){
    sprite.x = ((containerWidth - sprite.width) / 2) * 0.6;
    sprite.y = (containerHeight - sprite.height) / 2;

 }else{
    if(containerWidth < 800 && containerWidth >= 600){
        sprite.x = ((containerWidth - sprite.width) / 2) * 0.4;
        sprite.y = (containerHeight - sprite.height) / 2;
         } 
         else{
            sprite.x = (containerWidth - sprite.width) / 2;
            sprite.y = ((containerHeight - sprite.height) / 2)*0.4;
         }
    }
}


export function posicionHorizontalMenuBotones(width,iconMenu,button){

    if(width >= 600){
        posicionHorizontalMenuBotonesMore600(iconMenu,button);
    }else{
     posicionHorizontalMenuBotonesLess600(iconMenu,button)
    }

}


 function posicionHorizontalMenuBotonesMore600(iconMenu,button){
 
  
 button.x = (iconMenu.width + iconMenu.x ) * 1.1

}


 function  posicionHorizontalMenuBotonesLess600(iconMenu,button){

       button.x= iconMenu.x + (iconMenu.width/3);

}



export function posicionVerticalMenuButtons (width,buttonprev,button){
 
    if(width >= 600){
        button.y =   buttonprev.y + buttonprev.height + 25
        console.log('altura de ',button.name,button.height, 'y poY ', button.y)
    }else{

        button.y =   (buttonprev.y + buttonprev.height) - 10
    }
}

export function scaleButtonsMenu(width){

    let scale = null;
   switch(true){
    
    case (width  >= 900):
        scale = 0.5
        break;
    case (width < 900 && width >= 600):
        scale= 0.4
        break;
    default:
        scale = 0.3
        break;
   }

  return scale;
}