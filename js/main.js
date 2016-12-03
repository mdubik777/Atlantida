/**
 * Created by Maria on 19.04.16.
 */

$(document).ready(function(){
    var flexslider = $('.flexslider-action');
    flexslider.flexslider({
        animation: "slide",
        controlNav: true,
        slideshow: true
    });

    var fullScreenSlider = $('.flexslider-full-action');
    fullScreenSlider.flexslider({
        animation: "slide",
        controlNav: true,
        slideshow: true
    });

    var fullScreenBlogSlider = $('.flexslider-screenBlog-action');
    fullScreenBlogSlider.flexslider({
        animation: "slide",
        controlNav: true,
        slideshow: true
    });

    var fullBlogSideSlider = $('.flexslider-BlogSideBar-action');
    fullBlogSideSlider.flexslider({
        animation: "slide",
        controlNav: true,
        slideshow: true
    });


    $(function(){
        $("select").select2({
            width: '200px'
        });

    });


    var category = $('#category_action');
    var blockVisible = $('.block');

    category.click(function(e){
        blockVisible.toggle();

        e.preventDefault();
    });


    var header = $('#header');
    var windowHeight = $(window).height();

    $( window ).resize(function() {
        windowHeight = $(window).height();
    });

    var _document = $(document);
    _document.scroll(function() {
        var position = _document.scrollTop();

        if(position > windowHeight) {
            if(!header.hasClass('fixed-head')) {
                header.addClass('fixed-head');
            }

        } else {
            header.removeClass('fixed-head');
        }
    });
});



