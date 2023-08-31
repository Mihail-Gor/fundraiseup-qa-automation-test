import { Locator, Page } from '@playwright/test'

export class MainPage {
  readonly page: Page
  readonly giveNowButton: Locator

  constructor(page: Page) {
    this.page = page
    this.giveNowButton = page.frameLocator('iframe[title="Donate Button"]').getByText('Give Now')
  }

  async openMainPage() {
    await this.page.goto('/qa-test-7R58U3')
  }

  async clickOnGiveNowButton() {
    await this.giveNowButton.click()
  }
}
