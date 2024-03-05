export function loadSpritesheets (scene, spritesheets) {
  Object.entries(spritesheets)?.forEach(([k, i]) => {
    scene.load.spritesheet(k, `assets/${i.image}`, i.options);
  });
}
