$(document).ready(function(event)
{
    let scroll_top = $('.scroll-top');
    scroll_top.hide(500);
    $(window).scroll(function()
    {
        if ($(this).scrollTop() > 200)
        {
            scroll_top.show(500);
        }
        else 
        {
            scroll_top.hide(500);
        }   
    });
    scroll_top.click(function() 
    {
        $('html').animate({scrollTop: 0}, 1000);
    });
});