import Util = require('../util/index');
import Shape = require('../core/shape');

const Dom0 = function(cfg) {
  Dom.superclass.constructor.call(this, cfg);
};

const Dom1 = Util.extend(Dom0, Shape);

const Dom2 = Util.augment(Dom1, {
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
});

class Dom extends Dom2 {}
export = Dom;
