import { CoursePlanner2Page } from './app.po';

describe('course-planner2 App', () => {
  let page: CoursePlanner2Page;

  beforeEach(() => {
    page = new CoursePlanner2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
