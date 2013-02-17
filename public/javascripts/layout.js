(function($){
    // javascript for all pages

    // AUTH events
    window.auth = {};
    window.auth.fb = {};
    window.auth.fb.status = function(){
        if (location.hash === '#fb_login_failed') { return 'failed'; }
        if (location.hash === '') { return 'unknown'; }
    };


    // fix for FB bug: https://github.com/jaredhanson/passport-facebook/issues/12#issuecomment-5913711
    if (window.location.hash && window.location.hash === "#_=_") {
        // If you are not using Modernizr, then the alternative is:
        if (window.history && history.pushState) {
            window.history.pushState("", document.title, window.location.pathname);
        } else {
            // Prevent scrolling by storing the page's current scroll offset
            var scroll = {
                top: document.body.scrollTop,
                left: document.body.scrollLeft
            };
            window.location.hash = "";
            // Restore the scroll offset, should be flicker free
            document.body.scrollTop = scroll.top;
            document.body.scrollLeft = scroll.left;
        }
    }

    //  PRETTY PRINT
    //  logging functions wrapped for use in dev mode only
    window.c = {};

    // show state of loaded components
    window.c.loaded = function logToConsole(){
        var passedMessage = Array.prototype.slice.call(arguments).join(' , '),
            message = "LOADED: "+moment().format('H:mm:ss') + ': '+passedMessage;
        console.log.call(console, message);
    };

    // print detailed info on arguments
    window.c.pp = function prettyPrint(){
        console.dir.apply(console, arguments);
    };

    // we all love old console.log
    window.c.log = function consoleLog(){
        var passedMessage = Array.prototype.slice.call(arguments).join(' , '),
            message = moment().format('H:mm:ss') + ': '+passedMessage;
        console.log.call(console, message);
    };

    window.c.error = function errorLog(){
        var passedMessage = Array.prototype.slice.call(arguments).join(' , '),
            message = 'ERROR: '+moment().format('H:mm:ss') + ': '+passedMessage;
        console.log.call(console, message);
    };

    $('document').ready(function(){
    });
})(jQuery);
