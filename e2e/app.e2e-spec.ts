import { UnlimitedRoutesPage } from './app.po';

describe('unlimited-routes App', () => {
  let page: UnlimitedRoutesPage;

  beforeEach(() => {
    page = new UnlimitedRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
