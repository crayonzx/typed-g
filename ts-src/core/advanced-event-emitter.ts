
import Util = require('../util/index');
import Event = require('../event');
import EventEmitter = require('./event-emitter');

const PROPOGATE_EVENTS = [
  'click',
  'mousedown',
  'mouseup',
  'dblclick',
  'contextmenu',
  'mouseout',
  'mouseover',
  'mousemove',
  'dragstart',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'drop'
];

class AdvancedEE extends EventEmitter {

// Util.augment(AdvancedEE, EventEmitter, {
  emit(evt: string, e?: Event) {
    const args = arguments;
    EventEmitter.prototype.emit.apply(this, args);
    if (args.length >= 2 && args[1] instanceof Event && args[1].propagationStopped) {
      return;
    }
    if (PROPOGATE_EVENTS.indexOf(evt) >= 0 && e.target === this /* prevent bubbling multiple times */) {
      let shape = this._cfg.parent;
      while (shape && !shape.get('destroyed')) {
        shape.emit.apply(shape, args);
        shape = shape._cfg.parent;
      }
    }
  }
};

export = AdvancedEE;
