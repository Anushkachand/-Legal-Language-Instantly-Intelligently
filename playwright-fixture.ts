import { test as base, expect } from "@playwright/test";

// Fixture ka interface define karein taaki coding mein asani ho
interface LegalProjectFixtures {
api: {
    simplify: (clause: string) => Promise<any>;
};
  extractor: {
    cleanScrape: (selector: string) => Promise<string>;
  };
}

// Lovable ko replace karke standard base fixture use kar rahe hain
export const test = base.extend<LegalProjectFixtures>({
  // 1. Backend API Testing Tool
  api: async ({ request }, use) => {
    await use({
      simplify: async (clause: string) => {
        // Yeh aapke backend server ko hit karega
        return await request.post('/api/v1/simplify', {
          data: { text: clause }
        });
      }
    });
  },

  // 2. Data Scraping Tool (for Gemma Training Data)
  extractor: async ({ page }, use) => {
    await use({
      cleanScrape: async (selector: string) => {
        const rawText = await page.innerText(selector);
        // Training ke liye data clean karna zaroori hai
        return rawText.replace(/\s+/g, ' ').trim();
      }
    });
  },
});

export { expect };