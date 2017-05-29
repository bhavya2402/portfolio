$(document).ready(function(){
    let BASE_IMG = 'assets/images/bg-img';
        $('.landing-container').css({
                            "background" : 'url("' + BASE_IMG + (1 + parseInt(Math.random() * 3)) + '.jpg") 0% 0% / 100% 100%',
                            "background-position" : 'center',
                            "background-size" : 'cover',
                        });
    var pos = $('.scrollHeader').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > pos ) {
             $('.scrollHeader').addClass('headerfixed').removeClass('hide');
             $('#scroll-top').removeClass('hide');
             $('#scroll-down').addClass('hide');
        }else{
            $('.scrollHeader').removeClass('headerfixed').addClass('hide');
             $('#scroll-top').addClass('hide');
             $('#scroll-down').removeClass('hide');
        }
    });

    var skillPos = $('#skill-container').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > (+skillPos-120)){
            $('.progress .skill').css("color", "#ffffff");
            $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
            )
        }
    });

    $('#scroll-down').on('click', function(){
        $("html, body").animate({ scrollTop: 800 }, "slow");
    });
    $('#scroll-top').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $("form").on("submit", function () {
        var isInvalid = false;
        $("input", this).each(function () {
            if (!$(this).val()) {
            isInvalid = true;
        }
    });
    if (isInvalid) {
        return false;
    }
    else{
        window.alert("Thankyou For contacting me!! Will get back to you earliest..");
    }
});

});