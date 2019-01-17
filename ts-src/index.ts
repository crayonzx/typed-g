namespace G {
  export interface Style {
    /**  设置用于填充绘画的颜色、渐变或模式 */
    fill: string;
    fillOpacity: number;
    /**  设置用于笔触的颜色、渐变或模式 */
    stroke: string;
    /**  设置用于阴影的颜色 */
    shadowColor: string;
    /**  设置用于阴影的模糊级别 */
    shadowBlur: number;
    /**  设置阴影距形状的水平距离 */
    shadowOffsetX: number;
    /**  设置阴影距形状的垂直距离 */
    shadowOffsetY: number;
    /**  设置绘图的当前 alpha 或透明值 */
    opacity: number;
    /**  设置新图像如何绘制到已有的图像上 */
    globalCompositeOperation: string;

    lineAppendWidth: number;

    /** 线型 */
    lineDash: number | number[];
  }

  export interface BBox {
    centerX?: number;
    centerY?: number;
    height: number;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    width: number;
  }
}

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
