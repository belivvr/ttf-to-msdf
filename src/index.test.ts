import sum from '.';

describe('sum function is', () => {
  context('When given two numbers', () => {
    it('Should be returns sum', () => {
      expect(sum(1, 2)).toBe(1 + 2);
    });
  });
});
