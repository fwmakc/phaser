export function create (scene) {
  const { sceneWidth, sceneHeight } = scene.sizes;
  const logo = scene.add.image(sceneWidth / 2, sceneHeight / 2, 'logo');

  scene.isLoaded = false;

  scene.tweens.add({
    targets: logo,
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
    onComplete(e) {
      console.log(e);
    }
  });

  scene.tweens.add({
    targets: logo,
    delay: 5000,
    duration: 1000,
    y: logo.height,
    ease: 'Sine.inOut',
    onComplete(e) {
      scene.isLoaded = true;
    }
  });

  scene.cursors = scene.input.keyboard.createCursorKeys();
  // console.log('!', scene.cursors);
}
