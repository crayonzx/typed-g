declare module '@antv/util/lib/type/is-function' {
  const isFunction: (value: any) => boolean;
  export = isFunction;
}
declare module '@antv/util/lib/type/is-object' {
  const isObject: (value: any) => boolean;
  export = isObject;
}
declare module '@antv/util/lib/type/is-boolean' {
  const isBoolean: (value: any) => boolean;
  export = isBoolean;
}
declare module '@antv/util/lib/type/is-nil' {
  const isNil: (value: any) => boolean;
  export = isNil;
}
declare module '@antv/util/lib/type/is-string' {
  const isString: (value: any) => boolean;
  export = isString;
}
declare module '@antv/util/lib/type/is-array' {
  const isArray: (value: any) => boolean;
  export = isArray;
}
declare module '@antv/util/lib/type/is-number' {
  const isNumber: (value: any) => boolean;
  export = isNumber;
}
declare module '@antv/util/lib/is-empty' {
  const isEmpty: (value: any) => boolean;
  export = isEmpty;
}
declare module '@antv/util/lib/unique-id' {
  const uniqueId: (prefix?: string) => string;
  export = uniqueId;
}
declare module '@antv/util/lib/clone' {
  const clone: <T>(obj: T) => T;
  export = clone;
}
declare module '@antv/util/lib/deep-mix' {
  namespace deepMix {
    export interface DeepMix {
      <T, U>(dist: T, src: U): T & U;
      <T, U1, U2>(dist: T, src1: U1, src2: U2): T & U1 & U2;
      <T, U1, U2, U3>(dist: T, src1: U1, src2: U2, src3: U3): T & U1 & U2 & U3;
    }
  }
  const deepMix: deepMix.DeepMix;
  export = deepMix;
}
declare module '@antv/util/lib/mix' {
  const mix: (dist: any, src1?: any, src2?: any, src3?: any) => any;
  export = mix;
}
// declare module '@antv/util/lib/deep-mix'{
//   const merge: <T, U>(dist: T, src: U, lever: number, max: number) => T & U;
//   export = merge;
// }
declare module '@antv/util/lib/string/upper-first' {
  const upperFirst: (value: string) => string;
  export = upperFirst;
}
declare module '@antv/util/lib/each' {
  const each: (elements: any, func: any) => void;
  export = each;
}
declare module '@antv/util/lib/is-equal' {
  const isEqual: (value: any, other: any) => boolean;
  export = isEqual;
}
declare module '@antv/util/lib/to-array' {
  const toArray: (value: any) => any[];
  export = toArray;
}
declare module '@antv/util/lib/extend' {
  const extend: (
    subclass: any,
    superclass: any,
    overrides: any,
    staticOverrides: any,
  ) => any;
  export = extend;
}
declare module '@antv/util/lib/augment' {
  const augment: (c: any, ...args: any[]) => void;
  export = augment;
}
declare module '@antv/util/lib/array/pull' {
  const pull: (arr: any, ...args: any[]) => any;
  export = pull;
}
declare module '@antv/util/lib/math/is-number-equal' {
  const isNumberEqual: (a: number, b: number) => boolean;
  export = isNumberEqual;
}
declare module '@antv/util/lib/math/to-radian' {
  const toRadian: (degree: number) => number;
  export = toRadian;
}
declare module '@antv/util/lib/math/to-degree' {
  const toDegree: (radian: number) => number;
  export = toDegree;
}
declare module '@antv/util/lib/math/mod' {
  const mod: (n: number, m: number) => number;
  export = mod;
}
declare module '@antv/util/lib/math/clamp' {
  const clamp: (a: number, min: number, max: number) => number;
  export = clamp;
}
declare module '@antv/util/lib/dom/create-dom' {
  const createDom: (domStr: any) => any;
  export = createDom;
}
declare module '@antv/util/lib/dom/modify-css' {
  const modifyCSS: (dom: any, css: any) => any;
  export = modifyCSS;
}
declare module '@antv/util/lib/dom/request-animation-frame' {
  const requestAnimationFrame: (fn: any) => any;
  export = requestAnimationFrame;
}
declare module '@antv/util/lib/matrix/mat3' {
  const mat3: any;
  export = mat3;
}
declare module '@antv/util/lib/matrix/vec2' {
  const vec2: any;
  export = vec2;
}
declare module '@antv/util/lib/matrix/vec3' {
  const vec3: any;
  export = vec3;
}
declare module '@antv/util/lib/matrix/transform' {
  const transform: (m: any, ts: any) => any;
  export = transform;
}
