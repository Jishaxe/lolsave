var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

var saved_post = {
  id: -1,
  i: randomInt(5, 8)
}

module.exports = {
  'Check lolsave saves your place when clicked': function(browser) {
    browser.url('https://lolcow.farm/b/res/72686.html')
    browser.execute(lolsave)
    browser.execute(
      function(i) {
        $post = jQuery(".post.reply:nth-of-type(" + i + ")")
        $post.css({
          "background-color": "red"
        })
        jQuery('html, body').animate({
          scrollTop: $post.offset().top - $(window).height() / 2
        }, 500)

        return $post.attr('id')
      }, [saved_post.i],
      function(res) {
        saved_post.id = res.value.match(/\d\d\d\d\d/)[0]
        console.log('Tried to save ' + saved_post.id)
      })

    browser.click('#lolsave-popup-first-use a')
    browser.expect.element('.lolsave-notice').to.be.present.before(10000)
    browser.getCookie('lolsave-thread-72686', function(cookie) {
      this.assert.equal(cookie.value, saved_post.id)
    })

    browser.end()
  },
}
