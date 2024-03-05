export function update (scene) {
  if (scene.cursors.space.isDown && scene.isLoaded) {
    scene.scene.start('PlayRoom');
  }
}
