export default function getOnlyTTF(filenames: string[]): string[] {
  return filenames
    .filter((filename: string) => filename.includes('.ttf'))
    .map((filename: string) => filename.replace('.ttf', ''));
}
