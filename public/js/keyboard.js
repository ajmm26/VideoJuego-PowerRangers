const keyboard ={
    buttons: new Array(),
    start:()=>{
document.onkeydown=keyboard.saveButton
    },
    saveButton:(e)=>{
   keyboard.buttons.push(e.key)
   console.log(e.key)
    },
    buttonDown:(keyCode)=>{
        return (keyboard.buttons.indexOf(keyCode)!==-1)? true:false;

    },
    restart:()=>{
     keyboard.buttons=new Array();
    } 
}