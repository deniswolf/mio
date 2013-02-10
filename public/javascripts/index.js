(function($){
    $('document').ready(function(){
    // javascript for index page
        // loading and auth
        if (window.auth.fb.status() === 'failed'){
            c.error('facebook auth failed');
        }

        // events
        $('#clickOk').on('click', function(){
            c.log("user clicked button");
            window.location.href = '/auth/facebook';
        });


        c.loaded('index.js');
    });
})(jQuery);
