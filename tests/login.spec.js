import { test, expect } from '@playwright/test';
import loginData from '../utils/login_data.json'
import { loginpage } from '../pages/login';

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('test', async ({ page }) => {
    loginPage = new loginpage;
    await loginpage.login(loginData.userName,loginData.passWord)
//   await page.locator('body').click();
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="item-1-title-link"]').click();
//   await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
//   await page.locator('[data-test="add-to-cart"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await expect(page.locator('[data-test="checkout"]')).toBeVisible();
});