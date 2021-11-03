declare module 'msdf-bmfont-xml' {
  export = generateBMFont;
  /**
   * Creates a BMFont compatible bitmap font of signed distance fields from a font file
   *
   * @param {string|Buffer} fontPath - Path or Buffer for the input ttf/otf/woff font
   * @param {Object} opt - Options object for generating bitmap font (Optional) :
   *            outputType : font file format Avaliable: xml(default), json
   *            filename : filename of both font file and font textures
   *            fontSize : font size for generated textures (default 42)
   *            charset : charset in generated font, could be array or string (default is Western)
   *            textureWidth : Width of generated textures (default 512)
   *            textureHeight : Height of generated textures (default 512)
   *            distanceRange : distance range for computing signed distance field
   *            fieldType : "msdf"(default), "sdf", "psdf"
   *            roundDecimal  : rounded digits of the output font file. (Defaut is null)
   *            smartSize : shrink atlas to the smallest possible square (Default: false)
   *            pot : atlas size shall be power of 2 (Default: false)
   *            square : atlas size shall be square (Default: false)
   *            rot : allow 90-degree rotation while packing (Default: false)
   *            rtl : use RTL charators fix (Default: false)
   * @param {function(string, Array.<Object>, Object)} callback - Callback funtion(err, textures, font)
   *
   */
  declare function generateBMFont(fontPath: string | Buffer, opt: any, callback: (arg0: string, arg1: Array<any>, arg2: any) => ): void;
}

