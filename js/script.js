$(document).ready(function(){
    var pos = $('.scrollHeader').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > pos ) {
             $('.scrollHeader').addClass('headerfixed').removeClass('hide');
        }else{
            $('.scrollHeader').removeClass('headerfixed').addClass('hide');
        }
    });

    var skillPos = $('#skill-container').offset().top;
    console.log('pos',skillPos,pos)
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
    /*$("form").on("submit", function () {
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
    }*/
// });

});