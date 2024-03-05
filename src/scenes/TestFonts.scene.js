import { Scene } from 'phaser';

export class TestFonts extends Scene {
  constructor () {
    super('TestFonts')
  }

  preload () {
    // this.load.bitmapFont('mono', 'fonts/bold.png', 'fonts/bold.fnt');
    // this.load.bitmapFont('mono', 'fonts/standart.png', 'fonts/standart.fnt');
    this.load.bitmapFont('mono', 'fonts/terminal.png', 'fonts/terminal.fnt');
  }

  create () {
    const size = 2;
    this.add.bitmapText(0, 0, 'mono', ' !@#$%^&*()_-+=', size);
    this.add.bitmapText(0, 32, 'mono', '[]{}:;"\'.,<>|\\/?', size);
    this.add.bitmapText(0, 64, 'mono', '0123456789', size).setTint(0xcc5533);
    this.add.bitmapText(0, 96, 'mono', 'ABCDEFGHIJKLM', size);
    this.add.bitmapText(0, 128, 'mono', 'NOPQRSTUVWXYZ', size);
    this.add.bitmapText(0, 160, 'mono', 'abcdefghijklm', size);
    this.add.bitmapText(0, 192, 'mono', 'nopqrstuvwxyz', size);
    this.add.bitmapText(0, 224, 'mono', 'АБВГДЕЁЖЗИЙКЛМНО', size);
    this.add.bitmapText(0, 256, 'mono', 'ПРСТУФХЦЧШЩЪЫЬЭЮЯ', size);
    this.add.bitmapText(0, 288, 'mono', 'абвгдеёжзийклмно', size);
    this.add.bitmapText(0, 320, 'mono', 'прстуфхцчшщъыьэюя', size);
  }

  update () {
  }
}
