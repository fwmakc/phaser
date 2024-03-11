import { Scene, Display } from 'phaser';

/*
|      платформа |       CGA |       VGA |        ZX |       NES |      SEGA |  APPLE II |    PICO-8 | 
|            4:3 | 640 x 480 | 640 x 480 | 640 x 480 | 640 x 480 | 640 x 480 | 640 x 480 | 640 x 480 |
|  оригинал на 8 | 320 х 200 | 320 х 240 | 256 х 192 | 256 х 224 | 320 х 224 | 280 х 192 | 128 х 128 |
| размер спрайта |        16 |        16 |        16 |        16 |        16 |        16 |        24 |
|  блоки бордюра |   0 x 2.5 |   0 x   0 |   4 x   3 |   4 x   1 |   0 x   1 | 2.5 x   3 |  5.33 x 2 |
|   блоки экрана |  40 x  25 |  40 x  30 |  32 x  24 |  32 x  28 |  40 x  28 |  35 х  24 |  16 х  16 |
*/

export class TestRx86Pal extends Scene {
  constructor () {
    super('TestRx86Pal')
  }

  preload () {
  }

  create () {
    const palettes = [
      {
        h: [ 0, 20, 45, 60, 78, 130, 156, 182, 208, 234, 260, 286, 312, 338 ],
        s: [ 100, 80, 60, 40 ],
        l: [ 80, 60, 40, 20 ],
      },
    ];
    
    const w = 24;
    const h = 7.5;
    
    palettes?.forEach((pal, i) => {
      let newRow = 0;
      pal?.h?.forEach((hi, n) => {
        pal?.s?.forEach((si, row) => {
          pal?.l?.forEach((li, col) => {
            const color = Display.Color.HSLToColor(hi / 360, si / 100, li / 100);
            const hex = Display.Color.RGBToString(color.r, color.g, color.b)?.substring(1);
            const x = row * w + w / 2 + i * 120;
            const y = col * h + h / 2 + newRow;
            console.log(n, x, y, hex);
            this.add.rectangle(x, y, w, h, `0x${hex}`);
          });
        });
        newRow = newRow + 4.5 * h;
      });
    });
  }

  update () {
  }
}
