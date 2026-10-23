
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    headless: true,

    screenshot: 'on',

    video: 'on',

    trace: 'on-first-retry'
  }

});
