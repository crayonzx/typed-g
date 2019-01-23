export = {
  isFunction: require('@antv/util/lib/type/is-function') as typeof import('@antv/util/lib/type/is-function'),
  isObject: require('@antv/util/lib/type/is-object') as typeof import ('@antv/util/lib/type/is-object'),
  isBoolean: require('@antv/util/lib/type/is-boolean') as typeof import ('@antv/util/lib/type/is-boolean'),
  isNil: require('@antv/util/lib/type/is-nil') as typeof import ('@antv/util/lib/type/is-nil'),
  isString: require('@antv/util/lib/type/is-string') as typeof import ('@antv/util/lib/type/is-string'),
  isArray: require('@antv/util/lib/type/is-array') as typeof import ('@antv/util/lib/type/is-array'),
  isNumber: require('@antv/util/lib/type/is-number') as typeof import ('@antv/util/lib/type/is-number'),
  isEmpty: require('@antv/util/lib/is-empty') as typeof import ('@antv/util/lib/is-empty'),// isBlank
  uniqueId: require('@antv/util/lib/unique-id') as typeof import ('@antv/util/lib/unique-id'),
  clone: require('@antv/util/lib/clone') as typeof import ('@antv/util/lib/clone'),
  deepMix: require('@antv/util/lib/deep-mix') as typeof import ('@antv/util/lib/deep-mix'),
  assign: require('@antv/util/lib/mix') as typeof import ('@antv/util/lib/mix'),// simpleMix
  merge: require('@antv/util/lib/deep-mix') as typeof import ('@antv/util/lib/deep-mix'),// mix
  upperFirst: require('@antv/util/lib/string/upper-first') as typeof import ('@antv/util/lib/string/upper-first'),// ucfirst
  each: require('@antv/util/lib/each') as typeof import ('@antv/util/lib/each'),
  isEqual: require('@antv/util/lib/is-equal') as typeof import ('@antv/util/lib/is-equal'),
  toArray: require('@antv/util/lib/to-array') as typeof import ('@antv/util/lib/to-array'),
  extend: require('@antv/util/lib/extend') as typeof import ('@antv/util/lib/extend'),
  augment: require('@antv/util/lib/augment') as typeof import ('@antv/util/lib/augment'),
  remove: require('@antv/util/lib/array/pull') as typeof import ('@antv/util/lib/array/pull'),
  isNumberEqual: require('@antv/util/lib/math/is-number-equal') as typeof import ('@antv/util/lib/math/is-number-equal'),
  toRadian: require('@antv/util/lib/math/to-radian') as typeof import ('@antv/util/lib/math/to-radian'),
  toDegree: require('@antv/util/lib/math/to-degree') as typeof import ('@antv/util/lib/math/to-degree'),
  mod: require('@antv/util/lib/math/mod') as typeof import ('@antv/util/lib/math/mod'),
  clamp: require('@antv/util/lib/math/clamp') as typeof import ('@antv/util/lib/math/clamp'),
  createDom: require('@antv/util/lib/dom/create-dom') as typeof import ('@antv/util/lib/dom/create-dom'),
  modifyCSS: require('@antv/util/lib/dom/modify-css') as typeof import ('@antv/util/lib/dom/modify-css'),
  requestAnimationFrame: require('@antv/util/lib/dom/request-animation-frame') as typeof import ('@antv/util/lib/dom/request-animation-frame'),
  getRatio: function getRatio() {
    return window.devicePixelRatio ? window.devicePixelRatio : 2;
  },
  mat3: require('@antv/util/lib/matrix/mat3') as typeof import ('@antv/util/lib/matrix/mat3'),
  vec2: require('@antv/util/lib/matrix/vec2') as typeof import ('@antv/util/lib/matrix/vec2'),
  vec3: require('@antv/util/lib/matrix/vec3') as typeof import ('@antv/util/lib/matrix/vec3'),
  transform: require('@antv/util/lib/matrix/transform') as typeof import ('@antv/util/lib/matrix/transform')
};
