import { ManagementSystemPage } from './app.po';

describe('management-system App', function() {
  let page: ManagementSystemPage;

  beforeEach(() => {
    page = new ManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
