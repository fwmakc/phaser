export function loadImages (scene, images) {
  Object.entries(images)?.forEach(([k, i]) => {
    scene.load.image(k, `assets/${i}`);
  });
}
