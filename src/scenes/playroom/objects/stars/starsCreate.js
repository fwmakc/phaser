export function starsCreate (scene) {
  scene.stars = scene.physics.add.group({
    key: 'star',
    repeat: 9,
    setXY: { x: 16, y: 0, stepX: 64 }
  })

  scene.stars.children.iterate((child) => {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
  })
}
