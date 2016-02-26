# lolsave
A tiny bookmarklet that saves and restores your viewing place on _lolcow.farm_

[![Jenkins](http://ci.joshbe.me:8080/job/lolsave/badge/icon)](http://ci.joshbe.me:8080/job/lolsave/)

## Getting the bookmarklets
I'm using [Bookmarkletify](https://www.npmjs.com/package/bookmarkletify) to generate the bookmarks.
Install Bookmarkletify globally:
`npm install bookmarkletify -g`

Run `npm run build`. The bookmarklets will be stored under `builds`.

## Testing
The bookmarklets are tested with the end-to-end framework, [Nightwatch.js](http://nightwatchjs.org/).
Install nightwatch globally:
`npm install nightwatch -g`

Download the selenium standalone into `test/selenium.jar`
`wget http://selenium-release.storage.googleapis.com/2.52/selenium-server-standalone-2.52.0.jar test/selenium.jar`

_Happy saving_
