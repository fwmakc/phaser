import { Scene } from 'phaser';
import { preload } from './preload';
import { create } from './create';
import { update } from './update';

export class PlayRoom extends Scene {
  constructor () {
    super('PlayRoom')
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
