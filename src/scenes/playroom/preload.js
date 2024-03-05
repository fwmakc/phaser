import {
  images,
  spritesheets,
} from './sources';

import {
  getSizes,
  loadImages,
  loadLevel,
  loadSpritesheets,
  StoreClass,
} from '/src/helpers/helpers';

export function preload (scene) {
  scene.store = new StoreClass('game');
  scene.store.read();

  const sizes = getSizes(scene);
  scene.sizes = sizes;

  loadImages(scene, images);
  loadSpritesheets(scene, spritesheets);

  loadLevel(scene);
}
