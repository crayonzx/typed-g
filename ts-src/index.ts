declare namespace G {
  const Canvas: typeof import('./canvas'),
  const Group: typeof import('./core/group'),
  const Shape: typeof import('./core/shape'),
  const Arc: typeof import('./shapes/arc'),
  const Circle: typeof import('./shapes/circle'),
  const Dom: typeof import('./shapes/dom'),
  const Ellipse: typeof import('./shapes/ellipse'),
  const Fan: typeof import('./shapes/fan'),
  const Image: typeof import('./shapes/image'),
  const Line: typeof import('./shapes/line'),
  const Marker: typeof import('./shapes/marker'),
  const Path: typeof import('./shapes/path'),
  const Polygon: typeof import('./shapes/polygon'),
  const Polyline: typeof import('./shapes/polyline'),
  const Rect: typeof import('./shapes/rect'),
  const Text: typeof import('./shapes/text'),
  const PathSegment: typeof import('./shapes/util/path-segment'),
  const PathUtil: typeof import('./util/path'),
  const Event: typeof import('./event'),
  const EventEmitter: typeof import('./core/event-emitter'),
  // version, etc.
  const version: '3.4.3'
};

import Common_ from './common';
import Shape_ from './shape';

declare namespace G {
  export import Common = Common_;
  export import Shapes = Shape_;

  export type Canvas = import('./canvas');
  export type Shape = import('./core/shape');
  export type Group = import('./core/group');
}

export = G;
