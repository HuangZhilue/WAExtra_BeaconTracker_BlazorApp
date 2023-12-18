import chroma from "chroma-js";

export class ColorWorld {
  /**
   * Converts a color to its hexadecimal representation.
   *
   * @param {string | number | chroma.Color} color - The color to convert.
   * @return {string} The hexadecimal representation of the color.
   */
  public static colorToHex(color: string | number | chroma.Color): string {
    return chroma(color).hex();
  }

  /**
   * Init random hex color
   *
   * @returns {string} Random hex color
   */
  public static initRandomHexColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  /**
   * Returns a list of random hex colors.
   * @param {number} count - Number of colors to generate.
   * @param notSimilarColor - If true, generated colors will not be similar to each other.
   * @param deltaE - The maximum difference between colors to be considered "similar".
   * @param allowLowerDetailE - If true, deltaE will be lowered if too many similar colors are generated.
   * @returns {string[]} List of generated hex colors.
   */
  public static initRandomHexColorList = (
    count: number,
    notSimilarColor = true,
    deltaE = 10,
    allowLowerDetailE = true
  ): string[] => {
    // Initialize empty list to store generated colors.
    const colorList: string[] = [];

    // Counter for number of similar colors generated.
    let similarCount = 0;

    // Loop until desired number of colors is reached.
    while (colorList.length < count) {
      // Generate a random hex color.
      const randomColor = ColorWorld.initRandomHexColor();

      // Check if color is too similar to previously generated colors.
      if (notSimilarColor) {
        const isSimilar = colorList.some(
          (color) =>
            chroma.deltaE(color, randomColor) < deltaE || color === randomColor
        );
        if (isSimilar) {
          // Increment similar count and adjust deltaE if necessary.
          similarCount++;
          if (allowLowerDetailE && similarCount % 10 === 0 && deltaE > 1) {
            deltaE -= 1;
            if (deltaE <= 0) deltaE = 1;
          }
          continue;
        }
      }

      // Add generated color to list.
      colorList.push(randomColor);
    }

    // Return list of generated colors.
    return colorList;
  };

  /**
   * 初始化一组包含指定数量的RGB颜色的列表。
   * @param {number} count - 列表中要生成的颜色数量。
   * @param isBlackFirst - 是否从黑色开始生成颜色。
   * @returns {string[]} 一个RGB颜色数组。
   */
  public static initRGBColorListWithScaleMode = (
    count: number,
    isBlackFirst = false
  ): string[] => {
    // 定义起始和结束颜色
    const ColorArr = [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 255)",
      "rgb(0, 255, 0)",
      "rgb(0, 255, 255)",
      "rgb(255, 0, 0)",
      "rgb(255, 0, 255)",
      "rgb(255, 255, 0)",
      "rgb(255, 255, 255)",
    ];

