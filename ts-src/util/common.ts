/// <reference types='@antv/util' />
export = CommonUtil;
declare const CommonUtil: {
  isFunction: typeof import('@antv/util/lib/type/is-function'),
  isObject: typeof import ('@antv/util/lib/type/is-object'),
  isBoolean: typeof import ('@antv/util/lib/type/is-boolean'),
  isNil: typeof import ('@antv/util/lib/type/is-nil'),
  isString: typeof import ('@antv/util/lib/type/is-string'),
  isArray: typeof import ('@antv/util/lib/type/is-array'),
  isNumber: typeof import ('@antv/util/lib/type/is-number'),
  isEmpty: typeof import ('@antv/util/lib/is-empty'), // isBlank
  uniqueId: typeof import ('@antv/util/lib/unique-id'),
  clone: typeof import ('@antv/util/lib/clone'),
  deepMix: typeof import ('@antv/util/lib/deep-mix'),
  assign: typeof import ('@antv/util/lib/mix'), // simpleMix
  merge: typeof import ('@antv/util/lib/deep-mix'), // mix
  upperFirst: typeof import ('@antv/util/lib/string/upper-first'), // ucfirst
  each: typeof import ('@antv/util/lib/each'),
  isEqual: typeof import ('@antv/util/lib/is-equal'),
  toArray: typeof import ('@antv/util/lib/to-array'),
  extend: typeof import ('@antv/util/lib/extend'),
  augment: typeof import ('@antv/util/lib/augment'),
  remove: typeof import ('@antv/util/lib/array/pull'),
  isNumberEqual: typeof import ('@antv/util/lib/math/is-number-equal'),
  toRadian: typeof import ('@antv/util/lib/math/to-radian'),
  toDegree: typeof import ('@antv/util/lib/math/to-degree'),
  mod: typeof import ('@antv/util/lib/math/mod'),
  clamp: typeof import ('@antv/util/lib/math/clamp'),
  createDom: typeof import ('@antv/util/lib/dom/create-dom'),
  modifyCSS: typeof import ('@antv/util/lib/dom/modify-css'),
  requestAnimationFrame: typeof import ('@antv/util/lib/dom/request-animation-frame'),
  getRatio: () => number, // function getRatio() {
  // return window.devicePixelRatio ? window.devicePixelRatio : 2;
  // },
  mat3: typeof import('@antv/util/lib/matrix/mat3'),
  vec2: typeof import('@antv/util/lib/matrix/vec2'),
  vec3: typeof import('@antv/util/lib/matrix/vec3'),
  transform: typeof import('@antv/util/lib/matrix/transform')
};
