export = {
  Canvas: require('./canvas') as typeof import('./canvas'),
  Group: require('./core/group') as typeof import('./core/group'),
  Shape: require('./core/shape') as typeof import('./core/shape'),
  Arc: require('./shapes/arc') as typeof import('./shapes/arc'),
  Circle: require('./shapes/circle') as typeof import('./shapes/circle'),
  Dom: require('./shapes/dom') as typeof import('./shapes/dom'),
  Ellipse: require('./shapes/ellipse') as typeof import('./shapes/ellipse'),
  Fan: require('./shapes/fan') as typeof import('./shapes/fan'),
  Image: require('./shapes/image') as typeof import('./shapes/image'),
  Line: require('./shapes/line') as typeof import('./shapes/line'),
  Marker: require('./shapes/marker') as typeof import('./shapes/marker'),
  Path: require('./shapes/path') as typeof import('./shapes/path'),
  Polygon: require('./shapes/polygon') as typeof import('./shapes/polygon'),
  Polyline: require('./shapes/polyline') as typeof import('./shapes/polyline'),
  Rect: require('./shapes/rect') as typeof import('./shapes/rect'),
  Text: require('./shapes/text') as typeof import('./shapes/text'),
  PathSegment: require('./shapes/util/path-segment') as typeof import('./shapes/util/path-segment'),
  PathUtil: require('./util/path') as typeof import('./util/path'),
  Event: require('./event') as typeof import('./event'),
  EventEmitter: require('./core/event-emitter') as typeof import('./core/event-emitter'),
  // version, etc.
  version: '3.4.0-beta.3'
};
