import Util = require('./util/index');
import Event = require('./core/mixin/event');
import Group = require('./core/group');
import Timeline = require('./core/mixin/timeline');
import renderers = require('./renderers/index');

const Canvas = function(cfg: Partial<typeof CFG>) {
  Canvas.superclass.constructor.call(this, cfg);
};

const CFG = {
  eventEnable: true,
  /**
   * 像素宽度
   * @type {Number}
   */
  width: null as any as number,
  /**
   * 像素高度
   * @type {Number}
   */
  height: null as any as number,
  /**
   * 画布宽度
   * @type {Number}
   */
  widthCanvas: null as any as number,
  /**
   * 画布高度
   * @type {Number}
   */
  heightCanvas: null as any as number,
  /**
   * CSS宽
   * @type {String}
   */
  widthStyle: null as any as string,
  /**
   * CSS高
   * @type {String}
   */
  heightStyle: null as any as string,
  /**
   * 容器DOM
   * @type {Object}
   */
  containerDOM: null as any as object,
  /**
   * 当前Canvas的DOM
   * @type {Object}
   */
  canvasDOM: null as any as object,
  /**
   * 屏幕像素比
   * @type {Number}
   */
  pixelRatio: null as any as number,
  /**
   * 渲染器，默认是canvas
   * @type {String}
   */
  renderer: 'canvas'
};
Canvas.CFG = CFG;

const Canvas1 = Util.extend(Canvas, Group);

const Canvas2 = Util.augment(Canvas1, Event, {
  init() {
    Canvas1.superclass.init.call(this);
    this._setGlobalParam();
    this._setContainer();
    this._initPainter();
    this._scale();
    if (this.get('eventEnable')) {
      this.registerEvent(this);
    }
  },
  _scale() {
    if (this._cfg.renderType !== 'svg') {
      const pixelRatio = this.get('pixelRatio');
      this.scale(pixelRatio, pixelRatio);
    }
  },
  _setGlobalParam() {
    const renderType = this.get('renderer') || 'canvas';
    if (renderType === 'svg') {
      this.set('pixelRatio', 1);
    } else if (!this.get('pixelRatio')) {
      this.set('pixelRatio', Util.getRatio());
    }
    this._cfg.renderType = renderType;
    const renderer = renderers[renderType];
    this._cfg.renderer = renderer;
    this._cfg.canvas = this;
    const timeline = new Timeline(this);
    this._cfg.timeline = timeline;
  },
  _setContainer() {
    const containerId = this.get('containerId');
    let containerDOM = this.get('containerDOM');
    if (!containerDOM) {
      containerDOM = document.getElementById(containerId);
      this.set('containerDOM', containerDOM);
    }
    Util.modifyCSS(containerDOM, {
      position: 'relative'
    });
  },
  _initPainter() {
    const containerDOM = this.get('containerDOM');
    const painter = new this._cfg.renderer.painter(containerDOM);
    this._cfg.painter = painter;
    this._cfg.canvasDOM = this._cfg.el = painter.canvas;
    this.changeSize(this.get('width'), this.get('height'));
  },
  _resize() {
    const canvasDOM = this.get('canvasDOM');
    const widthCanvas = this.get('widthCanvas');
    const heightCanvas = this.get('heightCanvas');
    const widthStyle = this.get('widthStyle');
    const heightStyle = this.get('heightStyle');

    canvasDOM.style.width = widthStyle;
    canvasDOM.style.height = heightStyle;
    canvasDOM.setAttribute('width', widthCanvas);
    canvasDOM.setAttribute('height', heightCanvas);
  },
  getWidth() {
    const pixelRatio = this.get('pixelRatio');
    const width = this.get('width');
    return width * pixelRatio;
  },
  getHeight() {
    const pixelRatio = this.get('pixelRatio');
    const height = this.get('height');
    return height * pixelRatio;
  },
  changeSize(width:number, height:number) {
    const pixelRatio = this.get('pixelRatio');
    const widthCanvas = width * pixelRatio;
    const heightCanvas = height * pixelRatio;

    this.set('widthCanvas', widthCanvas);
    this.set('heightCanvas', heightCanvas);
    this.set('widthStyle', width + 'px');
    this.set('heightStyle', height + 'px');
    this.set('width', width);
    this.set('height', height);
    this._resize();
  },
  /**
   * 将窗口坐标转变成 canvas 坐标
   * @param  {Number} clientX 窗口x坐标
   * @param  {Number} clientY 窗口y坐标
   * @return {Object} canvas坐标
   */
  getPointByClient(clientX:number, clientY:number) {
    const el = this.get('el');
    const pixelRatio = this.get('pixelRatio') || 1;
    const bbox = el.getBoundingClientRect();
    return {
      x: (clientX - bbox.left) * pixelRatio,
      y: (clientY - bbox.top) * pixelRatio
    };
  },
  getClientByPoint(x:number, y:number) {
    const el = this.get('el');
    const bbox = el.getBoundingClientRect();
    const pixelRatio = this.get('pixelRatio') || 1;
    return {
      clientX: x / pixelRatio + bbox.left,
      clientY: y / pixelRatio + bbox.top
    };
  },
  draw() {
    this._cfg.painter.draw(this);
  },
  getShape(x:number, y:number, e) {
    if (arguments.length === 3 && this._cfg.renderer.getShape) {
      return this._cfg.renderer.getShape.call(this, x, y, e);
    }
    return Canvas.superclass.getShape.call(this, x, y);
  },
  getRenderer() {
    return this._cfg.renderType;
  },
  _drawSync() {
    this._cfg.painter.drawSync(this);
  },
  destroy() {
    const cfg = this._cfg;
    const containerDOM = cfg.containerDOM;
    const canvasDOM = cfg.canvasDOM;
    if (canvasDOM && containerDOM) {
      containerDOM.removeChild(canvasDOM);
    }
    cfg.timeline.stop();
    Canvas1.superclass.destroy.call(this);
  }
});

export = Canvas2;
