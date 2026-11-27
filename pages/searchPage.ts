
import { type Page, type Locator } from "@playwright/test";

export class SearchPage {
    readonly SearchInputField: Locator;
    readonly SearchButton: Locator;
    readonly productNames: Locator;

    constructor(readonly page: Page) {
        this.SearchInputField = page.locator('[data-test="search-query"]');
        this.SearchButton = page.getByRole("button", { name: "Serch" });
        this.productNames = page.getByRole("heading", { level: 5 });
    }

    async goto() {
        await this.page.goto("https://with-bugs.practicesoftwaretesting.com");
    }

    async searchProduct(productName: string) {
        await this.SearchInputField.fill(productName);
        await this.SearchButton.click();
    }

    async getSearchedProducts(): Promise<string[]> {
        return await this.productNames.allTextContents();
    }

    async allResultsContain(productName: string): Promise<boolean> {
        const names = await this.getSearchedProducts();

        return names.length > 0 &&
            names.every(name =>
                name.toLowerCase().includes(productName.toLowerCase())
            );
    }
}
