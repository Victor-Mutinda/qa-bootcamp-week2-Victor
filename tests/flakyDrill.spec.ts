import { test, expect } from "@playwright/test";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

test("Flaky drill: Save message appears", async ({ page }) => {
    const fileUrl = pathToFileURL(
        join(__dirname, "drill", "index.html")
    ).href;

    await page.goto(fileUrl);
    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.locator("#status")).toHaveText("Saved");
});