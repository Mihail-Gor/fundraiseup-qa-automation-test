import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class PersonalInformationPage extends BasePage {
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly emailAddressInput: Locator
  readonly payButton: Locator

  constructor(page: Page) {
    super(page)
    const donationWidgetFrame = this.donationWidgetFrameLocator
    this.firstNameInput = donationWidgetFrame.locator('input[name="firstName"]')
    this.lastNameInput = donationWidgetFrame.locator('input[name="lastName"]')
    this.emailAddressInput = donationWidgetFrame.locator('input[name="email"]')
    this.payButton = donationWidgetFrame.getByTestId('pay-button')
  }

  async fillPersonalInformationForm(firstName: string, lastName: string, emailAddress: string) {
    await this.firstNameInput.type(firstName)
    await this.lastNameInput.type(lastName)
    await this.emailAddressInput.type(emailAddress)
  }
}