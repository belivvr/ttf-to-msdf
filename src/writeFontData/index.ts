import { existsSync, mkdirSync, writeFileSync } from 'fs';

interface Props {
  filename: string;
  ext: string;
  data: string;
}

export default function writeFontData({ filename, ext, data }: Props) {
  if (!existsSync('msdf')) {
    mkdirSync('msdf');
  }
  writeFileSync(`msdf/${filename}.${ext}`, data);
}
