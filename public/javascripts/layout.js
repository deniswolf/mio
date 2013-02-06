(function($){
    $('document').ready(function(){
    // javascript for all pages

    //  PRETTY PRINT
    //  logging functions wrapped for use in dev mode only
        window.c = {};

        // show state of loaded components
        window.c.loaded = function logToConsole(){
            console.log.apply(console, Array.prototype.slice.call(arguments));
        };

        // print detailed info on arguments
        window.c.pp = function prettyPrint(){
            console.dir.apply(console, arguments);
        };

        // we all love old console.log
        window.c.log = function consoleLog(){
            console.log.apply(console, arguments);
        };


    });
})(jQuery);
