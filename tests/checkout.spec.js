import {test, expect} from '@playwright/test';

test("Checkout process", async ({page}) => {

    await page.pause()

    await page.goto('https://storedemo.testdino.com/login')

    await page.getByTestId('login-email-input').fill('johnedoey@hotmail.com')

    await page.getByTestId('login-password-input').fill('Password@1234')

    await page.getByRole('Button', {name: 'Sign in'}).click()

    await page.getByTestId('header-menu-all-products').click()

    await page
        .locator('a', { hasText: 'Rode NT1-A Condenser Mic' })
        .getByTestId('all-products-cart-button')
        .click();

    // Verify that the product has been added to the cart

    await page.getByTestId('header-cart-icon').click();
    await page.getByTestId('view-cart-button').click();

    await expect(page
            .locator('a', { hasText: 'Rode NT1-A Condenser Mic' })
            .getByTestId('cart-product-header'))
            .toBeVisible();

    await page.getByTestId('cart-checkout-button').click();

    await expect(page.getByTestId('checkout-credit-card-button')).toHaveText('Credit Card');

    await page.getByTestId('checkout-card-number-input').fill('1234456353452453');

    await page.getByTestId('checkout-cardholder-name-input').fill('Johne Doey');

    await page.getByTestId('checkout-expiration-date-month-input').fill('12');

    await page.getByTestId('checkout-expiration-date-year-input').fill('28');

    await page.getByTestId('checkout-cvv-input').fill('123');
})

test("Checkout process", async ({page}) => {

    await page.pause()

    await page.goto('https://storedemo.testdino.com/login')

    await page.getByTestId('login-email-input').fill('johnedoey@hotmail.com')

    await page.getByTestId('login-password-input').fill('Password@1234')

    await page.getByRole('Button', {name: 'Sign in'}).click()

    await page.getByTestId('header-menu-all-products').click()

    await page
        .locator('a', { hasText: 'Rode NT1-A Condenser Mic' })
        .getByTestId('all-products-cart-button')
        .click();

    // Verify that the product has been added to the cart

    await page.getByTestId('header-cart-icon').click();
    await page.getByTestId('view-cart-button').click();

    await expect(page
            .locator('a', { hasText: 'Rode NT1-A Condenser Mic' })
            .getByTestId('cart-product-header'))
            .toBeVisible();

    await page.getByTestId('cart-checkout-button').click();

    await page.getByTestId('checkout-place-order-button').click();

    await expect(page.getByTestId('checkout-card-number-error')).toBeVisible();
})