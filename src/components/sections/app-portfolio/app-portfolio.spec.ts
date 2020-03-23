import { AppPortfolio } from './app-portfolio';

describe('app-profile', () => {
  it('builds', () => {
    expect(new AppPortfolio()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns a blank string if the name is undefined', () => {
      const component = new AppPortfolio();
      expect(component.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', () => {
      const component = new AppPortfolio();
      expect(component.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', () => {
      const component = new AppPortfolio();
      expect(component.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', () => {
      const component = new AppPortfolio();
      expect(component.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', () => {
      const component = new AppPortfolio();
      expect(component.normalize('q')).toEqual('Q');
    });
  });
});
