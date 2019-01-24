import Shapes_ from './shapes';

const G: {
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

  // Shapes: typeof Shapes_;
} = {
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
export = G;

namespace G {
  // export import Shapes = Shapes_;
  export namespace Shapes {
    export type Base = Shapes_.Base;
    export type ShapeType = Shapes_.ShapeType;
    export type Attrs<T extends ShapeType = ShapeType> = Shapes_.Attrs<T>;
    export type Shape<T extends ShapeType> = Shapes_.Shape<T>;
  }
}
