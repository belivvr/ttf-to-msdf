import { read, MIME_PNG } from 'jimp';

export default async function invertImage(texture: Buffer): Promise<Buffer> {
  const image = await read(texture);
  return image.invert().getBufferAsync(MIME_PNG);
}
