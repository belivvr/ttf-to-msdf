import { writeFileSync } from 'fs';

import invertImage from '../invertImage';

interface Props {
  textures: any[];
  filename: string;
}

async function writeOneImage(filename: string, index: number, texture: Buffer) {
  const imageFileName: string = `msdf/${filename}${index > 0 ? index : ''}.png`;
  const image: Buffer = await invertImage(texture);
  writeFileSync(imageFileName, image);
}

export default async function writeImage({
  textures,
  filename,
}: Props) {
  await Promise.all(
    textures.map((texture, index) => writeOneImage(filename, index, texture.texture)),
  );
}
