import CommonNS from './common-ns';
import ShapesNS from './shapes-ns';
namespace G {
  export const Canvas: typeof import('./canvas') = require('./canvas');
  export const Group: typeof import('./core/group') = require('./core/group');
  export const Shape: typeof import('./core/shape') = require('./core/shape');
  export const Arc: typeof import('./shapes/arc') = require('./shapes/arc');
  export const Circle: typeof import('./shapes/circle') = require('./shapes/circle');
  export const Dom: typeof import('./shapes/dom') = require('./shapes/dom');
  export const Ellipse: typeof import('./shapes/ellipse') = require('./shapes/ellipse');
  export const Fan: typeof import('./shapes/fan') = require('./shapes/fan');
  export const Image: typeof import('./shapes/image') = require('./shapes/image');
  export const Line: typeof import('./shapes/line') = require('./shapes/line');
  export const Marker: typeof import('./shapes/marker') = require('./shapes/marker');
  export const Path: typeof import('./shapes/path') = require('./shapes/path');
  export const Polygon: typeof import('./shapes/polygon') = require('./shapes/polygon');
  export const Polyline: typeof import('./shapes/polyline') = require('./shapes/polyline');
  export const Rect: typeof import('./shapes/rect') = require('./shapes/rect');
  export const Text: typeof import('./shapes/text') = require('./shapes/text');
  export const PathSegment: typeof import('./shapes/util/path-segment') = require('./shapes/util/path-segment');
  export const PathUtil: typeof import('./util/path') = require('./util/path');
  export const Event: typeof import('./event') = require('./event');
  export const EventEmitter: typeof import('./core/event-emitter') = require('./core/event-emitter');
  // version, etc.
  export const version = '3.4.0-beta.3';

  export import Common = CommonNS;
  export import Shapes = ShapesNS;

  namespace Shape {}
  export type Shape = import('./core/shape');

  namespace Group {}
  export type Group = import('./core/group');
}
export = G;
