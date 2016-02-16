// Gets the hostname of the url
function hostname(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if ( match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0 ) return match[2];
}

// Adds the save button on the page, right above Quick Reply
function add_save_button() {
  var a = document.createElement("a");
  var txt = document.createTextNode('lolsaved')
  a.appendChild(txt)
  a.href = 'javascript:void(0)';

  a.id = 'lolsave-btn';
  a.style.position = 'fixed';
  a.style.right = '20px';
  a.style.bottom = '100px';
  a.style.padding = '5px';
  a.style['font-size'] = '12px';
  a.style['font-family'] = 'Verdana,Arial,Helvetica,sans-serif';
  a.style.color = '#2B0F51';

  document.body.appendChild(a)
}


// Gets the save button element, returns null if not there
function get_save_button() {
  return document.getElementById('lolsave-btn');
}



// Check we're on the right website
if (hostname(document.location.href) === 'lolcow.farm') {
  // Check we're on reply mode
  if (!/https:\/\/lolcow.farm\/.+\/res\/\d+\.html/.test(document.location.href)) {
    if (!get_save_button()) {
      add_save_button();
    }
  } else {
    alert('You need to be on thread reply mode to use lolsave.')
  }
} else {
  alert('You need to be on lolcow.farm to use lolsave.');
}
