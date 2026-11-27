import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";

test("C1 Search by name", async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.goto();
    await searchPage.searchProduct("pliers");

    await expect.poll(() =>
        searchPage.allResultsContain("PliERS")
    ).toBe(true);
});
