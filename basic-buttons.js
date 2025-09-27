






/*
const app = new PIXI.Application({
  backgroundColor: 0xffffff,
  width: window.innerWidth,
  height: 400
});
app.view.className = 'pixi-app';
app.view.style.display = 'none'; // ocultar canvas inicialmente
document.getElementById('div-game').appendChild(app.view);

(async () => {
  const texture = await PIXI.Assets.load('/CursoPHP/basic-buttons.png');

  const botonTexture = new PIXI.Texture(
    texture.baseTexture,
    new PIXI.Rectangle(300, 100, 400, 200)
  );

  const botonSprite = new PIXI.Sprite(botonTexture);
  botonSprite.x = window.innerWidth / 2 - 100;
  botonSprite.y = 150;
  botonSprite.scale.set(0.3);
  botonSprite.interactive = true;
  botonSprite.buttonMode = true;
  botonSprite.on('pointerdown', () => alert('Click detectado'));

  app.stage.addChild(botonSprite);

  // Mostrar canvas sólo después de cargar la textura y agregar el sprite
  app.view.style.display = 'block';
})();*/
