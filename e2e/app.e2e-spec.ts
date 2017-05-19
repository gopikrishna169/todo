import { Todo1Page } from './app.po';

describe('todo1 App', function() {
  let page: Todo1Page;

  beforeEach(() => {
    page = new Todo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
