import { Scene } from 'phaser';
import { preload } from './preload';
import { create } from './create';
import { update } from './update';

export class GameOver extends Scene {
  constructor () {
    super('GameOver');
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
