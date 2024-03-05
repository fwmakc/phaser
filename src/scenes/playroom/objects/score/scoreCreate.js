export function scoreCreate (scene) {
  scene.score = scene.store.get('score', 0);
  scene.scoreText = scene.add.text(
    16,
    16,
    `Level: ${scene.level.id} | Score: ${scene.score}`,
    {
      fontSize: '24px',
      fill: '#000',
    },
  );
}
