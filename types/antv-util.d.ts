declare module '@antv/util/lib/type/is-function' {
  const isFunction: any;
  export = isFunction
}
declare module '@antv/util/lib/type/is-object'{
  const isObject: any;
  export = isObject;
}
declare module '@antv/util/lib/type/is-boolean'{
  const isBoolean: any;
  export = isBoolean;
}
declare module '@antv/util/lib/type/is-nil'{
  const isNil: any;
  export = isNil;
}
declare module '@antv/util/lib/type/is-string'{
  const isString: any;
  export = isString;
}
declare module '@antv/util/lib/type/is-array'{
  const isArray: any;
  export = isArray;
}
declare module '@antv/util/lib/type/is-number'{
  const isNumber: any;
  export = isNumber;
}
declare module '@antv/util/lib/is-empty'{
  const isEmpty: any;
  export = isEmpty;
}
declare module '@antv/util/lib/unique-id'{
  const uniqueId: any;
  export = uniqueId;
}
declare module '@antv/util/lib/clone'{
  const clone: any;
  export = clone;
}
declare module '@antv/util/lib/deep-mix'{
  const deepMix: <T, U>(dist: T , src: U, level: number, max: number) => T & U;
  export = deepMix;
}
declare module '@antv/util/lib/mix'{
  const mix: any;
  export = mix;
}
// declare module '@antv/util/lib/deep-mix'{
//   const merge: <T, U>(dist: T, src: U, lever: number, max: number) => T & U;
//   export = merge;
// }
declare module '@antv/util/lib/string/upper-first'{
  const upperFirst: any;
  export = upperFirst;
}
declare module '@antv/util/lib/each'{
  const each: any;
  export = each;
}
declare module '@antv/util/lib/is-equal'{
  const isEqual: any;
  export = isEqual;
}
declare module '@antv/util/lib/to-array'{
  const toArray: any;
  export = toArray;
}
declare module '@antv/util/lib/extend'{
  const extend: any;
  export = extend;
}
declare module '@antv/util/lib/augment'{
  const augment: any;
  export = augment;
}
declare module '@antv/util/lib/array/pull'{
  const pull: any;
  export = pull;
}
declare module '@antv/util/lib/math/is-number-equal'{
  const isNumberEqual: (a: number, b: number) => boolean;
  export = isNumberEqual;
}
declare module '@antv/util/lib/math/to-radian'{
  const toRadian: (degree: number) => number;
  export = toRadian;
}
declare module '@antv/util/lib/math/to-degree'{
  const toDegree: (radian: number) => number;
  export = toDegree;
}
declare module '@antv/util/lib/math/mod'{
  const mod: (n: number, m: number) => number;
  export = mod;
}
declare module '@antv/util/lib/math/clamp'{
  const clamp: (a: number, min: number, max: number) => number;
  export = clamp;
}
declare module '@antv/util/lib/dom/create-dom'{
  const createDom: (domStr: any) => any;
  export = createDom;
}
declare module '@antv/util/lib/dom/modify-css'{
  const modifyCSS: (dom: any, css: any) => any;
  export = modifyCSS;
}
declare module '@antv/util/lib/dom/request-animation-frame'{
  const requestAnimationFrame: (fn: any) => any;
  export = requestAnimationFrame;
}
declare module '@antv/util/lib/matrix/mat3'{
  const mat3: any;
  export = mat3;
}
declare module '@antv/util/lib/matrix/vec2'{
  const vec2: any;
  export = vec2;
}
declare module '@antv/util/lib/matrix/vec3'{
  const vec3: any;
  export = vec3;
}
declare module '@antv/util/lib/matrix/transform'{
  const transform: (m: any, ts: any) => any;
  export = transform;
}
