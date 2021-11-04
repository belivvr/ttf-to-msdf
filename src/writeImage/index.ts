import { writeFileSync } from 'fs';
import { read, MIME_PNG } from 'jimp';

interface Props {
  textures: any[];
  filename: string;
}

export default async function writeImage({
  textures,
  filename,
}: Props) {
  await Promise.all(textures.map(({ texture }, index) => {
    const imageFileName: string = `msdf/${filename}${index > 0 ? index : ''}.png`;

    return read(texture)
      .then((image) => image.invert().getBufferAsync(MIME_PNG))
      .then((data) => writeFileSync(imageFileName, data));
  }));
}
