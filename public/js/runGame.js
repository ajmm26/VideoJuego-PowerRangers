const init={
    gameStar:()=>{
        console.log("Juego iniciado")
        dimensions.init();
        var r= new Rectangulo(0,0,120,120)
        principalLoop.iterar();

}
}

init.gameStar();