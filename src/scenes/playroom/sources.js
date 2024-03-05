export const images = {
  sky: 'sky.png',
  ground: 'brick.png',
  star: 'star.png',
  bomb: 'bomb.png',
};

export const spritesheets = {
  dude: {
    image: 'dude.png',
    options: {
      frameWidth: 32,
      frameHeight: 48,
    },
  },
};

export const objects = {
  a: {
    name: 'star',
    object: 'stars',
  },
  b: {
    name: 'ground',
    object: 'platforms',
  },
  c: {
    name: 'bomb',
    object: 'bombs',
  },
  d: {
    name: 'dude',
    object: 'player',
    sprite: true,
  },
};