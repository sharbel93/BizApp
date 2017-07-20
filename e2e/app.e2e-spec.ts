import { MyBizAppPage } from './app.po';

describe('my-biz-app App', () => {
  let page: MyBizAppPage;

  beforeEach(() => {
    page = new MyBizAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
