# FundraiseUp - Тестовый фреймворк на основе TypeScript и Playwright


Установка зависимостей:
- Установить NodeJS v18.17.1 или выше
- Склонировать проект
- В терминале среды разработки выполнить команду npm install
------------------------------------------------------------------------------- 

Краткое описание фреймворка:
- Конфигурация для playwright описана в файле playwright.config
- Используется page object паттерн
- В папке page-objects хранятся классы с описание веб страниц
- В папке tests хранятся тесты в файлах <name>.spec.ts
- В папке TestData хранятся тестовые данные
- В папках allur-report и allure-results хранятся allure отчёты
- По умолчанию тесты запускаются параллельно в 2 потока
- Запуск тестов происходит в браузере Google Chrome и Mobile Safari
------------------------------------------------------------------------------- 

Запуск тестов:
Команды для запуска тестов:
- npx playwright test (Запуск всех тестов)
- npx playwright test --config=playwright.config.ts --project=Chrome (Запускает тесты только на браузере Chrome)
- npx playwright test --config=playwright.config.ts --project=Safari (Запускает тесты только на браузере Safari для Iphone 15)
- npx allure generate allure-results -o allure-report --clean && allure open allure-report (Генерирует allure отчёт и открывает его в браузере)
------------------------------------------------------------------------------- 
