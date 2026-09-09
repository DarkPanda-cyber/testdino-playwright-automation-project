import {test, expect} from '@playwright/test'

test("Add product to cart", async ({page}) => {
    await page.pause();

    await page.goto('https://storedemo.testdino.com/products');

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

    await expect(page.getByTestId('cart-quantity')).toHaveText('1');
})


test("Remove product from cart", async ({page}) => {

    await page.pause();

    await page.goto('https://storedemo.testdino.com/products');

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

    await expect(page.getByTestId('cart-quantity')).toHaveText('1');

    await page
        .locator('div', { hasText: 'Rode NT1-A Condenser Mic' })
        .getByTestId('cart-delete-button')
        .click();

    // await page.getByTestId('cart-delete-button').first().click();

    // await expect(page.getByRole('status')).toHaveText('Removed from cart');

    await expect(page.getByText('Removed from cart', { exact: true })).toBeVisible();
})

test("Verify product quantity in cart", async ({page}) => {
    await page.pause();

    await page.goto('https://storedemo.testdino.com/products');

    await page
        .locator('a', { hasText: 'Rode NT1-A Condenser Mic' })
        .getByTestId('all-products-cart-button')
        .click();

    await page
        .locator('a', { hasText: 'JBL Charge 4 Bluetooth Speaker' })
        .getByTestId('all-products-cart-button')
        .click();

    // Verify that the product has been added to the cart

    await expect(page.getByTestId('header-cart-count')).toHaveText('2');
})

