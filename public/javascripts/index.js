(function($){
    $('document').ready(function(){
    // javascript for index page
        $('#clickOk').on('click', function(){
            c.log("user clicked button");
        });


        c.loaded('index.js');
    });
})(jQuery);
