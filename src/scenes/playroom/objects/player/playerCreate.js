export function playerCreate (scene) {
  const { sceneHeight } = scene.sizes;
  scene.player = scene.physics.add.sprite(0, sceneHeight - 64, 'dude')

  scene.player.setBounce(0.2)
  scene.player.setCollideWorldBounds(true)
}
