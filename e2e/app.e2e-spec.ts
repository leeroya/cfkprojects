import { CfkprojectsPage } from './app.po';

describe('cfkprojects App', function() {
  let page: CfkprojectsPage;

  beforeEach(() => {
    page = new CfkprojectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
