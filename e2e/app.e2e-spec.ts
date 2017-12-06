import { FbalbumsappPage } from './app.po';

describe('fbalbumsapp App', function() {
  let page: FbalbumsappPage;

  beforeEach(() => {
    page = new FbalbumsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
