/// <reference types='@antv/util' />

import Shapes from './shapes';

type Shapes = typeof Shapes;

/**
 * Arc | Circle | CText | Dom | Ellipse | Fan | CImage | Line | Marker | ...
 */
type ShapeTypes<K = keyof Shapes> =
  K extends Exclude<keyof Shapes, 'superclass' | 'prototype'>
  ? (Shapes[K] extends new (...args: any) => infer R ? R : never)
  : never;

declare const ShapeTypes: ShapeTypes;

/**
 * { arc: Arc } & { circle: Circle } & { dom: Dom } & ...
 */
type ShapeTypesMap<T = ShapeTypes> =
  GUtil.UnionToIntersection<T extends { type: any } ? { [x in T['type']]: T } : never>;

declare const ShapeTypesMap: ShapeTypesMap;

namespace Shape {
  export type Base = import('./core/shape');
  export type ShapeMap = ShapeTypesMap;
  export type ShapeType = keyof ShapeMap;
  export type Attrs<T extends ShapeType | 'base' = ShapeType> =
    T extends ShapeType ? ShapeMap[T]['_attrs'] : Base['_attrs'];
  export type Shape<T extends ShapeType | 'base' = ShapeType> =
    T extends ShapeType ? ShapeMap[T] : Base;
}

type Shape = Shape.Base;

export default Shape;
