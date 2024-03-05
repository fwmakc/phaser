export function bgCreate (scene) {
  const { sceneHeight, sceneWidth } = scene.sizes;
  scene.add.image(sceneWidth / 2, sceneHeight / 2, 'sky')
}
