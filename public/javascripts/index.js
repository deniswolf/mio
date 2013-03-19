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

        //tutorial start (start only for not a app user)
        var t = setTimeout(startTutotial,1000);

        c.loaded('index.js');
    });
})(jQuery);
var index=0,introText;
var startTutotial = function(){
    introText = "Small tutorial description text."
    introText = introText.split(' ');
    $('#tutorial').show();
    readText();
};
var readText = function(){
    $('#tutorial span:last').css({opacity:1});
    $('#tutorial').append('<span> '+introText[index]+'</span>');
    if(index == introText.length){
        return;
    }
    index++;
    setTimeout(readText,100)
}
