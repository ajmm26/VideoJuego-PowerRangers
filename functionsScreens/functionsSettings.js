

export function scalePhotoBackground(width) {
    let scale=null;
    if(530 >= width ){
        scale=1.5
    }else{
       scale=2 
    }
   
    return scale;
}


export function scaleButtonSettings(width) 
{

    let scale=null;
    if(530 >= width ){
        scale=0.4
    }else{
       scale=0.5 
    }

    return scale

}