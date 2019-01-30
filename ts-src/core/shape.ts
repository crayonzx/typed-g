import Util = require('../util/index');
import isPointInPath = require('./mixin/isPointInPath');
import Element = require('./element');
import Inside = require('../shapes/util/inside');

const Shape0 = function(cfg) {
  Shape1.superclass.constructor.call(this, cfg);
};

Shape0.ATTRS = {};

const Shape1 = Util.extend(Shape0, Element);

const ARRAY_ATTRS = {
  matrix: 'matrix',
  path: 'path',
  points: 'points',
  lineDash: 'lineDash'
};

function _cloneArrayAttr(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Util.isArray(arr[i])) {
      result.push([].concat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const Shape2 = Util.augment(Shape1, isPointInPath, {
  isShape: true,
  drawInner(context) {
    const self = this;
    const attrs = self._attrs;
    self.createPath(context);
    const originOpacity = context.globalAlpha;
    if (self.hasFill()) {
      const fillOpacity = attrs.fillOpacity;
      if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        context.fill();
        context.globalAlpha = originOpacity;
      } else {
        context.fill();
      }
    }
    if (self.hasStroke()) {
      const lineWidth = self._attrs.lineWidth;
      if (lineWidth > 0) {
        const strokeOpacity = attrs.strokeOpacity;
        if (!Util.isNil(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = strokeOpacity;
        }
        context.stroke();
      }
    }
    self.afterPath(context);
  },
  afterPath(...args: any[]): any {},
  /**
   * 击中图形时是否进行包围盒判断
   * @return {Boolean} [description]
   */
  isHitBox(this: Shape) {
    return true;
  },
  /**
   * 节点是否能够被击中
   * @param {Number} x x坐标
   * @param {Number} y y坐标
   * @return {Boolean} 是否在图形中
   */
  isHit(x:number, y:number):boolean {
    const self = this;
    const v = [ x, y, 1 ];
    self.invert(v); // canvas

    if (self.isHitBox()) {
      const box = self.getBBox();
      if (box && !Inside.box(box.minX, box.maxX, box.minY, box.maxY, v[0], v[1])) {
        return false;
      }
    }
    const clip = self._attrs.clip;
    if (clip) {
      clip.invert(v, self.get('canvas'));
      if (clip.isPointInPath(v[0], v[1])) {
        return self.isPointInPath(v[0], v[1]);
      }
    } else {
      return self.isPointInPath(v[0], v[1]);
    }
    return false;
  },
  /**
   * @protected
   * 计算包围盒
   * @return {Object} 包围盒
   */
  calculateBox(this: Shape) {
    return null as any;
  },
  // 获取拾取时线的宽度，需要考虑附加的线的宽度
  getHitLineWidth(): number {
    const attrs = this._attrs;
    // if (!attrs.stroke) {
    //   return 0;
    // }
    const lineAppendWidth = attrs.lineAppendWidth || 0;
    const lineWidth = attrs.lineWidth || 0;
    return lineWidth + lineAppendWidth;
  },
  // 清除当前的矩阵
  clearTotalMatrix(this: Shape) {
    this._cfg.totalMatrix = null;
    this._cfg.region = null;
  },
  clearBBox(this: Shape) {
    this._cfg.box = null;
    this._cfg.region = null;
  },
  getBBox(this: Shape) {
    let box = this._cfg.box;
    // 延迟计算
    if (!box) {
      box = this.calculateBox();
      if (box) {
        box.x = box.minX;
        box.y = box.minY;
        box.width = box.maxX - box.minX;
        box.height = box.maxY - box.minY;
      }
      this._cfg.box = box;
    }
    return box;
  },
  clone(this: Shape) {
    const self = this;
    let clone = null;
    const _attrs = self._attrs;
    const attrs = {};
    Util.each(_attrs, (i, k) => {
      if (ARRAY_ATTRS[k] && Util.isArray(_attrs[k])) {
        attrs[k] = _cloneArrayAttr(_attrs[k]);
      } else {
        attrs[k] = _attrs[k];
      }
    });
    clone = new self.constructor({ attrs });
    // zIndex也是绘图属性，但是在cfg中，特殊处理
    clone._cfg.zIndex = self._cfg.zIndex;
    return clone;
  }
});

class Shape extends Shape2 {}
export = Shape;

import Common from '../common';
import ShapeEx from './shape-ex';
interface Shape extends ShapeEx {
  _cfg: Element['_cfg'] & {
    box: Common.BBox;
  };
}
