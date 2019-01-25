import Shape_ from './core/shape';
import Shapes from './shapes';

namespace Shape {
  type ShapeObj = typeof Shapes;

  type GetClassType<T> = T extends new (...args: any[]) => any ? T : never;
  type Union<T extends keyof ShapeObj> = T extends keyof ShapeObj ? ShapeObj[T] : never;
  type ShapesType = GetClassType<Union<keyof ShapeObj>>;
  type GetAttrs<T extends new (...args: any[]) => { type: string }> = T extends { ATTRS: any }
    ? { [x in InstanceType<T>['type']]: Partial<T['ATTRS']> & Common.Style }
    : { [x in InstanceType<T>['type']]: {} };
  type GetShapeMap<T extends new (...args: any[]) => { type: string }> = T extends {}
    ? { [x in InstanceType<T>['type']]: InstanceType<T> }
    : { [x in InstanceType<T>['type']]: never };
  type AttrsMap = GUtil.UnionToIntersection<GetAttrs<ShapesType>>;
  type ShapeMap = GUtil.UnionToIntersection<GetShapeMap<ShapesType>>;

  export type Base = import('./core/shape');
  export type ShapeType = GUtil.UnionPick<InstanceType<ShapesType>, 'type'>;
  export type Attrs<T extends ShapeType = ShapeType> = T extends ShapeType ? AttrsMap[T] : never;
  export type Shape<T extends ShapeType> = T extends ShapeType ? ShapeMap[T] : never;
}

type Shape = Shape_;

export default Shape;
