import { expect, Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class CreditCardPage extends BasePage {
  readonly cardNumberInput: Locator
  readonly expDateInput: Locator
  readonly cvcInput: Locator
  readonly continueButton: Locator
  readonly alertMessageDecision: Locator
  readonly alertMessageDescription: Locator

  constructor(page: Page) {
    super(page)
    const donationWidgetFrame = this.donationWidgetFrameLocator
    const errorAlert = donationWidgetFrame.getByTestId('tooltip-desktop-error-alert')
    this.cardNumberInput = donationWidgetFrame.frameLocator('iframe[title="Secure card number input frame"]').locator('input[name="cardnumber"]')
    this.expDateInput = donationWidgetFrame.frameLocator('iframe[title="Secure expiration date input frame"]').locator('input[name="exp-date"]')
    this.cvcInput = donationWidgetFrame.frameLocator('iframe[title="Secure CVC input frame"]').locator('input[name="cvc"]')
    this.continueButton = donationWidgetFrame.getByRole('button', { name: 'Continue' })
    this.alertMessageDecision = errorAlert.locator('p[data-qa="card-continue-error-title"]')
    this.alertMessageDescription = errorAlert.locator('p[data-qa="card-continue-error-message"]')
  }

  async fillForm(cardNumber: string, expDate: string, cvc: string) {
    await this.cardNumberInput.fill(cardNumber)
    await this.expDateInput.fill(expDate)
    await this.cvcInput.fill(cvc)
  }

  async assertAlertMessage(decisionMsg: string, descriptionMsg: string) {
    await expect(this.alertMessageDecision).toHaveText(decisionMsg)
    await expect(this.alertMessageDescription).toHaveText(descriptionMsg)
  }
}
