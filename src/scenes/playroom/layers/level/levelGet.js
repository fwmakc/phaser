export function levelGet (scene) {
  const id = scene.store.get('level', 1);
  const data = scene.cache.json.get('level');

  scene.level = {
    id,
    data,
  };

  console.log('>>', scene.level);
}
