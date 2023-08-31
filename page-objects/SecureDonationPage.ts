import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class SecureDonationPage extends BasePage {
  readonly giveOnceButton: Locator
  readonly monthlyButton: Locator
  readonly priceInput: Locator
  readonly donationCurrencyDropDown: Locator
  readonly donateButton: Locator
  readonly donateMonthlyButton: Locator

  constructor(page: Page) {
    super(page)

    this.giveOnceButton = this.donationWidgetFrameLocator.getByRole('button', { name: 'Give once' })
    this.monthlyButton = this.donationWidgetFrameLocator.getByRole('button', { name: 'Monthly' })
    this.priceInput = this.donationWidgetFrameLocator.getByTestId('price-input')
    this.donationCurrencyDropDown = this.donationWidgetFrameLocator.getByLabel('Donation currency')
    this.donateButton = this.donationWidgetFrameLocator.getByRole('button', { name: 'Donate' })
    this.donateMonthlyButton = this.donationWidgetFrameLocator.getByRole('button', { name: 'Donate monthly' })
  }

  async clickOnFrequencyButton(frequency: 'giveOnce' | 'monthly') {
    const targetButton = this[frequency + 'Button']
    await targetButton.click()
  }

  async selectDonationCurrency(currency: string, value: string) {
    await this.donationCurrencyDropDown.selectOption(currency)
    await this.priceInput.fill(value)
  }

  async clickOnDonateButton(button: 'donate' | 'donateMonthly') {
    const targetButton = this[button + 'Button']
    await targetButton.click()
  }
}
