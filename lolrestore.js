// YES I KNOW MY CODE IS ALL SPAGHETTI AND VERY WET
// DON'T JUDGE ME

// LIB STUFF ////////
////////////////////
///////////////////
// Cookie manipulation stuff (from QuirksMode)
function createCookie(name, value, days) {
  var expires;

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

// Gets the hostname of the url (from stackoverflow)
function hostname(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) return match[2];
}

// LIB STUFF ////////
////////////////////
///////////////////


function restore() {
  var thread_id = document.location.href.match(/\d\d\d\d\d/)[0]
  var post_id = readCookie('lolsave-thread-' + thread_id)
  var $post = null


  if (post_id != null) {
    var $post = $("#reply_" + post_id)
    var clear_highlights = function() {
      $(".lolsave-selected").each(function() {
        $(this).css({
          "border-top": "inherit",
          "border-bottom": "inherit",
          "border-radius": "inherit"
        })

        $(this).removeClass("lolsave-selected")
      })
    }

    clear_highlights()
    $($post).addClass("lolsave-selected")
    $($post).css({
      "border-bottom": "2px solid #117743",
      "border-top": "2px solid #117743",
      "border-radius": "5px",
      "transition": "0.2s"
    })

    $("html, body").animate({
      scrollTop: $post.offset().top - $(window).height() / 2
    })

    setTimeout(clear_highlights, 5000)
  }

  var notice_txt = 'lolrestored'
  if (!$post)
    notice_txt = 'nothing to restore from'

  $(".lolsave-notice").remove()
  $(".quick-reply-btn").before($('\
      <span class="lolsave-notice" style="opacity: 0; position: fixed; right: 20px; bottom: 105px; color: #117743;">\
        ' + notice_txt + '\
      </span>\
    '))

  $(".lolsave-notice").animate({
    opacity: 1
  }, 500)

  setTimeout(function() {
    $(".lolsave-notice").animate({
      opacity: 0
    }, 500, function() {
      $(".lolsave-notice").remove()
    })
  }, 3000)
}

// Opens the popup for the first time use
function open_first_time_popup() {
  if ($("#lolsave-popup-first-use").length === 0) {
    $('body').append('<div id="lolsave-popup-first-use" style="position: fixed;   \
                                                              opacity: 0;\
                                                              width: 80vw;         \
                                                              box-sizing: border-box; \
                                                              padding: 25px;\
                                                              max-width: 600px; \
                                                              top: 10vh;           \
                                                              left: 50vw;          \
                                                              margin-left: -40vw;  \
                                                              background-color: white; \
                                                              border: 1px solid grey;">\
    <h1 style="text-align: left;">Welcome to lolsave!</h1>\
    <h2>This seems to be your first time using lolsave. It\'s simple.</h2>\
    <b>You need to be on <i>thread reply mode</i> to use lolsave.\
    <hr/>\
    <p>To save your place, hit <i>lolsave</i></p>\
    <p>To restore your place, hit <i>lolrestore</i></p>\
    <a href="javascript:void(0)" style="float: right;">Aight</a>\
    </div>')

    $("#lolsave-popup-first-use").animate({
      opacity: 1
    }, 150)
    $("#lolsave-popup-first-use a").click(function() {
      $("#lolsave-popup-first-use").animate({
        opacity: 0
      }, 150, function() {
        $(this).remove();
      })
    })
  }
}

function open_not_on_thread_popup() {
  if ($("#lolsave-popup-not-on-thread").length === 0) {
    $('body').append('<div id="lolsave-popup-not-on-thread" style="position: fixed;   \
                                                              opacity: 0;\
                                                              width: 50vw;         \
                                                              box-sizing: border-box; \
                                                              padding: 25px;\
                                                              max-width: 450px; \
                                                              top: 10vh;           \
                                                              left: 50vw;          \
                                                              margin-left: -25vw;  \
                                                              background-color: white; \
                                                              border: 1px solid grey;">\
    <h2 style="text-align: left;">You need to be on <i>thread reply mode</i> to save your place!</h2>\
    <a href="javascript:void(0)" style="float: right;">Aight</a>\
    </div>')

    $("#lolsave-popup-not-on-thread").animate({
      opacity: 1
    }, 150)
    $("#lolsave-popup-not-on-thread a").click(function() {
      $("#lolsave-popup-not-on-thread").animate({
        opacity: 0
      }, 150, function() {
        $(this).remove();
      })
    })
  }
}

// Check we're on the right website
if (hostname(document.location.href) === 'lolcow.farm') {
  // Check we're on reply mode
  if (/https:\/\/lolcow.farm\/.+\/res\/\d+\.html/.test(document.location.href)) {
    // We're on a thread page, add an indicator to show lolsave is loaded

    // Check if it's our first time
    if (readCookie('lolsave-used') === null) {
      // It's our first time, show a popup
      // And set the cookie for next times
      createCookie("lolsave-used", "true", 365)
      open_first_time_popup()
    }

    restore()
  } else {
    // We're not on a thread!
    if (typeof(jQuery) == 'function')
      open_not_on_thread_popup()
    else
      alert('You need to be on a thread to use lolsave!')

  }
} else {
  // We're not on lolcow.farm!
  alert('You need to be on lolcow.farm to use lolsave!');
}
