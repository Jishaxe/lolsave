module.exports = {
  'Check the bookmarklet is injected successfully' : function (browser) {
    browser.init()
    browser.click('a[href="/b/index.html"]')
    browser.pause(3000)
    browser.click('.post.op:nth-of-type(1) a[href^="\/b\/res\/"]')
    browser.pause(3000)
    browser.end()
  }
}
