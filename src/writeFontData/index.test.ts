import fs from 'fs';

import writeFontData from '.';

jest.mock('fs');

beforeEach(jest.clearAllMocks);

describe('witeFontData 함수는', () => {
  const givenProps = {
    filename: 'font',
    ext: 'json',
    data: '{}',
  };

  context('msdf 경로가 없을 때', () => {
    it('msdf 경로를 생성합니다.', () => {
      (fs.existsSync as jest.Mock).mockImplementationOnce(() => false);

      writeFontData(givenProps);

      expect(fs.mkdirSync).toBeCalled();
    });
  });

  it('주어진 데이터로 파일을 생성합니다.', () => {
    writeFontData(givenProps);

    expect(fs.writeFileSync).toBeCalled();
  });
});
