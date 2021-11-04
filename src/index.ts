import fs from 'fs';
// @ts-ignore
import generateBMFont from 'msdf-bmfont-xml';

import getOnlyTTF from './getOnlyTTF';
import invertImage from './invertImage';
import config from '../config.json';
import writeFontData from './writeFontData';

const charset: string = fs.readFileSync('charset.txt', { encoding: 'utf-8' });

const allFilenames: string[] = fs.readdirSync('ttf');
const ttfFilenames: string[] = getOnlyTTF(allFilenames);

ttfFilenames.forEach((filename: string) => {
  const ttfFile: string = `ttf/${filename}.ttf`;

  generateBMFont(
    ttfFile,
    { ...config, charset },
    async (err: string, textures: any[], font: any) => {
      if (err) {
        throw new Error(err);
      }

      writeFontData({
        filename,
        ext: config.outputType,
        data: font.data,
      });

      textures.forEach(async (texture, index) => {
        const imageFileName: string = `msdf/${filename}${index > 0 ? index : ''}.png`;
        const image: Buffer = await invertImage(texture.texture);
        fs.writeFileSync(imageFileName, image);
      });
    },
  );
});
