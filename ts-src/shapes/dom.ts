import Util = require('../util/index');
import Shape = require('../core/shape');

class Dom extends Shape { constructor(cfg) {
  Dom.superclass.constructor.call(this, cfg);
};

// Util.extend(Dom, Shape);
static superclass = GUtil.extendSuperclass(Shape);

// Util.augment(Dom, {
  canFill: true,
  canStroke: true,
  type: 'dom',
  calculateBox() {
    const self = this;
    const attrs = self._attrs;
    const x = attrs.x;
    const y = attrs.y;
    const width = attrs.width;
    const height = attrs.height;
    const lineWidth = this.getHitLineWidth();

    const halfWidth = lineWidth / 2;
    return {
      minX: x - halfWidth,
      minY: y - halfWidth,
      maxX: x + width + halfWidth,
      maxY: y + height + halfWidth
    };
  }
};

export = Dom;
