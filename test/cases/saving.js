var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()

module.exports = {
  'Check lolsave saves your place when clicked' : function (browser) {
    browser.init()
    browser.click('a[href="/b/index.html"]')
    browser.useXpath()
    browser.resizeWindow(1200, 1200)
    browser.click("//div[starts-with(@id, 'thread_')][1]/div[1]/p/a[3]")
    browser.useCss()
    browser.execute(lolsave)
    browser.end()
  },
}
