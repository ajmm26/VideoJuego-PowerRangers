const begin={
    gameStar:()=>{
        console.log("Juego iniciado")
        keyboard.start();
        dimensions.init();
        begin.reloadTiles();
        principalLoop.iterar();

},
reloadTiles:()=>{
    document.getElementById('juego').innerHTML="";
    
            var R = new Rectangulo(dimensions.obtainHorizontalSizesTiles,dimensions.obtainVerticalSizesTiles,dimensions.sizeTiles,dimensions.sizeTiles)
            
        }
     }

        
       

begin.gameStar();