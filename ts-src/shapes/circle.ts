import Util = require('../util/index');
import Shape = require('../core/shape');

class Circle extends Shape { constructor(cfg) {
  Circle.superclass.constructor.call(this, cfg);
};

static ATTRS = {
  x: 0,
  y: 0,
  r: 0,
  lineWidth: 1
};

_attrs: typeof Circle.ATTRS & Shape['_attrs'];

// Util.extend(Circle, Shape);
static superclass = GUtil.extendSuperclass(Shape);

// Util.augment(Circle, {
  canFill: true,
  canStroke: true,
  type: 'circle',
  getDefaultAttrs() {
    return {
      lineWidth: 1
    };
  },
  calculateBox() {
    const attrs = this._attrs;
    const cx = attrs.x;
    const cy = attrs.y;
    const r = attrs.r;
    const lineWidth = this.getHitLineWidth();
    const halfWidth = lineWidth / 2 + r;
    return {
      minX: cx - halfWidth,
      minY: cy - halfWidth,
      maxX: cx + halfWidth,
      maxY: cy + halfWidth
    };
  },
  createPath(context) {
    const attrs = this._attrs;
    const cx = attrs.x;
    const cy = attrs.y;
    const r = attrs.r;
    context.beginPath();
    context.arc(cx, cy, r, 0, Math.PI * 2, false);
    context.closePath();
  }
};

export = Circle;
