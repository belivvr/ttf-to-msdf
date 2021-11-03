import fs from 'fs';
// @ts-ignore
import generateBMFont from 'msdf-bmfont-xml';

import getOnlyTTF from './getOnlyTTF';
import invertImage from './invertImage';
import config from '../config.json';

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

      if (!fs.existsSync('msdf')) {
        fs.mkdirSync('msdf');
      }
      fs.writeFileSync(`msdf/${filename}.${config.outputType}`, font.data);

      textures.forEach(async (texture, index) => {
        const imageFileName: string = `msdf/${filename}${index > 0 ? index : ''}.png`;
        const image: Buffer = await invertImage(texture.texture);
        fs.writeFileSync(imageFileName, image);
      });
    },
  );
});
