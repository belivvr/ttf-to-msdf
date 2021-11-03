> 아직 완료되지 않은 레포지토리입니다.

![Belivvr](https://avatars.githubusercontent.com/u/40684200?s=200&v=4)

# .ttf to MSDF

`.ttf` 폰트를 MSDF 형식의 `.png` 와 `.json` 으로 변환시켜주는 프로젝트입니다.

![Yarn2 PnP](https://img.shields.io/badge/Yarn2-PnP-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## 참고

[aframe-fonts-korean](https://github.com/myso-kr/aframe-fonts-korean) 프로젝트를 보고 만들었습니다.

## 설치

```sh
git clone https://github.com/belivvr/ttf-to-msdf.git &&\
cd ttf-to-msdf &&\
yarn
```

## 사용방법

`/ttf` 경로에 `.ttf` 파일을 집어넣으면 `/msdf` 경로에 동일한 이름의 `.png` 와 `.json` 파일을 생성합니다.  
`yarn start` 명령어로 작동시킵니다.

## Config

`/config.json` 파일에 들어가는 설정값들입니다.  
[msdf-bmfont-xml](https://github.com/soimy/msdf-bmfont-xml#generatebmfontfontpath--fontbuffer-opt-callback) 를 사용하므로 해당 라이브러리의 Options와 동일합니다.

- `outputType` (String)
  - type of output font file. Defaults to `xml`
    - `xml` a BMFont standard .fnt file which is wildly supported.
    - `json` a JSON file compatible with [Hiero](https://github.com/libgdx/libgdx/wiki/Hiero)
- `filename` (String)
  - filename of both font file and font atlas. If omited, font face name is used. **Required** if font is provided as a Buffer.
- `charset` (String|Array)
  - the characters to include in the bitmap font. Defaults to all ASCII printable characters.
- `fontSize` (Number)
  - the font size at which to generate the distance field. Defaults to `42`
- `textureSize` (Array[2])
  - the dimensions of an output texture sheet, normally power-of-2 for GPU usage. Both dimensions default to `[512, 512]`
- `texturePadding` (Number)
  - pixels between each glyph in the texture. Defaults to `2`
- `border` (Number)
  - space between glyphs textures & edge. Defaults to `0`
- `fieldType` (String)
  - what kind of distance field to generate. Defaults to `msdf`. Must be one of:
    - `msdf` Multi-channel signed distance field
    - `sdf` Monochrome signed distance field
    - `psdf` monochrome signed pseudo-distance field
- `distanceRange` (Number)
  - the width of the range around the shape between the minimum and maximum representable signed distance in pixels, defaults to `3`
- `roundDecimal` (Number)
  - rounded digits of the output font metics. For `xml` output, `roundDecimal: 0` recommended.
- `vector` (Boolean)
  - output a SVG Vector file for debugging. Defauts to `false`
- `smart-size` (Boolean)
  - shrink atlas to the smallest possible square. Default: `false`
- `pot` (Boolean)
  - output atlas size shall be power of 2. Default: `false`
- `square` (Boolean)
  - output atlas size shall be square. Default: `false`
- `rot` (Boolean)
  - allow 90-degree rotation while packing. Default: `false`
- `rtl` (Boolean)
  - use RTL(Arabic/Persian) charators fix. Default: `false`
