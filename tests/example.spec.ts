import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('login thành công', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
});