import fs from 'fs';

import writeImage from '.';

jest.mock('fs');
jest.mock('../invertImage');

describe('writeImage 함수는', () => {
  const givenProps = {
    textures: [
      { texture: 'image data' },
      { texture: 'image data' },
    ],
    filename: 'font',
  };

  it('주어진 textures 만큼 이미지를 생성합니다.', async () => {
    await writeImage(givenProps);

    expect(fs.writeFileSync).toBeCalledTimes(givenProps.textures.length);
  });
});
