import Util = require('../util/index');
import Shape = require('../core/shape');

class Polygon extends Shape { constructor(cfg) {
  Polygon.superclass.constructor.call(this, cfg);
};

static ATTRS = {
  points: null as Array<[number, number]>,
  lineWidth: 1
};

_attrs: typeof Polygon.ATTRS & Shape['_attrs'];

// Util.extend(Polygon, Shape);
static superclass = GUtil.extendSuperclass(Shape);

// Util.augment(Polygon, {
  canFill: true,
  canStroke: true,
  type: 'polygon',
  getDefaultAttrs() {
    return {
      lineWidth: 1
    };
  },
  calculateBox() {
    const self = this;
    const attrs = self._attrs;
    const points = attrs.points;
    const lineWidth = this.getHitLineWidth();
    if (!points || points.length === 0) {
      return null;
    }
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    Util.each(points, function(point) {
      const x = point[0];
      const y = point[1];
      if (x < minX) {
        minX = x;
      }
      if (x > maxX) {
        maxX = x;
      }

      if (y < minY) {
        minY = y;
      }

      if (y > maxY) {
        maxY = y;
      }
    });

    const halfWidth = lineWidth / 2;
    return {
      minX: minX - halfWidth,
      minY: minY - halfWidth,
      maxX: maxX + halfWidth,
      maxY: maxY + halfWidth
    };
  },
  createPath(context) {
    const self = this;
    const attrs = self._attrs;
    const points = attrs.points;
    if (points.length < 2) {
      return;
    }
    context = context || self.get('context');
    context.beginPath();
    Util.each(points, function(point, index) {
      if (index === 0) {
        context.moveTo(point[0], point[1]);
      } else {
        context.lineTo(point[0], point[1]);
      }
    });
    context.closePath();
  }
};

export = Polygon;
