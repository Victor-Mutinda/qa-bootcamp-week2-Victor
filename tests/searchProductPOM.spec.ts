
import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";

test("Search products using different cases", async ({ page }) => {
    const pliersProduct = new SearchPage(page);

    await pliersProduct.goto();

    await pliersProduct.searchProduct("PLIers");

    // Wait until all displayed products contain "pliers".
    await expect.poll(() =>
        pliersProduct.allResultsContain("pliers")
    ).toBe(true);
});
