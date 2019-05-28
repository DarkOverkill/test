/* global page */

describe('Sample tests', () => {
  it('should display title on components page', async () => {
    await page.goto('http://localhost:3005/form-components');
    await expect(page).toMatch('Form components');
  });
  it('should display title on signin page', async () => {
    await page.goto('http://localhost:3005/signin');
    await expect(page).toMatch('Sign in');
  });
  it('should display title on signup page', async () => {
    await page.goto('http://localhost:3005/signup');
    await expect(page).toMatch('Sign up');
  });
});
