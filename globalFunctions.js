
export function createApp(container){
     let app = new PIXI.Application({
            width: container.clientWidth,
            height: container.clientHeight,
            backgroundColor: 0x00000, // Fondo blanco
            resolution: window.devicePixelRatio || 1
        });
        return app
}

export function changeBrightnessDinamic(sprite, brightness1, brightness2 ) {
    const filter = new PIXI.filters.ColorMatrixFilter();
            sprite.filters = [filter];

            sprite.on('pointerover', () => {
                filter.brightness(brightness2);
            });

            sprite.on('pointerout', () => {
                filter.brightness(brightness1);
            });
}

export function changeBrightness(sprite, brightness) {
    const filter = new PIXI.filters.ColorMatrixFilter();
    sprite.filters = [filter];
    filter.brightness(brightness);
}


export function createHtmlItem(item,idName='', className=''){

const newItem = document.createElement(item);
if(className) newItem.classList.add(className);
if(idName) newItem.id=idName;

return newItem;
}


export function getScale(containerWidth,containerHeight, imgBackground){

    let nosew = containerWidth / imgBackground.texture.width;
    let noseh = containerHeight / imgBackground.texture.height;
    let sc=null;

    if(containerWidth <= 600){
   sc= Math.max(nosew,noseh);
    }else{
     sc = Math.min(nosew, noseh); // Escala mínima para que quepa dentro del contenedor
    }

    return sc;
}