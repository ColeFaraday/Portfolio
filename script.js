$(document).ready(function(){
    $('a[href^="#"').on('click', function(event){
        var target = $(this.getAttribute("href"));

        if(target.length) {
            event.preventDefault();
            $("html, body").stop().animate({
                scrollTop : target.offset().top-100
            }, 1000);
        }
    });
   animateType();
    var curr = [];
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        var count = $('a[href^="#"').length-1;
    });
});

function visible(elem) {
    var top_elem = elem.offset().top,
        bot_elem = elem.offset().top + elem.outerHeight(),
        bot_screen = $(window).scrollTop() + window.innerHeight,
        top_screen = $(window).scrollTop();

    if ((bot_screen > top_elem) && (top_screen < bot_elem)) return true;
    return false;


}

function underlineLink(link) {
    $('a[href^="#"').css('border-bottom-color', 'transparent');
    link.css('border-bottom-color', 'white');
}

function animateType() {
    $('.type').each(function(){
        var str = $(this).html(),
            id = setInterval(typeKey, 100),
            element=$(this),
            i=0;

        element.empty();
        element.css('opacity', '1');
        function typeKey() {
            if (i > str.length) clearInterval(id);
            else {
                element.html('<strong>></strong>' + str.slice(0, i) + "<span id='caret'></span>");
            }
            i++;
        }
    });
}
