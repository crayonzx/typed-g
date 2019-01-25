const G0: G = {
  Canvas: require('./canvas'),
  Group: require('./core/group'),
  Shape: require('./core/shape'),
  Arc: require('./shapes/arc'),
  Circle: require('./shapes/circle'),
  Dom: require('./shapes/dom'),
  Ellipse: require('./shapes/ellipse'),
  Fan: require('./shapes/fan'),
  Image: require('./shapes/image'),
  Line: require('./shapes/line'),
  Marker: require('./shapes/marker'),
  Path: require('./shapes/path'),
  Polygon: require('./shapes/polygon'),
  Polyline: require('./shapes/polyline'),
  Rect: require('./shapes/rect'),
  Text: require('./shapes/text'),
  PathSegment: require('./shapes/util/path-segment'),
  PathUtil: require('./util/path'),
  Event: require('./event'),
  EventEmitter: require('./core/event-emitter'),
  // version, etc.
  version: '3.4.0-beta.3'
};

import CommonNS from './common-ns';
import ShapesNS from './shapes-ns';

interface G {
  Canvas: typeof import('./canvas');
  Group: typeof import('./core/group');
  Shape: typeof import('./core/shape');
  Arc: typeof import('./shapes/arc');
  Circle: typeof import('./shapes/circle');
  Dom: typeof import('./shapes/dom');
  Ellipse: typeof import('./shapes/ellipse');
  Fan: typeof import('./shapes/fan');
  Image: typeof import('./shapes/image');
  Line: typeof import('./shapes/line');
  Marker: typeof import('./shapes/marker');
  Path: typeof import('./shapes/path');
  Polygon: typeof import('./shapes/polygon');
  Polyline: typeof import('./shapes/polyline');
  Rect: typeof import('./shapes/rect');
  Text: typeof import('./shapes/text');
  PathSegment: typeof import('./shapes/util/path-segment');
  PathUtil: typeof import('./util/path');
  Event: typeof import('./event');
  EventEmitter: typeof import('./core/event-emitter');
  version: string;
}

namespace G {
  export import Common = CommonNS;
  export import Shapes = ShapesNS;

  export namespace Shape {}
  export type Shape = import('./core/shape');

  export namespace Group {}
  export type Group = import('./core/group');
}

Object.assign(G, G0);
export = G;
