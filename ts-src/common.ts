namespace Common {
  export interface Style {
    /**  设置用于填充绘画的颜色、渐变或模式 */
    fill?: string;
    fillOpacity?: number;
    /**  设置用于笔触的颜色、渐变或模式 */
    stroke?: string;
    /**  设置用于阴影的颜色 */
    shadowColor?: string;
    /**  设置用于阴影的模糊级别 */
    shadowBlur?: number;
    /**  设置阴影距形状的水平距离 */
    shadowOffsetX?: number;
    /**  设置阴影距形状的垂直距离 */
    shadowOffsetY?: number;
    /**  设置绘图的当前 alpha 或透明值 */
    opacity?: number;
    /**  设置新图像如何绘制到已有的图像上 */
    globalCompositeOperation?: string;

    lineAppendWidth?: number;

    /** 线型 */
    lineDash?: number | number[];
  }

  /** https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths */
  namespace SVGPath {
    /** moveto */
    export type M = ['M' | 'm', number, number];
    /** lineto */
    export type L = ['L' | 'l', number, number];
    /** horizontal lineto */
    export type H = ['H' | 'h'];
    /** vertical lineto */
    export type V = ['V' | 'v'];
    /** curveto */
    export type C = ['C' | 'c'];
    /** smooth curveto */
    export type S = ['S' | 's'];
    /** quadratic Belzier curve */
    export type Q = ['Q' | 'q', number, number, number, number];
    /** smooth quadratic Belzier curveto */
    export type T = ['T' | 't', number, number, number, number];
    /** elliptical Arc */
    export type A = [
      'A' | 'a',
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ];
    /** closepath */
    export type Z = ['Z' | 'z'];
  }

  export type SVGPath = Array<
    | SVGPath.M
    | SVGPath.L
    | SVGPath.H
    | SVGPath.V
    | SVGPath.C
    | SVGPath.S
    | SVGPath.Q
    | SVGPath.T
    | SVGPath.A
    | SVGPath.Z
  >;
}

export default Common;
