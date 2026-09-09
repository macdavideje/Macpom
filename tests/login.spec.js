import { test } from '@playwright/test';
import loginData from '../utils/login_data.json';
import { loginpage } from '../pages/login';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('test', async ({ page }) => {
  const loginPage = new loginpage(page);
  await loginPage.login(loginData.userName, loginData.passWord);
});