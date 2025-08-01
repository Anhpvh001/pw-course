import { test, expect } from '@playwright/test';
test("Add to cart", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.click("//a[@href='02-xpath-product-page.html']");
    const addToCart = page.locator("//button[@class='add-to-cart']")
    await addToCart.first().dblclick();
    await addToCart.nth(1).click({ clickCount: 3 });
    await addToCart.nth(2).click();
})