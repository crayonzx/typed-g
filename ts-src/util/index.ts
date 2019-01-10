import CommonUtil = require('./common');
const Util = {};

export = CommonUtil.merge(Util, CommonUtil, {
  mixin(c, mixins) {
    const Param = c.CFG ? 'CFG' : 'ATTRS';
    if (c && mixins) {
      c._mixins = mixins;
      c[Param] = c[Param] || {};
      const temp = {};
      Util.each(mixins, function(mixin) {
        Util.augment(c, mixin);
        const attrs = mixin[Param];
        if (attrs) {
          Util.merge(temp, attrs);
        }
      });
      c[Param] = Util.merge(temp, c[Param]);
    }
  }
});

// export = Util;
