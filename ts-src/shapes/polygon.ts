import Util = require('../util/index');
import Shape = require('../core/shape');

const Polygon0 = function(cfg) {
  Polygon.superclass.constructor.call(this, cfg);
};

Polygon0.ATTRS = {
  points: null,
  lineWidth: 1
};

const Polygon1 = Util.extend(Polygon0, Shape);

const Polygon2 = Util.augment(Polygon1, {
  canFill: true,
  canStroke: true,
  type: 'polygon' as 'polygon',
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
});

class Polygon extends Polygon2 {
  _attr: typeof Polygon.ATTRS;
}
export = Polygon;
