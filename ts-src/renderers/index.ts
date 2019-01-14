const Renderers: {
  canvas: typeof import('./canvas');
  svg: typeof import('./svg');
} = {
  canvas: require('./canvas'),
  svg: require('./svg')
};

export = Renderers;
