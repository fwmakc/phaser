export function getSizes (scene) {
  const { height: sceneHeight, width: sceneWidth } = scene.game.config;

  console.log(scene);

  return {
    sceneHeight,
    sceneWidth,
  };
}
