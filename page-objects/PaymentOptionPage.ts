import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class PaymentOptionPage extends BasePage {
  readonly coverTransactionCostsCheckBox: Locator
  readonly creditCardButton: Locator
  readonly googlePayButton: Locator
  readonly clickToPayButton: Locator
  readonly bankTransferButton: Locator

  constructor(page: Page) {
    super(page)
    const donationWidgetFrame = this.donationWidgetFrameLocator
    this.coverTransactionCostsCheckBox = donationWidgetFrame.locator('#popover-fees')
    this.creditCardButton = donationWidgetFrame.getByRole('button',{ name: 'Credit card' },)
    this.googlePayButton = donationWidgetFrame.getByLabel('Google Pay')
    this.clickToPayButton = donationWidgetFrame.getByRole('button',{ name: 'Bank transfer' },)
    this.bankTransferButton = donationWidgetFrame.getByRole('button', { name: 'Back' },)
  }

  async setCoverTransactionCostsCheckBox(checked: boolean) {
    if (await this.coverTransactionCostsCheckBox.isChecked()) {
      await this.coverTransactionCostsCheckBox.setChecked(checked)
    }
  }
}
