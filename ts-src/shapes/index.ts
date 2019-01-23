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

import '../../types/global';
import Common from '../common';
namespace Shape1 {
  type ShapeObj = typeof Shape1;

  type GetClassType<T> = T extends new (...args: any[]) => any ? T : never;
  type Union<T extends keyof ShapeObj> = T extends keyof ShapeObj ? ShapeObj[T] : never;
  type ShapesType = GetClassType<Union<keyof ShapeObj>>;
  type GetAttrs<T extends new (...args: any[]) => { type: string }> = T extends { ATTRS: any }
    ? { [x in InstanceType<T>['type']]: T['ATTRS'] & Common.Style }
    : { [x in InstanceType<T>['type']]: {} };
  type GetShapeMap<T extends new (...args: any[]) => { type: string }> = T extends {}
    ? { [x in InstanceType<T>['type']]: InstanceType<T> }
    : { [x in InstanceType<T>['type']]: never };

  export type ShapeType = UnionPick<InstanceType<ShapesType>, 'type'>;
  type AttrsMap = UnionToIntersection<GetAttrs<ShapesType>>;
  export type Attrs<T extends ShapeType = ShapeType> = T extends ShapeType ? AttrsMap[T] : never;
  type ShapeMap = UnionToIntersection<GetShapeMap<ShapesType>>;
  export type Shape<T extends ShapeType = ShapeType> = T extends ShapeType ? ShapeMap[T] : never;
}
