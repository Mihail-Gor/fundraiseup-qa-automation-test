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
    this.coverTransactionCostsCheckBox = this.donationWidgetFrameLocator.locator('#popover-fees')
    this.creditCardButton = this.donationWidgetFrameLocator.getByRole('button',{ name: 'Credit card' },)
    this.googlePayButton = this.donationWidgetFrameLocator.getByLabel('Google Pay')
    this.clickToPayButton = this.donationWidgetFrameLocator.getByRole('button',{ name: 'Bank transfer' },)
    this.bankTransferButton = this.donationWidgetFrameLocator.getByRole('button', { name: 'Back' },)
  }

  async setCoverTransactionCostsCheckBox(checked: boolean) {
    if (await this.coverTransactionCostsCheckBox.isChecked()) {
      await this.coverTransactionCostsCheckBox.setChecked(checked)
    }
  }
}
