export function update (scene) {
  if (scene.cursors.space.isDown) {
    scene.registry.destroy(); // destroy registry
    scene.events.off(); // disable all active events
    scene.cache.json.remove('level');
    scene.scene.start('IntroScene');
    return;
  }
}
