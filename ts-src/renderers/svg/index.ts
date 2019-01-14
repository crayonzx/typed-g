import Painter from './painter';
export = {
  painter: require('./painter') as typeof Painter,
  getShape: require('./getShape') as typeof import('./getShape')
};
