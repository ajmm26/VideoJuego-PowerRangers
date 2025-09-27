
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
     if(event.toUpperCase() ==='A' || event === 'ArrowLeft') this.#A();
     if(event.toUpperCase() ==='D' || event === 'ArrowRight') this.#D();
     if(event.toUpperCase() ==='S' || event === 'ArrowDown') this.#S();
     if(event.toUpperCase() ==='W' || event === 'ArrowUp') this.#W();



}

#W(){
    console.log('W key pressed');
}

#A(){
    console.log('A key pressed');
}

#D(){
        console.log('D key pressed');
}

#S(){
    console.log('S key pressed');
}

}

