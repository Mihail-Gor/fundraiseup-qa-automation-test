import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class PersonalInformationPage extends BasePage {
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly emailAddressInput: Locator
  readonly payButton: Locator

  constructor(page: Page) {
    super(page)
    this.firstNameInput = this.donationWidgetFrameLocator.locator('input[name="firstName"]')
    this.lastNameInput = this.donationWidgetFrameLocator.locator('input[name="lastName"]')
    this.emailAddressInput = this.donationWidgetFrameLocator.locator('input[name="email"]')
    this.payButton = this.donationWidgetFrameLocator.getByTestId('pay-button')
  }

  async fillPersonalInformationForm(firstName:string, lastName:string, emailAddress:string) {
    await this.firstNameInput.fill(firstName)
    await this.lastNameInput.fill(lastName)
    await this.emailAddressInput.fill(emailAddress)
  }
}