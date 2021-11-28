$(window).on('load resize orientationchange', function() {
    $('.examples__pictures').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 640) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                  dots: true,
                  speed: 1200,
                  // adaptiveHeight: true,
                  arrows: false,
                  mobileFirst: true
              });
        }
      }
  });
});

