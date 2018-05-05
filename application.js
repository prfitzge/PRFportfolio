(function() {


$('.grid-banner a').click(function(event) {
    event.preventDefault();
    var sectionSelector = $(this).attr('href'); //#portfolio
    var $section = $(sectionSelector); // $( '#portfolio' )
    var bannerHeight = $('.banner').height()
    var bannerShim = 10

    $('html, body').animate({
        scrollTop: $section.offset().top - bannerHeight - bannerShim // porftolio's position from top of viewport plus 50
    }, 500);
})

})()

// $(document).ready(function() {
//     console.log($('#portfolio').offset())
//     $('#portfolio').offset().top;
//     console.log($('#portfolio').offset())

// })
