import { GlobalOilChallengePage } from './app.po';

describe('global-oil-challenge App', () => {
  let page: GlobalOilChallengePage;

  beforeEach(() => {
    page = new GlobalOilChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
