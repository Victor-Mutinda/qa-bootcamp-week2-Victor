import { test, expect } from '@playwright/test';

test("Invalid login" , async({page}) => {
    await page.goto("https://practicesoftwaretesting.com/auth/login");

    await page.getByRole("textbox", {name:"Email address *"}).fill("victormutinda@gmai.com");
    await page.getByRole("textbox", {name:"Password *"}).fill("Qwertyuiop123.?");

    await page.getByRole("button", {name:"Login"}).click();

    await expect(page.getByText("Invalid email or password", {exact:true})).toBeVisible();


})