export function loadLevel (scene) {
  // scene.store.set('level', undefined);
  const level = scene.store.get('level', 1);
  scene.load.json('level', `levels/${level}.json`);
}
