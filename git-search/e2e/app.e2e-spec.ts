import { GitSearchPage } from './app.po';

describe('git-search App', () => {
  let page: GitSearchPage;

  beforeEach(() => {
    page = new GitSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
