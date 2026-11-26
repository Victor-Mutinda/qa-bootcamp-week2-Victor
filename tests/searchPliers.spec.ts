import { test, expect } from '@playwright/test';

test('Search for product using search feature - pliers', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    await page.getByRole('textbox', {name:"Search"}).fill("pliers");
    await page.getByRole('button', { name: 'Search' }).click();

    const productNames = page.getByRole('heading',{level : 5});

    await expect.poll(async () => {
    const names = await productNames.allTextContents(); 
    return names.length > 0 && names.every(name => name.toLowerCase().includes("pliers"));
    }).toBe(true);


});