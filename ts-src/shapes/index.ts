const Shape = require('../core/shape');
Shape.Arc = require('./arc');
Shape.Circle = require('./circle');
Shape.Dom = require('./dom');
Shape.Ellipse = require('./ellipse');
Shape.Fan = require('./fan');
Shape.Image = require('./image');
Shape.Line = require('./line');
Shape.Marker = require('./marker');
Shape.Path = require('./path');
Shape.Polygon = require('./polygon');
Shape.Polyline = require('./polyline');
Shape.Rect = require('./rect');
Shape.Text = require('./text');

const Shape1: typeof import('../core/shape') & {
  Arc: typeof import('./arc');
  Circle: typeof import('./circle');
  Dom: typeof import('./dom');
  Ellipse: typeof import('./ellipse');
  Fan: typeof import('./fan');
  Image: typeof import('./image');
  Line: typeof import('./line');
  Marker: typeof import('./marker');
  Path: typeof import('./path');
  Polygon: typeof import('./polygon');
  Polyline: typeof import('./polyline');
  Rect: typeof import('./rect');
  Text: typeof import('./text');
} = Shape;

export = Shape1;
