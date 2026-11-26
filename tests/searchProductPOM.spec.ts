import {test, expect} from "@playwright/test"
import {SearchPage} from "../pages/searchPage"

test ("Search products using differenc cases", async ({page}) => {

    const pliersProduct = new SearchPage(page);

    await pliersProduct.goto();

    await pliersProduct.searchProduct("PLIers");

// Waits for all products to be displayed
// expect.poll() -
   await expect.poll(async () => {
    const names = await pliersProduct.getSearchedProducts();

    return names.length > 0 && names.every(name => name.toLowerCase().includes("pliers")); // every()- Determines whether all the members of an array satisfy the specified test.
    }).toBe(true); // this means the test passes only when the whole condition returns true

})