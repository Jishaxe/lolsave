var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()

module.exports = {
  'Check the bookmarklet is injected successfully' : function (browser) {
    browser.init()
    //browser.click('a[href="/b/index.html"]')
    browser.url('https://lolcow.farm/b/res/71092.html')
    browser.useXpath()
    //browser.resizeWindow(1200, 1200)
    //browser.click("//div[starts-with(@id, 'thread_')][1]/[@class='intro']/div[1]/p/a[3]")
    browser.useCss()
    browser.execute(lolsave)
    browser.expect.element("#lolsave-indicator").to.be.present.before(1000)
    browser.end()
  },
  /*
  'Check lolsave pops up an alert when not loaded on lolcow' : function (browser) {
    browser.url('http://www.google.com')
    browser.execute(lolsave)
    browser.expect.element("#lolsave-popup-not-on-site").to.be.present.before(1000)
    browser.end()
  },*/

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
    //browser.click('a[href="/b/index.html"]')
    browser.useXpath()
    browser.url('https://lolcow.farm/b/res/71092.html')
    //browser.resizeWindow(1200, 1200)
    //browser.click("//div[starts-with(@id, 'thread_')][1]/[@class='intro']/div[1]/p/a[3]")
    browser.useCss()
    browser.execute(lolsave)
    browser.expect.element("#lolsave-popup-first-use").to.be.present.before(1000)
    browser.end()
  },
}
