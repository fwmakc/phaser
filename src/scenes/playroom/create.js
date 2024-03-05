import { mainEvents } from './events/mainEvents';
import { bgCreate } from './layers/bg/bgCreate';
import { levelCreate } from './layers/level/levelCreate';
import { levelGet } from './layers/level/levelGet';
import { bombsCreate } from './objects/bombs/bombsCreate';
import { platformsCreate } from './objects/platforms/platformsCreate';
import { scoreCreate } from './objects/score/scoreCreate';
import { starsCreate } from './objects/stars/starsCreate';
import { playerAnimate } from './objects/player/playerAnimate';
import { playerControlCreate } from './objects/player/playerControlCreate';
import { playerCreate } from './objects/player/playerCreate';

export function create (scene) {
  // level get
  levelGet(scene);

  // background
  bgCreate(scene);

  // objects
  platformsCreate(scene);
  starsCreate(scene);
  bombsCreate(scene);
  
  // player
  playerCreate(scene);
  playerControlCreate(scene);
  playerAnimate(scene);
  
  // level create
  levelCreate(scene);

  // ui
  scoreCreate(scene);

  // events
  mainEvents(scene);
}
