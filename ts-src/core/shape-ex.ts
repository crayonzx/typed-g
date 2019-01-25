/**
 * To augment Shape, augment ShapeEx.
 *
 * TODO: It doesn't work to augment ShapeEx for now by:
```
  declare module '@antv/g/lib/core/shape-ex' {
    interface ShapeEx {
      eventPreFix: string;
    }
  }
```
 */
interface ShapeEx {
  eventPreFix: string;
}
export default ShapeEx;
