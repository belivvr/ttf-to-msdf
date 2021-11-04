import { writeFileSync } from 'fs';

import invertImage from '../invertImage';

interface Props {
  textures: any[];
  filename: string;
}

async function writeOneImage(filename: string, index: number, texture: Buffer) {
  const imageFileName: string = `msdf/${filename}${index > 0 ? index : ''}.png`;
  return { image: invertImage(texture), imageFileName };
}

export default async function writeImage({
  textures,
  filename,
}: Props) {
  const images = await Promise.all(
    textures.map((texture, index) => writeOneImage(filename, index, texture.texture)),
  );

  images.forEach(({ image, imageFileName }) => {
    image.then((data) => writeFileSync(imageFileName, data));
  });
}
