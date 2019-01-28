/**
 * To augment Shape, augment ShapeEx.
 *
 * TODO: It doesn't work to augment ShapeEx somewhere else for now by:
```
  declare module '@antv/g/lib/core/shape-ex' {
    interface ShapeEx {
      eventPreFix: string;
    }
  }
```
 */
import Common from '../common';
interface ShapeEx {
  eventPreFix?: string;
  id?: Common.ID;
}
export default ShapeEx;
