const TAG_MAP = {
  svg: 'svg',
  circle: 'circle',
  rect: 'rect',
  text: 'text',
  path: 'path',
  foreignObject: 'foreignObject',
  polygon: 'polygon',
  ellipse: 'ellipse',
  image: 'image'
};

export = function getShape(x: number, y: number, e: Event) {
  let target = e.target || e.srcElement;
  if (!TAG_MAP[target.tagName]) {
    let parent = target.parentNode;
    while (parent && !TAG_MAP[parent.tagName]) {
      parent = parent.parentNode;
    }
    target = parent;
  }
  if (this._cfg.el === target) {
    return this;
  }
  return this.find(item => {
    return item._cfg && item._cfg.el === target;
  });
};
