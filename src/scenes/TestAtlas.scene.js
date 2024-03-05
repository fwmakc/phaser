import { Scene } from 'phaser';
import { createPalettes } from '/src/helpers/helpers'

export class TestAtlas extends Scene {
  constructor () {
    super('TestAtlas')
  }

  preload () {
    this.load.image('palette', '/assets/palette.png');
    this.load.spritesheet('soldier', '/assets/soldier.png', {
        frameWidth: 80,
        frameHeight: 80,
    });
  }

  create () {
    var animConfig = {
      paletteKey: 'palette',
      paletteNames: ['blue', 'cyan', 'green', 'yellow', 'orange', 'brown', 'red', 'purple'],
      spriteSheet: {
        key: 'soldier',
        frameWidth: 80,
        frameHeight: 80,
      },
      animations: [
        { key: 'walk-right', frameRate: 0, startFrame: 0, endFrame: 0 },
        { key: 'walk-left', frameRate: 0, startFrame: 1, endFrame: 1 },
      ]
    };

    createPalettes(this, animConfig);

    // -- DEMO -- \\
    this.add.text(5, 5, "LEFT-RIGHT: Change Animation");
    this.add.text(5, 20, "ENTER: Change Palette");

    var soldier = this.add.sprite(120, 120, 'soldier-' + animConfig.paletteNames[0]);

    soldier.color = animConfig.paletteNames[0];
    soldier.anims.play('soldier-' + soldier.color + '-walk-right');

    this.input.keyboard.on('keydown-LEFT', () => {
      soldier.flipX = false;
      soldier.anims.play('soldier-' + soldier.color + '-walk-left');
    });

    this.input.keyboard.on('keydown-RIGHT', () => {
      soldier.flipX = true;
      soldier.anims.play('soldier-' + soldier.color + '-walk-left');
    });

    this.input.keyboard.on('keydown-ENTER', () => {
      let index = animConfig.paletteNames.indexOf(soldier.color);
      index++;
      if (index >= animConfig.paletteNames.length) {
          index = 0;
      }

      soldier.color = animConfig.paletteNames[index];

      const currentAnim = soldier.anims.currentAnim.key.split('-');
      currentAnim[1] = soldier.color;
      soldier.anims.play(currentAnim.join('-'));
      // soldier.anims.play('soldier-' + soldier.color + '-walk-right');
    });
  }

  update () {
  }
}
