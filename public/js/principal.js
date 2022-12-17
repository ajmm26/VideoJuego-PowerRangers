const principalLoop={
    idEjecicion:null,
    ultimoRegistro:0,
    aps:0,
    fps:0,
    iterar:(tempRegistro)=>{
       principalLoop.idEjecicion=window.requestAnimationFrame(principalLoop.iterar);
       principalLoop.refresh(tempRegistro);
       principalLoop.draw();
       if(tempRegistro-principalLoop.ultimoRegistro>999){
        principalLoop.ultimoRegistro=tempRegistro;
        console.log("Aps: " + principalLoop.aps +" | Fps: " + principalLoop.fps);
        principalLoop.aps=0;
        principalLoop.fps=0;

       }
    },
    pause:()=>{

    },
    refresh:(tempRegistro)=>{
        keyboard.restart();
        principalLoop.aps++;

    },
    draw:(tempRegistro)=>{
        principalLoop.fps++;

    }


}