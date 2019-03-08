import Shapes from './shapes';
import ShapeBase from './core/shape';

/**
 * Get union of property types of Shapes
 * @returns - ShapeBase | typeof Element | {} | typeof Arc | typeof Circle | ...
 */
type PropertiesOf<T = typeof Shapes, K extends keyof T = keyof T> = K extends keyof T ? T[K] : never;

/**
 * Filter shape sub-classes from properties of Shapes
 * @returns - typeof Arc | typeof Circle | typeof Dom | typeof Ellipse | ...
 */
type ShapeSublasses<T = PropertiesOf> = T extends { superclass: any }
  ? (T['superclass'] extends typeof ShapeBase ? T : never)
  : never;

/**
 * Get union of type-shape map
 * @returns - { arc: Arc } | { circle: Circle } | { dom: Dom } | ...
 */
type GetShapeMap<T = InstanceType<ShapeSublasses>> = T extends { type: any }
  ? { [x in T['type']]: T }
  : never;

namespace Shape {
  export type Base = import('./core/shape');
  export type ShapeMap = GUtil.UnionToIntersection<GetShapeMap>;
  export type ShapeType = keyof ShapeMap;
  export type Attrs<T extends ShapeType = ShapeType> = T extends ShapeType
    ? ShapeMap[T]['_attrs']
    : never;
  export type Shape<T extends ShapeType = ShapeType> = T extends ShapeType ? ShapeMap[T] : never;
}

type Shape = Shape.Base;

export default Shape;
