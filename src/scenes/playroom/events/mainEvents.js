export function mainEvents (scene) {
  scene.physics.add.collider(scene.player, scene.platforms);
  scene.physics.add.collider(scene.stars, scene.platforms)

  scene.physics.add.overlap(scene.player, scene.stars, (player, star) => {
    star.disableBody(true, true)

    scene.score += 10
    scene.scoreText.setText(`Level: ${scene.level.id} | Score: ${scene.score}`,)

    if (scene.stars.countActive(true) === 0) {
      const level = (Number(scene.level.id) || 1) + 1;
      scene.store.set('score', scene.score)
      scene.store.set('level', level)

      scene.stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true)
      })

      const { sceneWidth } = scene.sizes;

      const x = (scene.player.x < sceneWidth / 2) ? Phaser.Math.Between(sceneWidth / 2, sceneWidth) : Phaser.Math.Between(0, sceneWidth / 2)
      const bomb = scene.bombs.create(x, 16, 'bomb')
      bomb.setBounce(1)
      bomb.setCollideWorldBounds(true)
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)

      // scene.registry.destroy(); // destroy registry
      // scene.events.off(); // disable all active events
      scene.cache.json.remove('level');
      scene.scene.restart(); // restart current scene
    }
  }, null, scene)

  scene.physics.add.collider(scene.bombs, scene.platforms)

  scene.physics.add.collider(scene.player, scene.bombs, (player, bomb) => {
    scene.physics.pause()

    scene.player.setTint(0xff0000)

    scene.player.anims.play('turn')

    scene.gameOver = true
  }, null, scene)
}