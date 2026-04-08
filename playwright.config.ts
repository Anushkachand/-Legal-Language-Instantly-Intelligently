import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Higher timeout for legal portals that load slowly
  timeout: 90000, 
  
  use: {
    // Standardizing the viewport helps the AI agent 'see' consistent layouts
    viewport: { width: 1280, height: 720 },
    
    // Crucial for legal scraping: captures evidence of the source clause
    screenshot: 'only-on-failure',
    
    // If the public lease sites require a base URL
    baseURL: 'http://localhost:3000', 
    
    // Added headers to mimic a standard browser browser
    extraHTTPHeaders: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    },
  },

  // Retries are helpful when dealing with unpredictable public government/legal databases
  retries: 2,
});
