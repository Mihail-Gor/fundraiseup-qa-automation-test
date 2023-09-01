import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  /* Запуск тестов параллельно */
  fullyParallel: true,
  /* Количество параллельных тестов */
  workers: 2,
  /* Конфигурация отчётов с результатами прохождения тестов */
  reporter: [
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: false
      }
    ]
  ],
  /* Настройки браузера */
  use: {
    baseURL: 'https://data.fundraiseup.com',
    launchOptions: {
      slowMo: 250,
      headless: true
    }
  },

  /* Настройки для запуска на разных браузерах и устройствах */
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }
    },


    /* Мобильные устройства */
    {
      name: 'Safari',
      use: { ...devices['iPhone 15'] }
    }
  ]

})
