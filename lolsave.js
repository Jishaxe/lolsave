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
  if ( match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0 ) return match[2];
}

// LIB STUFF ////////
////////////////////
///////////////////


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

    $("#lolsave-popup-first-use").animate({opacity: 1}, 150)
    $("#lolsave-popup-first-use a").click(function() {
      $("#lolsave-popup-first-use").animate({opacity: 0}, 150, function() {
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

    $("#lolsave-popup-not-on-thread").animate({opacity: 1}, 150)
    $("#lolsave-popup-not-on-thread a").click(function() {
      $("#lolsave-popup-not-on-thread").animate({opacity: 0}, 150, function() {
        $(this).remove();
      })
    })
  }
}

// Grabs the post on the half of the window and saves it
function save() {
    var $post = $(document.elementFromPoint(50, $(window).height() / 2 + 10)).closest(".post.reply").get()[0]

    if ($post == null) {
      var $post = $(document.elementFromPoint(50, $(window).height() / 2 + 20)).closest(".post.reply").get()[0]
    }

    var thread_id = document.location.href.match(/\d\d\d\d\d/)[0]
    var post_id = $post.id.match(/\d\d\d\d\d/)[0]

    createCookie("lolsave-thread-" + thread_id, post_id, 30)

    $($post).addClass("lolsave-selected")
    $($post).css({"border-bottom": "2px solid #117743", "border-radius": "0 0 5px 5px", "transition": "0.2s"})

    $(".lolsave-selected").each(function() {
      if (this !== $post) {
        $(this).css({"border-bottom": "inherit", "border-radius": "inherit"})
        $(this).removeClass("lolsave-selected")
      }
    })

    $(".lolsave-notice").remove()
    $(".quick-reply-btn").before($('\
      <span class="lolsave-notice" style="opacity: 0; position: fixed; right: 20px; bottom: 105px; color: #117743;">\
        lolsaved\
      </span>\
    '))

    $(".lolsave-notice").animate({opacity:1}, 500)

    setTimeout(function() {
      $(".lolsave-notice").animate({opacity:0}, 500, function() {
        $(".lolsave-notice").remove()
      })
    }, 3000)
}


// Check we're on the right website
if (hostname(document.location.href) === 'lolcow.farm') {
  // Check we're on reply mode
  if (/https:\/\/lolcow.farm\/.+\/res\/\d+\.html/.test(document.location.href)) {
    // We're on a thread page, add an indicator to show lolsave is loaded


    if ($("#lolsave-indicator").length === 0) {
      var indicator = document.createElement("span")
      indicator.id = "lolsave-indicator"
      document.body.appendChild(indicator)

      setInterval(save, 10000, 10000)
    }

    save()

    // Check if it's our first time
    if (readCookie('lolsave-used') === null) {
      // It's our first time, show a popup
      // And set the cookie for next times
      createCookie("lolsave-used", "true", 365)
      open_first_time_popup()
    }
  } else {
    // We're not on a thread!
    if (typeof(jQuery)=='function')
      open_not_on_thread_popup()
    else
      alert('You need to be on a thread to use lolsave!')

  }
} else {
  // We're not on lolcow.farm!
  alert('You need to be on lolcow.farm to use lolsave!');
}
