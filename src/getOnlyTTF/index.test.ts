import getOnlyTTF from '.';

describe('getOnlyTTF 함수는', () => {
  context('주어진 파일이름들 중 .ttf 확장자가 있을 때', () => {
    const givenFilenames: string[] = ['font1.otf', 'font2.eot', 'font3.woff'];

    it('확장자를 제거한 파일명만 가진 배열을 리턴합니다.', () => {
      expect(getOnlyTTF(givenFilenames)).toEqual([]);
    });
  });

  context('주어진 파일이름들 중 .ttf 확장자가 없을 때', () => {
    const givenFilenames: string[] = ['font1.ttf', 'font2.eot', 'font3.woff'];

    it('빈 배열을 리턴합니다.', () => {
      expect(getOnlyTTF(givenFilenames)).toEqual(['font1']);
    });
  });
});
