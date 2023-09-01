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
    const donationWidgetFrame = this.donationWidgetFrameLocator
    this.giveOnceButton = donationWidgetFrame.getByRole('button', { name: 'Give once' })
    this.monthlyButton = donationWidgetFrame.getByRole('button', { name: 'Monthly' })
    this.priceInput = donationWidgetFrame.getByTestId('price-input')
    this.donationCurrencyDropDown = donationWidgetFrame.getByLabel('Donation currency')
    this.donateButton = donationWidgetFrame.getByRole('button', { name: 'Donate' })
    this.donateMonthlyButton = donationWidgetFrame.getByRole('button', { name: 'Donate monthly' })
  }

  async selectDonationCurrency(currency: string, value: string) {
    await this.donationCurrencyDropDown.selectOption(currency)
    await this.priceInput.fill(value)
  }
}
