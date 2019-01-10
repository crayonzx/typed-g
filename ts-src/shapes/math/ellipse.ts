export = {
  xAt(psi: number, rx: number, ry: number, cx: number, t: number) {
    return rx * Math.cos(psi) * Math.cos(t) - ry * Math.sin(psi) * Math.sin(t) + cx;
  },
  yAt(psi: number, rx: number, ry: number, cy: number, t: number) {
    return rx * Math.sin(psi) * Math.cos(t) + ry * Math.cos(psi) * Math.sin(t) + cy;
  },
  xExtrema(psi: number, rx: number, ry: number) {
    return Math.atan((-ry / rx) * Math.tan(psi));
  },
  yExtrema(psi: number, rx: number, ry: number) {
    return Math.atan((ry / (rx * Math.tan(psi))));
  }
};
