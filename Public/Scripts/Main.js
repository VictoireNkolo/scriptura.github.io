function jsDetect(){var e=document.getElementsByClassName("no-js")[0];e.classList.remove("no-js"),e.classList.add("js")}function touchDetect(){(function(){var e=document.documentElement,t="ontouchstart"in window||navigator.msMaxTouchPoints;return t?(e.classList.add("touch"),{touch:!0}):(e.classList.add("no-touch"),{touch:!1})})()}function protected(){var e=function(e){return e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1,!1};window.onload=function(){for(var t=document.getElementsByClassName("protected"),n=0,o=t.length;o>n;n++)t[n].onmousedown=e}}function externalLinks(){for(var e=document.querySelectorAll("a"),t=0,n=e.length;n>t;t++)e[t].hostname!==window.location.hostname&&e[t].setAttribute("target","_blank")}function bodyIndex(){document.body.id="index"}function cmdPrint(){function e(){return window.print(),!1}for(var t=document.getElementsByClassName("cmd-print"),n=0,o=t.length;o>n;n++)t[n].onclick=e}function unveiling(){for(var e=document.getElementsByClassName("unveiling"),t=0,n=e.length;n>t;t++)e[t].classList.add("unveiling-start")}function termsUse(){var e=document.getElementById("terms-use");if(e){var t=e.querySelectorAll("button")[0];e.style.display="block",t.onclick=function(){localStorage.setItem("termsuse","true"),e.style.display="none"},"true"===localStorage.getItem("termsuse")&&(e.style.display="none")}}jsDetect(),touchDetect(),protected(),function(e){var t=e("audio, video");if(t.length){var n=templateUri+"/Scripts/Vendors/MediaElementJS/mediaelement-and-player.min.js",o=templateUri+"/Scripts/Vendors/MediaElementJS/mediaelementplayer.css";e.getScript(n,function(){e("audio, video").mediaelementplayer()}),e("head").append('<link rel="stylesheet" href="'+o+'" media="screen">')}}(jQuery),externalLinks(),function(e){var t=e(document),n=e(".section"),o=e(".scroll-nav a"),a=e("html,body"),i=function(t){var o,a=0;return n.each(function(n){a=e(this).offset().top,t>a-100&&(o=n)}),o},s=function(){var e=t.scrollTop(),a=i(e);return n.removeClass("active").eq(a).addClass("active"),o.removeClass("active").eq(a).addClass("active"),a};t.keydown(function(t){var n=e(".section.active"),o=t.target.tagName.toLowerCase();"input"!=o&&"textarea"!=o&&(90==t.keyCode&&a.animate({scrollTop:n.prev().length?n.prev().offset().top:n.offset().top},400),83==t.keyCode&&a.animate({scrollTop:n.next().length?n.next().offset().top:n.offset().top},400))}),t.on("scroll",function(){s()}),s()}(jQuery),function(e){e(document).on("click",'a[href*="#"]:not([href="#"])',function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);t=t.length?t:e("[name="+this.hash.slice(1)+"]"),t.length&&e("html, body").animate({scrollTop:t.offset().top},400)}})}(jQuery),bodyIndex(),function(e){e("body > footer").append('<a href="" class="scroll-top"><svg xmlns="http://www.w3.org/2000/svg"><path d="M20 32v-16l6 6 6-6-16-16-16 16 6 6 6-6v16z"/></svg></a>');var t=e(".scroll-top");t.on("click",function(){return e("html, body").animate({scrollTop:0},600),!1}),e(window).scroll(function(){e(this).scrollTop()>100?t.fadeIn():t.fadeOut()})}(jQuery),function(e){var t=e('[class*="accordion"]');e(".accordion-js").addClass("accordion"),e(".accordion-js-link").addClass("accordion-link"),t.attr({id:function(e){return"accordion-"+e}}),t.find("> :nth-child(odd)").wrap('<a href=""/>'),t.find("> a *").contents().unwrap(),t.find("> :nth-child(even)").hide(),t.find("> .active").show(),t.find("> .active").prev().addClass("active"),t.find("> a").click(function(t){var n=e(this);n.toggleClass("active"),n.siblings().removeClass("active"),n.siblings('[class*="accordion"] > :nth-child(even)').slideUp(),n.next().is(":visible")||n.next().slideDown().addClass("active"),t.preventDefault()})}(jQuery),function(e){var t=e('[class*="tabs-js"]');t.addClass("tabs"),t.find("> :nth-child(even)").hide(),t.find("> :nth-child(2)").addClass("active"),t.find("> .active").show(),t.find("> :nth-child(odd)").each(function(t){e(this).wrap('<li><a href="#tab-'+t+'" id="cmd-tab-'+t+'"></a></li>')}),t.find("> li a *").contents().unwrap(),t.find("> :nth-child(even)").each(function(t){e(this).attr("id","content-cmd-tab-"+t)}),t.each(function(){e(this).children("li").insertBefore(this).wrapAll('<ul class="cmd-tabs"/>')}),e(".tabs-js-united").addClass("tabs-united");var n=e(".cmd-tabs");n.find(":first-child a").addClass("active"),n.on("click","a",function(t){var n=e(this);n.parent().parent().children().children().removeClass("active"),n.addClass("active"),n.parent().parent().next().children().removeClass("active").hide(),e("#content-"+this.id).addClass("active").show(),t.preventDefault()})}(jQuery),function(e){var t=window.location.pathname.replace(/\//g,"").replace(/\./g,"").toLowerCase(),n="tab-"+t;e('[id^="cmd-tab-"]').on("click",function(){localStorage.setItem(n,this.id)});var o=localStorage.getItem(n);if(o){var a=e('[id^="'+o+'"]');a.parent().parent().children().children().removeClass("active"),a.addClass("active"),a.parent().parent().next().children().removeClass("active").hide(),e("#content-"+o).addClass("active").show()}}(jQuery),function(e){e(document).on("focus","input, textarea",function(){var t=e(this);placeholder=t.attr("placeholder"),t.attr("placeholder","")}),e(document).on("focusout","input, textarea",function(){e(this).attr("placeholder",placeholder)})}(jQuery),function(e){e('[type="range"]').each(function(){var t=e(this);t.on("input",function(){t.next().text(t.val())}).next().text(t.val())})}(jQuery),function(e){}(jQuery),function(e){var t=e("#progress-test");e("#progress-start").on("click",function(){function e(){100>n&&(n++,t.css("width",n+"%"))}var n=t.data("value");setInterval(e,10)})}(jQuery),function(e){e(".progress div").each(function(){var t=e(this),n=t.data("value");t.css("width",n+"%")})}(jQuery),function(e){e('[class*="-focus"]').prepend('<span class="icon-enlarge"/>'),e(document).on("click",'[class*="-focus"]',function(t){e(this).find("picture").clone().css("display","inherit").fadeIn(300).appendTo("body > footer").wrap('<div class="focus-off"><div></div></div>').before('<span class="icon-shrink zoom200"/>').find("img").removeAttr("width").removeAttr("height"),e("body").css("overflow","hidden"),e(document).find(".focus-off").on("click",function(t){e(".focus-off").fadeOut(300),setTimeout(function(){e(".focus-off").remove()},300),e("body").css("overflow","visible")}),t.preventDefault()})}(jQuery),function(e){var t=e(".slideshow"),n=e(".slideshow > .cycle-item");if(n[1]){t.append('<div class="cycle-pager"/>').append('<button id="prev"/>').append('<button data-cycle-cmd="pause" data-cycle-context="#slideshow1" class="pause"/>').append('<button data-cycle-cmd="resume" data-cycle-context="#slideshow1" class="resume"/>').append('<button id="next"/>').append('<div class="slide-progress"/>');var o=t.find(".slide-progress");t.on("cycle-initialized cycle-before",function(e,t){o.stop(!0).css("width",0)}),t.on("cycle-initialized cycle-after",function(e,n){t.is(".cycle-paused")||o.animate({width:"100%"},n.timeout,"linear")}),t.on("cycle-paused",function(e,t){o.stop()}),t.on("cycle-resumed",function(e,t,n){o.animate({width:"100%"},n,"linear")});var a=e(t).find(".pause"),i=e(t).find(".resume");a.on("click",function(){e(this).css({display:"none"}),i.css({display:"block"})}),i.on("click",function(){e(this).css({display:"none"}),a.css({display:"block"})});var s=templateUri+"/Scripts/Vendors/Cycle.js";e.getScript(s,function(){e(t).cycle()})}}(jQuery),cmdPrint(),function(e){e(document).on("click","#cmd-popin",function(t){var n=e("#popin"),o=e("#popin-user");o&&e("body").css("overflow","visible"),n.fadeOut(300),setTimeout(function(){e(".ajax-window-popin").remove()},300),o.fadeOut(300),setTimeout(function(){o.addClass("hidden")},300),t.preventDefault()}),e(document).on("click","#user",function(){return e("body").css("overflow","hidden"),e("#popin-user").removeClass("hidden").fadeIn(300),!1}),e(document).on("click","body",function(t){var n=e('[id^="popin"]');n.is(t.target)||0!==n.has(t.target).length||(n.addClass("popin-error"),setTimeout(function(){n.removeClass("popin-error")},300))})}(jQuery),jQuery.fn.dropcap=function(){$('[class*="adddropcap"] p:first-child').each(function(){var e=$(this),t=e.html().replace(/(<([^>]+)>|[A-Z0-9«»"]|&amp;)/,'<span class="dropcap">$1</span>');e.html(t)})},jQuery(".dropcap").dropcap(),unveiling(),function(e){e(".addtooltips a").each(function(){var t=e(this),n=t.attr("title");t.css("position","relative"),t.on("mouseenter",function(){if(void 0===n||""===n)return!1;t.append('<div class="tooltip">'+n+"</div>"),t.attr("title","");var o=e(".tooltip");o.css({position:"absolute",opacity:"0"}),o.animate({opacity:"1"},300)}),t.on("mouseout",function(){var o=e(".tooltip");o.fadeOut(300,function(){o.remove(),t.attr("title",n)})})})}(jQuery),jQuery.fn.selectText=function(){var e=this[0],t=document.body;t.createTextRange?(range=t.createTextRange(),range.moveToElementText(e),range.select()):window.getSelection&&(selection=window.getSelection(),range=document.createRange(),range.selectNodeContents(e),selection.removeAllRanges(),selection.addRange(range))},function(e){e("pre code").each(function(){var t=e(this).data("select"),n=e(this).data("value");if(t){var o=e(this);o.wrapInner("<div/>"),n?o.prepend('<button class="button">'+n+"</button>"):o.prepend('<button class="button">Select</button>'),e(this).parent().find("button").on("click",function(){return o.find("div").selectText(),document.execCommand("copy"),!1})}})}(jQuery),function(e){e(document).on("click",'.input-password [type="checkbox"]',function(){var t=e(this);t.is(":checked")?t.siblings('[type="password"]').attr("type","text"):t.siblings('[type="text"]').attr("type","password")})}(jQuery),function(e){e(document).on("click","[data-display][data-path]",function(){e(".ajax-window").parent().parent().remove(),obj=e(this),type=obj.data("display"),path=obj.data("path"),"global"===type?(e('<div class="section"><div class="wrap"><div class="ajax-window"></div></div></div>').appendTo("main"),e.ajax({url:path+".php",complete:function(t,n){if("success"!=n)return void e('<div class="section"><div class="wrap"><div class="ajax-window"><p class="message-error">Error: File not found</p></div></div></div>').appendTo("main");var o=t.responseText;e(".ajax-window").html(o)}})):"popin"===type?(e("body").css("overflow","hidden"),e('<div class="ajax-window-popin"/>').appendTo("body"),e.ajax({url:path+".php",complete:function(t,n){if("success"!=n)return void e('<div class="section"><div class="wrap"><div class="ajax-window"><p class="message-error">Error: File not found</p></div></div></div>').appendTo("main");var o=t.responseText;e(".ajax-window-popin").html(o).append('<a href="" id="cmd-popin"/>').wrapInner('<section id="popin" class="popin"/>')}})):e.ajax({url:path+".php",complete:function(t,n){if("success"!=n)return void e('<div class="section"><div class="wrap"><div class="ajax-window"><p class="message-error">Error: File not found</p></div></div></div>').appendTo("main");var o=t.responseText;e(".ajax-window-"+type).html(o)}})})}(jQuery),function(e){e(document).on("click","#comments",function(){setTimeout(function(){e("html, body").animate({scrollTop:e("#index-comments").offset().top},600)},300)})}(jQuery),termsUse(),function(e){var t=e(".snowstorm");if(t.length){var n=templateUri+"/Scripts/Vendors/Snowstorm/snowstorm-min.js";e.getScript(n,function(){})}}(jQuery);