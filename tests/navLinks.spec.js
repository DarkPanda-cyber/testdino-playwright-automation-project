import {test, expect} from '@playwright/test'

test("Navbar links redirects to correct pages", async ({page}) => {

await page.pause()

await page.goto('https://storedemo.testdino.com/')

const navRoutes = [
  { id: 'header-menu-all-products', path: /\/products$/ },
  { id: 'header-menu-contact-us', path: /\/contact-us$/ },
  { id: 'header-menu-about-us', path: /\/about-us$/ },
  { id: 'header-menu-home', path: /\/$/ },
];

for (const route of navRoutes) {

  await page.getByTestId(route.id).click();

  await expect(page).toHaveURL(route.path);
}

})

test("Testing Idempotent Navigation", async ({page}) => {

await page.pause()

await page.goto('https://storedemo.testdino.com/')

const allProductsLink = page.getByTestId('header-menu-all-products');

// First click - Navigate to All Products
await allProductsLink.click();
await expect(page).toHaveURL(/\/products$/);

// Second click - Should stay on the same page
await allProductsLink.click();

// Verify you are still on the exact same page
await expect(page).toHaveURL(/\/products$/);

// Optional: Assert key page content is still visible and healthy
await expect(page.getByTestId('all-products-title')).toBeVisible();

})