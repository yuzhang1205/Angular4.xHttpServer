import { AngularHttpDemoPage } from './app.po';

describe('angular-http-demo App', function() {
  let page: AngularHttpDemoPage;

  beforeEach(() => {
    page = new AngularHttpDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
