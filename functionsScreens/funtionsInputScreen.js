
import { createHtmlItem } from "../globalFunctions"; 

export function erroMessageName(name,div){

if(!name && !document.getElementById('text-error-inputName')){
let textError=createHtmlItem('p','text-error-inputName','');
textError.innerText='Debes colocar un nombre';
div.appendChild(textError);
return false
} else {
    if(document.getElementById('text-error-inputName') && name){
    div.removeChild(document.getElementById('text-error-inputName'))
    return true
    }else{
       if(!document.getElementById('text-error-inputName') && name){
        return true;
       }
    }
}
}


export function removeinput(input,div,res)
{
  res ? div.removeChild(input) : null;
}


export function buttonBackPosition(cWidth,imgW){


let positions = cWidth <= 600
  ? { X: 0, Y: 0 }
  : { X: imgW.x, Y: imgW.y };

  
return positions;
}


export function messageBoxScaleXY(cWidth,img){

const scales = cWidth >= 600 
?{X: (img.width * 1)/1000,
  Y: (img.height * 1.2)/1000}

: {X: (img.width * 0.7)/1000,
  Y: (img.height * 1)/1000}   
  
  return scales;
}


export function positionMessageBox(cWidth,img){

  let pX=null;
 (cWidth >= 600) ?  pX= img.x + (img.width*0.1) :  pX= img.x + (img.width*0.22)

const positions = {
  X: pX,
  Y: img.y + (img.height*0.6)
}

return positions
}


export function skipMessageZordon(cWidth){
  
}