import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',


  use: {
    baseURL: "http://localhost:5173/",
    headless: false,
    launchOptions: { slowMo: 2000 }
  },

  webServer: {
    command: 'vite',
    url: 'http://localhost:5173'
  }
});