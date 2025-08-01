import { test, expect } from '@playwright/test';
test("truy cập trang và đăng ký", async ({ page }) => {
  await test.step("truy cập trang", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click vào bài học 1: Register Page", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });
  await test.step("điền form đăng ký", async () => {
    await page.fill("//input[@id='username']", "pvt");
    await page.fill("//input[@id='email']", "abc@gmail.com");
    await page.locator("//input[@ id='male']").check();
    await page.locator("//input[@ id='female']").uncheck();
    await page.locator("#reading").setChecked(true);
    await page.locator("#traveling").setChecked(true);
    await page.locator("#cooking").setChecked(false);
    await page.locator("//select[@id='interests']").selectOption("Art");
    await page.locator("//select[@id='country']").selectOption("Canada");
    await page.fill("#dob", "2001-07-21");
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/profile-picture.txt");
    await page.fill("#bio", "acb");
    await page.locator('#rating').evaluate((el: HTMLInputElement) => {
      el.value = "7";
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.locator("#favcolor").evaluate((el: HTMLInputElement) => {
      el.value = "#d6203e"; // không hiểu sao màu đen
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.locator("#newsletter").setChecked(true);
    await page.locator('//span[@class="slider round"]').setChecked(true);
  })
  await test.step("Submit", async () => {
    await page.locator("//button[@type='submit']").click();
  });
})


