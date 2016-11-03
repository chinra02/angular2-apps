import { Angular2CliSampleAppPage } from './app.po';

describe('angular2-cli-sample-app App', function() {
  let page: Angular2CliSampleAppPage;

  beforeEach(() => {
    page = new Angular2CliSampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
