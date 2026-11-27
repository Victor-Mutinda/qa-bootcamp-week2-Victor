import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  use: {
    baseURL: process.env.TOOLSHOP_URL ?? "https://practicesoftwaretesting.com",
    trace: "on"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
