import { cdrColorType } from 'VGCore/enums';

class ColorMdl {

  private rgb: Array<number> = [];
  private cmyk: Array<number> = [];

  output() {
    return {
      rgb: this.rgb,
      cmyk: this.cmyk,
    };
  }

  check(shape: VGCore.Shape) {
    const id = shape.StaticID;

    switch (shape.Fill.UniformColor.Type) {
      case cdrColorType.cdrColorCMYK:
        this.cmyk.push(id);
        break;
      case cdrColorType.cdrColorRGB:
        this.rgb.push(id);
        break;
    }
  }
}

export default ColorMdl;
