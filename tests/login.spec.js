import {test, expect} from '@playwright/test'

test("Sign In using registered id and password", async ({page}) => {

    await page.pause()

    await page.goto('https://storedemo.testdino.com/login')

    await page.getByTestId('login-email-input').fill('johnedoey@hotmail.com')

    await page.getByTestId('login-password-input').fill('Password@123')

    // 1. Locate the input field and the toggle button
    const passwordInput = page.getByTestId('login-password-input');

    // Target the button containing the eye icon
    const toggleButton = page.locator('button:has(span[aria-label="eye"])'); 
    // Alternatively, using the svg attribute: page.locator('button:has(svg[data-icon="eye"])')

    // 2. Initial State: Verify password field is hidden (type="password")
    await expect(passwordInput).toHaveAttribute('type', 'password');

    // 3. First Click: Show password (type="text")
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'text');

    // 4. Second Click: Hide password again (type="password")
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'password');

    await page.getByRole('Button', {name: 'Sign in'}).click()
})


test("Sign In using invalid id and password", async ({page}) => {

    await page.pause()

    await page.goto('https://storedemo.testdino.com/login')

    await page.getByTestId('login-email-input').fill('johndoe@hotmail.com')

    await page.getByTestId('login-password-input').fill('Password@12')

    await page.getByRole('Button', {name: 'Sign in'}).click()
})

test("Sign In with empty email and password", async ({page}) => {

    await page.pause()

    await page.goto('https://storedemo.testdino.com/login')

    await page.getByTestId('login-email-input').fill('')

    await page.getByTestId('login-password-input').fill('')

    await page.getByRole('Button', {name: 'Sign in'}).click()
})