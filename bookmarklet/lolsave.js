// Gets the hostname of the url
function hostname(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if ( match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0 ) return match[2];
}

// Check we're on the right website
if (hostname(document.location.href) === 'lolcow.farm') {
  
} else {
  alert('You need to be on lolcow.farm to use lolsave.');
}
