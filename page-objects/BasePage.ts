import { FrameLocator, Locator, Page } from '@playwright/test'

export class BasePage {
  readonly page: Page
  readonly donationWidgetFrameLocator: FrameLocator

  constructor(page: Page) {
    this.page = page
    this.donationWidgetFrameLocator = page.frameLocator('iframe[title="Donation Widget"]')
  }
}
