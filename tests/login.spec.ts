import {test,expect, Locator} from'@playwright/test';
import { error } from 'console';

test.describe('Login Tests', () => {

    let username:Locator;
    let password:Locator;
    let loginButton:Locator;
    let errorMessage:Locator;

    //create a beforeach hook to navigate to the login page before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/login'); // Replace with your actual login URL
        username = page.getByRole('textbox', { name: 'name' });
        //check if the controls are visible
        await expect(username).toBeVisible();
        
        password = page.getByRole('textbox', { name: 'password' });
        await expect(password).toBeVisible();

        loginButton = page.getByRole('button', { name: 'Login' });
        await expect(loginButton).toBeVisible();
    });

test('check if error message is displayed when username is empty', async ({ page }) => {
  await username.fill(''); // Use an empty username for the test
  await password.fill('validPassword');
  await loginButton.click();

  errorMessage = page.locator('text=Username is required');
  await expect(errorMessage).toBeVisible();
   
});

test('check if error message is displayed when password is empty', async ({ page }) => {
  await username.fill('validUsername');
  await password.fill('');
  await loginButton.click();

  errorMessage = page.locator('text=Password is required');
  await expect(errorMessage).toBeVisible();
});


  

});