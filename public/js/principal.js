const principalLoop={
    idEjecicion:null,
    ultimoRegistro:0,
    aps:0,
    fps:0,
    iterar:(Tempregistro)=>{
       principalLoop.idEjecicion=window.requestAnimationFrame(principalLoop.iterar);
       principalLoop.refresh(Tempregistro);
       principalLoop.draw();
       if(registro-principalLoop.ultimoRegistro>999){
        principalLoop.ultimoRegistro=Tempregistro;
        console.log("Aps: " + principalLoop.aps) +" | Fps: " + principalLoop.fps;
        principalLoop.aps=0;
        principalLoop.fps=0;

       }
    },
    pause:()=>{

    },
    refresh:(Tempregistro)=>{
        principalLoop.aps++;

    },
    draw:(Tempregistro)=>{
        principalLoop.fps++;

    }


}