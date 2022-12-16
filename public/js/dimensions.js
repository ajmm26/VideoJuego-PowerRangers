const dimensions={
    width: window.innerWidth ,
    height: window.innerHeight,
    init:()=>{
      window.addEventListener("resize",(e)=>{
        dimensions.width= window.innerWidth
        dimensions.height= window.innerHeight
        console.log( "height: ",dimensions.height , "width: " , dimensions.width)
      })
    }
}

dimensions.init();