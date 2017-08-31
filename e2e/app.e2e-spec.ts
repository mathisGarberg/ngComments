import { NgCommentsPage } from './app.po';

describe('ng-comments App', () => {
  let page: NgCommentsPage;

  beforeEach(() => {
    page = new NgCommentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
