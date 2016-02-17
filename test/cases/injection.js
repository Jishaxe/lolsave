module.exports = {
  'Check the bookmarklet is injected successfully' : function (browser) {
    browser.init()
    browser.click('a[href="/b/index.html"]')
    browser.useXpath()
    browser.resizeWindow(1200, 1200)
    browser.click("//div[starts-with(@id, 'thread_')][1]/div[1]/p/a[3]")
    browser.pause(10000)
    browser.end()
  }
}
