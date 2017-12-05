var curr,
    override=-1;

$(document).ready(function(){
    $('a[href^="#"').on('click', function(event){
        var target = $(this.getAttribute("href"));
        override = $(this);

        if(target.length) {
            event.preventDefault();
            $("html, body").stop().animate({
                scrollTop : target.offset().top-100
            }, 1000, function() { override=-1 });
        }
    });

    currLink();
    $(window).scroll(currLink);

   resizeShowcase(); 
   $(window).resize(function() {
        resizeShowcase(); 
   });
   animateType();
});

function animateType() {
    var time = 0;
    $('.type').each(function(i, e) {
       setTimeout(function() {
           var id = setInterval(typeKey, 100),
               str = $(e).html(),
               i = 0;

           $(e).empty();
           $(e).css('opacity', '1');
           function typeKey() {
               if (i > str.length) clearInterval(id);
               else {
                   $(e).html('<strong>></strong>' + str.slice(0, i) + "<span id='caret'></span>");
               }
               i++;
           }
       }, i*500);
    });
}
function resizeShowcase() {
    $('.showcase').each(function() {
        var cw = $(this).width();
        $(this).css('height',cw*3/4+'px');
    });
}

function currLink() {
    var scrollPos = $(document).scrollTop();
    
    $('.link').each(function(i, el) {
        var link = $($(el).attr('href'));
        if (aboveCenter(link)) curr=el;
    });
    $('.link').css('border-color', 'transparent');
    if (override != -1) override.css('border-color', '#6FB8B9');
    else $(curr).css('border-color', '#6FB8B9');


}

function aboveCenter(elem) {
    var top_elem = elem.offset().top,
        bot_elem = elem.offset().top + elem.outerHeight(),
        mid_screen = $(window).scrollTop() + window.innerHeight/2,
        top_screen = $(window).scrollTop();

    if ((mid_screen >= top_elem) && (top_screen <= bot_elem)) return true;
    return false;

}
