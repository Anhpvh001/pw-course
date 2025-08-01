import { test } from '@playwright/test';

test("Todo Page", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();

    // Thêm 100 todo
    for (let i = 0; i < 100; i++) {
        await page.fill('#new-task', `ToDo ${i}`);
        await page.click('#add-task');
    }
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept(); // Click nút "OK"
    });

    
    for (let i = 1; i < 100; i += 2) {
        await page.locator(`#todo-${i}-delete`).click();
    }
});
