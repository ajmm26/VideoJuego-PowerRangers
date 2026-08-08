
 export  class Controles{
    constructor(){

    }

 init(){
    $(document).ready(() => {

  $(document).on('keydown', (event)=>{
     this.#key_detected(event.key)
  })


    })
 }




#key_detected(event){
     if(event.toUpperCase() ==='A') this.#A();
     if(event.toUpperCase() ==='D') this.#D();
     if(event.toUpperCase() ==='S') this.#S();
     if(event.toUpperCase() ==='W') this.#W();
     if(event === 'ArrowLeft') this.#LEFT();
     if( event === 'ArrowRight') this.#RIGHT();
     if( event === 'ArrowDown') this.#DOWN();
     if( event === 'ArrowUp') this.#UP();


}

#W(fun){
    console.log('W key pressed');
}

#A(fun){
    console.log('A key pressed');
}

#D(fun){
        console.log('D key pressed');
}

#S(fun){
    console.log('S key pressed');
}

#UP(fun){


}

#DOWN(fun){

}

#RIGHT(fun){

}

#LEFT(fun){

}

}

