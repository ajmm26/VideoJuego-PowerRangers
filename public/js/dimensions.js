const dimensions={
    width: window.innerWidth ,
    height: window.innerHeight,
    sizeTiles:100,
    scale:1,
    init:function(){
      window.addEventListener("resize",(e)=>{
        dimensions.width= window.innerWidth
        dimensions.height= window.innerHeight
        //console.log( "height: ",dimensions.height , "width: " , dimensions.width)
        begin.reloadTiles();
      })
    },
    obtainHorizontalSizesTiles:function(){
      var finalSize= dimensions.sizeTiles * dimensions.scale
      return Math.ceil((dimensions.width-finalSize/finalSize));
      
    },

    obtainVerticalSizesTiles:function(){
      var finalSize2= dimensions.sizeTiles * dimensions.scale
      return Math.ceil((dimensions.height-finalSize2/finalSize2));
    },
    totalTiles:function(){
      return dimensions.obtainHorizontalSizesTiles() * dimensions.obtainVerticalSizesTiles();
    }
}

dimensions.init();