import fs from 'fs';
// @ts-ignore
import generateBMFont from 'msdf-bmfont-xml';

import getOnlyTTF from './getOnlyTTF';
import config from '../config.json';
import writeFontData from './writeFontData';
import writeImage from './writeImage';

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

      await writeImage({ textures, filename });
    },
  );
});
