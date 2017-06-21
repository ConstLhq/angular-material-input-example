import { Angular4MaterailFirstTryPage } from './app.po';

describe('angular4-materail-first-try App', () => {
  let page: Angular4MaterailFirstTryPage;

  beforeEach(() => {
    page = new Angular4MaterailFirstTryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
