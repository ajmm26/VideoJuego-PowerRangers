export class Animation {

constructor(app) {
    this.app = app;
}


animationSprite(appContainer, duration, sprite,modo) {
    const startTime = Date.now();

    const animate = () => {
        const elapsedTime = (Date.now() - startTime) / 1000; // Tiempo en segundos

        switch(modo){
             
          case 1:
            this.animationSpriteVisibleMode(duration, appContainer, sprite, elapsedTime, animate);
            break;
          case 2:
            this.animationSpriteInvisibleMode(duration, appContainer, sprite, elapsedTime, animate);
            break;
        }
    };

    appContainer.app.ticker.add(animate);
}


 animationSpriteVisibleMode(duration, appContainer, sprite, elapsedTime, animate){
 if (elapsedTime < duration) {
           sprite.alpha = elapsedTime / duration;
        } else {
             sprite.alpha=1;
            console.log("Animación completada");
            appContainer.app.ticker.remove(animate);
            
        }
}

 animationSpriteInvisibleMode(duration, appContainer, sprite, elapsedTime, animate){
 if (elapsedTime < duration) {
           sprite.alpha = 1-(elapsedTime / duration);
        } else {
             sprite.alpha=0;
            console.log("Animación completada");
            appContainer.app.ticker.remove(animate);
            
        }
}


}