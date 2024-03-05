import { Scene } from 'phaser';
import { preload } from './preload';
import { create } from './create';
import { update } from './update';

export class IntroScene extends Scene {
  constructor () {
    super('IntroScene');
  }

  preload () {
    preload(this);
  }

  create () {
    create(this);
  }

  update () {
    update(this);
  }
}
