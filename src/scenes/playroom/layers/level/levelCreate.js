import { objects } from '../../sources';

export function levelCreate (scene) {
  if (!scene.level?.data) {
    scene.store.set('level', 1);
    // scene.level.id = 1;
    console.log('game over');
    scene.scene.start('GameOver');
    return;
  }

  scene.level.data.forEach((cols, row) => {
    cols.forEach((item, col) => {
      // console.log(row, col, item);

      item = item?.trim().toLowerCase() || undefined;
      if (!item) {
        return;
      }

      // размеры спрайта
      const { name, object, sprite } = objects[item];
      const { height, width } = scene.textures.list[name].source[0];

      // позиция на экране
      const x = col * 32 + 16;
      const yDiff = (height - 32) / 2
      const y = row * 32 + 16 - yDiff;

      // console.log(name, height, width, x, y);

      if (sprite) {
        scene[object].setX(x);
        scene[object].setY(y);
        return;
      }

      scene[object].create(x, y, name);
      // scene.platforms.create(x, y, image);
    });
  });
  // console.log('>>', scene.level.data);
}
