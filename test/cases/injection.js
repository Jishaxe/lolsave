var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()

module.exports = {
  'Check the bookmarklet is injected successfully' : function (browser) {
    browser.init()
    browser.url('https://lolcow.farm/b/res/72686.html')
    browser.useXpath()
    browser.useCss()
    browser.execute(lolsave)
    browser.expect.element("#lolsave-indicator").to.be.present.before(1000)
    browser.end()
  },

  'Check lolsave pops up an alert when not loaded on a thread' : function (browser) {
    browser.init()
    browser.execute(lolsave)
    browser.dismissAlert()
    browser.click('a[href="/b/index.html"]')
    browser.execute(lolsave)
    browser.expect.element("#lolsave-popup-not-on-thread").to.be.present.before(1000)
    browser.end()
  },

  'Check lolsave pops up an alert when it is the first use' : function (browser) {
    browser.init()
    browser.useXpath()
    browser.url('https://lolcow.farm/b/res/72686.html')
    browser.useCss()
    browser.execute(lolsave)
    browser.expect.element("#lolsave-popup-first-use").to.be.present.before(1000)
    browser.end()
  },
}