    // 生成一组连续的RGB颜色
    return chroma
      .scale(isBlackFirst ? ColorArr : ColorArr.reverse())
      .mode("rgb")
      .colors(count);
  };

  /**
   * 初始化一组包含指定数量的RGB颜色的列表。
   * @param {number} count - 要生成的颜色数量。
   * @param isBlackFirst - 是否从黑色开始生成颜色。
   * @returns 一个RGB颜色数组。
   */
  public static initRGBColorList = (
    count: number,
    isBlackFirst = false
  ): string[] => {
    const colorList = [];

    // 定义RGB颜色范围。
    const rRange = [0, 255];
    const gRange = [0, 255];
    const bRange = [0, 255];

    // 定义RGB的取值步长。
    const step = Math.ceil(Math.pow(count, 1 / 3));
    const step4R = (rRange[1] - rRange[0]) / step;
    const step4G = (gRange[1] - gRange[0]) / step;
    const step4B = (bRange[1] - bRange[0]) / step;

    let lastR = rRange[isBlackFirst ? 0 : 1];
    let lastG = gRange[isBlackFirst ? 0 : 1];
    let lastB = bRange[isBlackFirst ? 0 : 1];

    for (let i = 0; i < count; i++) {
      // 生成颜色。
      // 需要变成整数
      const color =
        "#" +
        Math.floor(lastR).toString(16).padStart(2, "0") +
        Math.floor(lastG).toString(16).padStart(2, "0") +
        Math.floor(lastB).toString(16).padStart(2, "0");
      // 将颜色添加到数组中。
      colorList.push(color);

      // 根据RGB颜色范围和步长更新颜色的值。
      lastR = lastR + (isBlackFirst ? step4R : -1 * step4R);
      if (lastR < rRange[0] && !isBlackFirst) {
        lastR = rRange[1] - (rRange[0] - lastR);
        lastG = lastG - step4G;
        if (lastG < gRange[0]) {
          lastG = gRange[1] - (gRange[0] - lastG);
          lastB = lastB - step4B;
          if (lastB < bRange[0]) {
            console.warn(lastB);
          }
        }
      } else if (lastR > rRange[1] && isBlackFirst) {
        lastR = rRange[0] + (lastR - rRange[1]);
        lastG = lastG + step4G;
        if (lastG > gRange[1]) {
          lastG = gRange[0] + (lastG - gRange[1]);
          lastB = lastB + step4B;
          if (lastB > bRange[1]) {
            console.warn(lastB);
          }
        }
      }
    }

    return colorList;
  };

  //   public static InitRGBColorList = (count: number) => {
  //     // Initialize an empty array to hold the generated colors.
  //     ColorList.value = [];

  //     // Calculate the number of colors in one dimension.
  //     const oneColorCount = Math.ceil(Math.pow(count, 1 / 3));

  //     // Calculate the offset for each color in one dimension.
  //     const oneColorOffset = 255 / oneColorCount;

  //     let total = 0;
  //     // Iterate over each color in the three dimensions.
  //     for (let i = 0; i < oneColorCount; i++) {
  //       // Calculate the red component of the color.
  //       const colorR = Math.floor(oneColorOffset * i)
  //         .toString(16)
  //         .padStart(2, "0");

  //       for (let j = 0; j < oneColorCount; j++) {
  //         // Calculate the green component of the color.
  //         const colorG = Math.floor(oneColorOffset * j)
  //           .toString(16)
  //           .padStart(2, "0");

  //         for (let k = 0; k < oneColorCount; k++) {
  //           // Calculate the blue component of the color.
  //           const colorB = Math.floor(oneColorOffset * k)
  //             .toString(16)
  //             .padStart(2, "0");

  //           // Construct the color string from the RGB components.
  //           const color = "#" + colorR + colorG + colorB;
  //           total++;
  //           // Log the color and its position in the 3D grid to the console.
  //           console.log(
  //             // Use CSS to display the color string as the color.
  //             "%c" + color + "\t(" + i + "," + j + "," + k + ")",
  //             "color: " + color,
  //             total
  //           );

  //           // Add the color to the list of generated colors.
  //           ColorList.value.push(color);
  //         }
  //       }
  //     }
  //   };

  /**
   * 初始化一组包含指定数量的HSV颜色的列表。
   * @param {number} count - 要生成的颜色数量。
   * @param isBlackFirst - 是否将黑色作为第一个颜色。
   * @returns {string[]} 一个HSV颜色数组。
   */
  public static initHSVColorList = (
    count: number,
    isBlackFirst = false
  ): string[] => {
    const colorList = [];

    // 定义HSV颜色范围
    const hueRange = [0, 360];
    const saturationRange = [20, 100];
    const valueRange = [20, 100];

    // 定义HSV的取值步长
    const step = Math.pow(
      count /
        (((hueRange[1] - hueRange[0]) / 100) *
          ((saturationRange[1] - saturationRange[0]) / 100) *
          ((valueRange[1] - valueRange[0]) / 100)),
      1 / 3
    );
    const step4H = (hueRange[1] - hueRange[0]) / (step * 3.6);
    const step4S = (saturationRange[1] - saturationRange[0]) / step;
    const step4V = (valueRange[1] - valueRange[0]) / step;

    let lastH = hueRange[1];
    let lastS = saturationRange[1];
    let lastV = valueRange[1];
    for (let i = 0; i < count; i++) {
      const color = chroma.hsv(lastH, lastS / 100, lastV / 100);
      colorList.push(color.hex());
      //   console.log(
      //     "%c" + color + "\t(" + lastH + "," + lastS + "," + lastV + ")",
      //     "background-color:" + color,
      //     i
      //   );

      lastH -= step4H;
      if (lastH < hueRange[0]) {
        lastH = hueRange[1] - (hueRange[0] - lastH);
        if (isBlackFirst) {
          lastV -= step4V;
          if (lastV < valueRange[0]) {
            lastV = valueRange[1] - (valueRange[0] - lastV);
            lastS -= step4S;
            if (lastS < saturationRange[0]) {
              console.warn("Saturation is out of range:", lastS);
            }
          }
        } else {
          lastS -= step4S;
          if (lastS < saturationRange[0]) {
            lastS = saturationRange[1] - (saturationRange[0] - lastS);
            lastV -= step4V;
            if (lastV < valueRange[0]) {
              console.warn("Value is out of range:", lastV);
            }
          }
        }
      }
    }

    return colorList;
  };
}
