(function($){
    // javascript for all pages

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

    $('document').ready(function(){
    });
})(jQuery);
