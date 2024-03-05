export function platformsCreate (scene) {
  scene.platforms = scene.physics.add.staticGroup();

  // scene.platforms.create(400, 568, 'ground').setScale(2).refreshBody()

  // размеры спрайта
  const { height, width } = scene.textures.list.ground.source[0];

  // размеры сцены
  const { sceneHeight, sceneWidth } = scene.sizes;

  // рисуем пол
  let i = 0;
  while (i < sceneWidth) {
    const x = i + width - width / 2;
    const y = sceneHeight - (height / 2);
    scene.platforms.create(x, y, 'ground');
    i += width;
  }

  // scene.platforms.create(600, 400, 'ground');
  // scene.platforms.create(50, 250, 'ground');
  // scene.platforms.create(750, 220, 'ground');
}