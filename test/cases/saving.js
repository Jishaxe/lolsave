var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var saved_post = {id: -1, i: randomInt(1, 30)}

module.exports = {
  'Check lolsave saves your place when clicked' : function (browser) {
    browser.init()
    browser.url('https://lolcow.farm/b/res/71092.html')
    //console.log("//div[@class='post reply'][" + randomInt(1, 30) + "]")
    //browser.execute(lolsave)
    browser.pause(2000)
    saved_post.id = browser.execute(
        function(i) {
          $post = jQuery(".post.reply:nth-of-type(" + i + ")")

          jQuery('html, body').animate({
            scrollTop: $post.offset().top
        }, 500)

          return [$post.id]
        }, [saved_post.i])
        console.log(saved_post.id)
    browser.pause(2000)
  //  browser.useCss()
    //browser.click('#lolsave-popup-first-use a')
    //browser.expect.element('#lolsave-saved').to.be.visible.before(4000)
    browser.end()
  },
}
