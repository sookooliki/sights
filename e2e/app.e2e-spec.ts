import { SightsPage } from './app.po';

describe('sights App', function() {
  let page: SightsPage;

  beforeEach(() => {
    page = new SightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
