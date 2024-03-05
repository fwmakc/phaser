import * as Phaser from 'phaser'
import { scenes } from '/src/scenes/scenes'

export const config = {
  type: Phaser.AUTO,
  parent: 'app',
  pixelArt: true,

  width: 640,
  height: 480,
  // backgroundColor: "#ffffff",

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
  scene: scenes,
}
