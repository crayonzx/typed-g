import Common from '../common';

import Util = require('../util/index');
import Shape = require('../core/shape');
import Format = require('../util/format');
import PathSegment = require('./util/path-segment');

class Marker extends Shape { constructor(cfg) {
  Marker.superclass.constructor.call(this, cfg);
};

static Symbols = {
  // 圆
  circle: function (x, y, r) {
    return [
      [ 'M', x, y ],
      [ 'm', -r, 0 ],
      [ 'a', r, r, 0, 1, 0, r * 2, 0 ],
      [ 'a', r, r, 0, 1, 0, -r * 2, 0 ]
    ];
  } as Marker.SymbolPathFunc,
  // 正方形
  square: function (x, y, r) {
    return [
      [ 'M', x - r, y - r ],
      [ 'L', x + r, y - r ],
      [ 'L', x + r, y + r ],
      [ 'L', x - r, y + r ],
      [ 'Z' ]
    ];
  } as Marker.SymbolPathFunc,
  // 菱形
  diamond: function (x, y, r) {
    return [
      [ 'M', x - r, y ],
      [ 'L', x, y - r ],
      [ 'L', x + r, y ],
      [ 'L', x, y + r ],
      [ 'Z' ]
    ];
  } as Marker.SymbolPathFunc,
  // 三角形
  triangle: function (x, y, r) {
    const diffY = r * Math.sin((1 / 3) * Math.PI);
    return [
      [ 'M', x - r, y + diffY ],
      [ 'L', x, y - diffY ],
      [ 'L', x + r, y + diffY ],
      [ 'z' ]
    ];
  } as Marker.SymbolPathFunc,
  // 倒三角形
  'triangle-down': function(x, y, r) {
    const diffY = r * Math.sin((1 / 3) * Math.PI);
    return [
      [ 'M', x - r, y - diffY ],
      [ 'L', x + r, y - diffY ],
      [ 'L', x, y + diffY ],
      [ 'Z' ]
    ];
  } as Marker.SymbolPathFunc
};

static ATTRS = {
  path: null,
  lineWidth: 1,
  x: 0,
  y: 0,
  r: 1,
  radius: 1,
  symbol: '' as Marker.SymbolsAttr,
};

_attrs: typeof Marker.ATTRS & Shape['_attrs'];

// Util.extend(Marker, Shape);
static superclass = GUtil.extendSuperclass(Shape);

// Util.augment(Marker, {
  type: 'marker',
  canFill: true,
  canStroke: true,
  getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 1
    };
  },
  calculateBox() {
    const attrs = this._attrs;
    const cx = attrs.x;
    const cy = attrs.y;
    const r = attrs.radius;
    const lineWidth = this.getHitLineWidth();
    const halfWidth = lineWidth / 2 + r;
    return {
      minX: cx - halfWidth,
      minY: cy - halfWidth,
      maxX: cx + halfWidth,
      maxY: cy + halfWidth
    };
  },
  _getPath(): Common.SVGPath {
    const attrs = this._attrs;
    const x = attrs.x;
    const y = attrs.y;
    const r = attrs.radius || attrs.r;
    const symbol = attrs.symbol || 'circle';
    let method;
    if (Util.isFunction(symbol)) {
      method = symbol;
    } else {
      method = Marker.Symbols[symbol];
    }

    if (!method) {
      console.warn(`${symbol} marker is not supported.`);
      return null;
    }

    return method(x, y, r);
  },
  createPath(context) {
    let segments = this._cfg.segments;
    if (segments && !this._cfg.hasUpdate) {
      context.beginPath();
      for (let i = 0; i < segments.length; i++) {
        segments[i].draw(context);
      }
      return;
    }

    const path = Format.parsePath(this._getPath());
    context.beginPath();
    let preSegment;
    segments = [];
    for (let i = 0; i < path.length; i++) {
      const item = path[i];
      preSegment = new PathSegment(item, preSegment, i === path.length - 1);
      segments.push(preSegment);
      preSegment.draw(context);
    }
    this._cfg.segments = segments;
    this._cfg.hasUpdate = false;
  }
};

export = Marker;

namespace Marker {
  export type Symbols = keyof typeof Marker.Symbols;
  export type SymbolPathFunc = (x: number, y: number, r: number) => Common.SVGPath;
  export type SymbolsAttr = Symbols | SymbolPathFunc;
}
