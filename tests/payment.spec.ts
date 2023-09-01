import { test } from '@playwright/test'
import { MainPage } from '../page-objects/MainPage'
import { SecureDonationPage } from '../page-objects/SecureDonationPage'
import { VISA } from '../testData/VISA'
import { PaymentOptionPage } from '../page-objects/PaymentOptionPage'
import { CreditCardPage } from '../page-objects/CreditCardPage'
import { PersonalInformationPage } from '../page-objects/PersonalInformationPage'

test.describe('Payment Scenarios', async () => {
  let mainPage: MainPage
  let secureDonationPage: SecureDonationPage
  let paymentOptionPage: PaymentOptionPage
  let creditCardPage: CreditCardPage
  let personalInformationPage: PersonalInformationPage

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    secureDonationPage = new SecureDonationPage(page)
    paymentOptionPage = new PaymentOptionPage(page)
    creditCardPage = new CreditCardPage(page)
    personalInformationPage = new PersonalInformationPage(page)
    await mainPage.openMainPage()
  })
  test.afterEach(async ({ page }) => {
    await page.close()
  })
  test('Payment Failure - Credit Card Declined', async ({ page }) => {
    await mainPage.clickOnGiveNowButton()
    await secureDonationPage.monthlyButton.click()
    await secureDonationPage.selectDonationCurrency(VISA.currency, VISA.amount)
    await secureDonationPage.donateMonthlyButton.click()
    await paymentOptionPage.setCoverTransactionCostsCheckBox(false)
    await paymentOptionPage.creditCardButton.click()
    await creditCardPage.fillForm(VISA.cardNumber, VISA.expDate, VISA.cvc)
    await creditCardPage.continueButton.click()
    await personalInformationPage.fillPersonalInformationForm(VISA.firstName, VISA.lastName, VISA.email)
    await personalInformationPage.payButton.click()
    await creditCardPage.assertAlertMessage('Your card was declined', 'Your card was declined. Your request was in live mode, but used a known test card.')
  })
  test('Payment Failure - Credit Card Declined - Duplicate', async ({ page }) => {
    await mainPage.clickOnGiveNowButton()
    await secureDonationPage.monthlyButton.click()
    await secureDonationPage.selectDonationCurrency(VISA.currency, VISA.amount)
    await secureDonationPage.donateMonthlyButton.click()
    await paymentOptionPage.setCoverTransactionCostsCheckBox(false)
    await paymentOptionPage.creditCardButton.click()
    await creditCardPage.fillForm(VISA.cardNumber, VISA.expDate, VISA.cvc)
    await creditCardPage.continueButton.click()
    await personalInformationPage.fillPersonalInformationForm(VISA.firstName, VISA.lastName, VISA.email)
    await personalInformationPage.payButton.click()
    await creditCardPage.assertAlertMessage(
      'Your card was declined',
      'Your card was declined. Your request was in live mode, but used a known test card.')
  })
})
