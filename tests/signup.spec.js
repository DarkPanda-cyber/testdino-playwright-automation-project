import {test, expect} from '@playwright/test';

test("Sign up feature testing with valid details within parameters", async ({page}) => {

    await page.pause();

    await page.goto('https://storedemo.testdino.com/signup');

    await expect(page.getByRole('heading', { name: /Create account/i })).toBeVisible();
    await expect(page.getByTestId('signup-description')).toContainText('Join us today and discover the complete shopping experience');

    await page.getByTestId('signup-firstname-input').fill('John');
    await page.getByTestId('signup-lastname-input').fill('Daashe');
    await page.getByTestId('signup-email-input').fill('johndaashe@company.dev');
    await page.getByTestId('signup-password-input').fill('Daashiswhatitis@uk1234!');

    await expect(page.getByText('Password must be at least 6 characters long')).toBeVisible();

    await page.getByRole('button', {name: 'Create Account'}).click();
})