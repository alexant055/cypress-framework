const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/angularpractice',
    specPattern: 'cypress/e2e/**/*.js',
  },
});
