var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()
var lolrestore = fs.readFileSync('lolrestore.js').toString()

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

var saved_post = {
  id: -1,
  i: randomInt(10, 20)
}

module.exports = {
  'Check lolrestore restores your place when clicked': function(browser) {
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
      })

    browser.click('#lolsave-popup-first-use a')
    browser.expect.element('.lolsave-notice').to.be.present.before(10000)
    browser.getCookie('lolsave-thread-72686', function(cookie) {
      this.assert.equal(cookie.value, saved_post.id)
    })

    browser.pause(1000)
    browser.execute(function() {
      jQuery('html, body').animate({
        scrollTop: 0
      }, 500)
    })

    browser.execute(lolrestore)
    browser.expect.element('.lolsave-notice').text.to.equal("lolrestored").before(1000)
    browser.execute(function(i) {
      $post = jQuery(".post.reply:nth-of-type(" + i + ")")
      $post.css({"background-color": "purple"})
      return $post.hasClass('lolsave-selected')
    }, [saved_post.i],
    function(result) {
      this.assert.equal(result.value, true)
    })

    browser.pause(10000)

    browser.end()
  },
}
