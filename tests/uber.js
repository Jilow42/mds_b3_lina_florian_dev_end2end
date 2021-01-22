describe('Uber Website', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

    test('Open Uber Website', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Uber')
        .end();
    });

/*
// Exemple pour basculer sur du XPATH
.useXpath() 
   .waitForElementPresent('//button[@id="/sign-in/"]')
   .waitForElementPresent('//button[@id="/signup/"]')
// Revenir sur du CSS
.useCSS()

test('Check title page', function (browser) {
  browser
    .waitForElementVisible('body')
    .assert.titleContains('uber')
    .assert.visible('input[type=search]')
    .setValue('input[type=search]', 'nightwatch')
    .assert.visible('button[type=submit]')
    .click('button[type=submit]')
    .assert.containsText('.mainline-results', 'Nightwatch.js')
    .end();
*/


});
