$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 5;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Показати номер";
    // var lesstext = "Read less";


    $('.js-phone-conatiner').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = '<span class="bracket">' + c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span class="more-phone">' + h + '</span></span></span><a href="#" class="js-morelink">' + moretext + '</a>';

            $(this).html(html);
        }

    });

    $(".js-morelink").click(function(e){
        e.preventDefault();
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
        } else {
            $(this).addClass("less");
        }
        $(this).parent().find('.moreellipses').hide();
        $(this).parent().find('.more-phone').removeClass('more-phone');
        return false;
    });
});
