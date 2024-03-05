import {
  getSizes,
  loadImages,
  StoreClass,
} from '/src/helpers/helpers';
import { images } from './sources';

export function preload (scene) {
  scene.store = new StoreClass('game');
  scene.store.read();
  
  const sizes = getSizes(scene);
  scene.sizes = sizes;
  
  loadImages(scene, images);
}
