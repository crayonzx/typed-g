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
}

export default Common;
