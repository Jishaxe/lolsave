var fs = require('fs')
var lolsave = fs.readFileSync('lolsave.js').toString()
var lolrestore = fs.readFileSync('lolrestore.js').toString()

module.exports = {
  'Check lolsave restores your place on click' : function (browser) {
  },
}
