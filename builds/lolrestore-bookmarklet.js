javascript:(function(){;function%20createCookie(name,value,days)%7Bvar%20expires;if(days)%7Bvar%20date=new%20Date;date.setTime(date.getTime()+days*24*60*60*1e3);expires=%22;%20expires=%22+date.toGMTString()%7Delse%7Bexpires=%22%22%7Ddocument.cookie=encodeURIComponent(name)+%22=%22+encodeURIComponent(value)+expires+%22;%20path=/%22%7Dfunction%20readCookie(name)%7Bvar%20nameEQ=encodeURIComponent(name)+%22=%22;var%20ca=document.cookie.split(%22;%22);for(var%20i=0;i%3Cca.length;i++)%7Bvar%20c=ca%5Bi%5D;while(c.charAt(0)===%22%20%22)c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return%20decodeURIComponent(c.substring(nameEQ.length,c.length))%7Dreturn%20null%7Dfunction%20eraseCookie(name)%7BcreateCookie(name,%22%22,-1)%7Dfunction%20hostname(url)%7Bvar%20match=url.match(/:%5C/%5C/(www%5B0-9%5D?%5C.)?(.%5B%5E/:%5D+)/i);if(match!=null&&match.length%3E2&&typeof%20match%5B2%5D===%22string%22&&match%5B2%5D.length%3E0)return%20match%5B2%5D%7Dfunction%20restore()%7Bvar%20thread_id=document.location.href.match(/%5Cd+.html/)%5B0%5D.split(%22.%22)%5B0%5D;var%20post_id=readCookie(%22lolsave-thread-%22+thread_id);var%20$post=null;if(post_id!=null)%7Bvar%20$post=$(%22#reply_%22+post_id);var%20clear_highlights=function()%7B$(%22.lolsave-selected%22).each(function()%7B$(this).css(%7B%22border-top%22:%22inherit%22,%22border-bottom%22:%22inherit%22,%22border-radius%22:%22inherit%22%7D);$(this).removeClass(%22lolsave-selected%22)%7D)%7D;clear_highlights();$($post).addClass(%22lolsave-selected%22);$($post).css(%7B%22border-bottom%22:%222px%20solid%20#117743%22,%22border-top%22:%222px%20solid%20#117743%22,%22border-radius%22:%225px%22,transition:%220.2s%22%7D);$(%22html,%20body%22).animate(%7BscrollTop:$post.offset().top-$(window).height()/2%7D);setTimeout(clear_highlights,5e3)%7Dvar%20notice_txt=%22lolrestored%22;if(!$post)notice_txt=%22nothing%20to%20restore%20from%22;$(%22.lolsave-notice%22).remove();$(%22.quick-reply-btn%22).before($('%20%20%20%20%20%20%3Cspan%20class=%22lolsave-notice%22%20style=%22opacity:%200;%20position:%20fixed;%20right:%2020px;%20bottom:%20105px;%20color:%20#117743;%22%3E%20%20%20%20%20%20%20%20'+notice_txt+%22%20%20%20%20%20%20%3C/span%3E%20%20%20%20%22));$(%22.lolsave-notice%22).animate(%7Bopacity:1%7D,500);setTimeout(function()%7B$(%22.lolsave-notice%22).animate(%7Bopacity:0%7D,500,function()%7B$(%22.lolsave-notice%22).remove()%7D)%7D,3e3)%7Dfunction%20open_first_time_popup()%7Bif($(%22#lolsave-popup-first-use%22).length===0)%7B$(%22body%22).append('%3Cdiv%20id=%22lolsave-popup-first-use%22%20style=%22position:%20fixed;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20opacity:%200;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width:%2080vw;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20box-sizing:%20border-box;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding:%2025px;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-width:%20600px;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top:%2010vh;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left:%2050vw;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin-left:%20-40vw;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color:%20white;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20border:%201px%20solid%20grey;%22%3E%20%20%20%20%3Ch1%20style=%22text-align:%20left;%22%3EWelcome%20to%20lolsave!%3C/h1%3E%20%20%20%20%3Ch2%3EThis%20seems%20to%20be%20your%20first%20time%20using%20lolsave.%20It%5C's%20simple.%3C/h2%3E%20%20%20%20%3Cb%3EYou%20need%20to%20be%20on%20%3Ci%3Ethread%20reply%20mode%3C/i%3E%20to%20use%20lolsave.%20%20%20%20%3Chr/%3E%20%20%20%20%3Cp%3ETo%20save%20your%20place,%20hit%20%3Ci%3Elolsave%3C/i%3E%3C/p%3E%20%20%20%20%3Cp%3ETo%20restore%20your%20place,%20hit%20%3Ci%3Elolrestore%3C/i%3E%3C/p%3E%20%20%20%20%3Ca%20href=%22javascript:void(0)%22%20style=%22float:%20right;%22%3EAight%3C/a%3E%20%20%20%20%3C/div%3E');$(%22#lolsave-popup-first-use%22).animate(%7Bopacity:1%7D,150);$(%22#lolsave-popup-first-use%20a%22).click(function()%7B$(%22#lolsave-popup-first-use%22).animate(%7Bopacity:0%7D,150,function()%7B$(this).remove()%7D)%7D)%7D%7Dfunction%20open_not_on_thread_popup()%7Bif($(%22#lolsave-popup-not-on-thread%22).length===0)%7B$(%22body%22).append('%3Cdiv%20id=%22lolsave-popup-not-on-thread%22%20style=%22position:%20fixed;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20opacity:%200;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width:%2050vw;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20box-sizing:%20border-box;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding:%2025px;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-width:%20450px;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top:%2010vh;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left:%2050vw;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin-left:%20-25vw;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color:%20white;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20border:%201px%20solid%20grey;%22%3E%20%20%20%20%3Ch2%20style=%22text-align:%20left;%22%3EYou%20need%20to%20be%20on%20%3Ci%3Ethread%20reply%20mode%3C/i%3E%20to%20save%20your%20place!%3C/h2%3E%20%20%20%20%3Ca%20href=%22javascript:void(0)%22%20style=%22float:%20right;%22%3EAight%3C/a%3E%20%20%20%20%3C/div%3E');$(%22#lolsave-popup-not-on-thread%22).animate(%7Bopacity:1%7D,150);$(%22#lolsave-popup-not-on-thread%20a%22).click(function()%7B$(%22#lolsave-popup-not-on-thread%22).animate(%7Bopacity:0%7D,150,function()%7B$(this).remove()%7D)%7D)%7D%7Dif(hostname(document.location.href)===%22lolcow.farm%22)%7Bif(/https:%5C/%5C/lolcow.farm%5C/.+%5C/res%5C/%5Cd+%5C.html/.test(document.location.href))%7Bif(readCookie(%22lolsave-used%22)===null)%7BcreateCookie(%22lolsave-used%22,%22true%22,365);open_first_time_popup()%7Drestore()%7Delse%7Bif(typeof%20jQuery==%22function%22)open_not_on_thread_popup();else%20alert(%22You%20need%20to%20be%20on%20a%20thread%20to%20use%20lolsave!%22)%7D%7Delse%7Balert(%22You%20need%20to%20be%20on%20lolcow.farm%20to%20use%20lolsave!%22)%7D;})()
