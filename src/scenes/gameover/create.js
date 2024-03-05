export function create (scene) {
  const { sceneWidth, sceneHeight } = scene.sizes;
  const gameover = scene.add.image(sceneWidth / 2, sceneHeight / 2, 'gameover');

  scene.tweens.add({
    targets: gameover,
    duration: 5000,
    scale: {
      getStart: () => 5,
      getEnd: () => 0.5
    },
    alpha: {
      getStart: () => 0,
      getEnd: () => 1
    },
    ease: 'Sine.inOut',
    // yoyo: true,
    // repeat: -1
  });

  scene.cursors = scene.input.keyboard.createCursorKeys();
  // console.log('!', scene.cursors);
}
