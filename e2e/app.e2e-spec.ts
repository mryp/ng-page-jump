import { PageJumpPage } from './app.po';

describe('page-jump App', () => {
  let page: PageJumpPage;

  beforeEach(() => {
    page = new PageJumpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
