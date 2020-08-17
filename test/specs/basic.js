const LoginPage = require('../pageobjects/LoginPage');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})

describe('the-internet-herokuapp.com login form', () => {
  it('should deny access with wrong creds', () => {
    LoginPage.open();
    LoginPage.username.setValue('foo');
    LoginPage.password.setValue('bar');
    LoginPage.submit();

    expect(LoginPage.flash).toHaveTextContaining('Your username is invalid!');
  })

  it('should allow access with correct creds', () => {
    LoginPage.open();
    LoginPage.username.setValue('tomsmith');
    LoginPage.password.setValue('SuperSecretPassword!');
    LoginPage.submit();
    
    expect(LoginPage.flash).toHaveTextContaining('You logged into a secure area!');
  })
})
