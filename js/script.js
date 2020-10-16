$('.header-slider').slick({
    prevArrow: '<img src="img/arrow-left.svg" class="arrow-prev slider-arrow header-arrow">',
    nextArrow: '<img src="img/arrow-right.svg" class="arrow-next slider-arrow header-arrow">',
    asNavFor: '.header-dots',
    infinite: true,
    speed: 200
});


$('.header-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.header-slider',
    focusOnSelect: true,
    speed: 200
});

$('.server-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow: '<img src="img/arrow-left.svg" class="arrow-prev slider-arrow sect-arrow">',
    nextArrow: '<img src="img/arrow-right.svg" class="arrow-next slider-arrow sect-arrow">',
    asNavFor: '.server__map',
    responsive: [
            {
              breakpoint: 1121,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 705,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 470,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
})


$('.server__map').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.server-slider',
    arrows: false,
    responsive: [
            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 705,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 470,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
})

$('.looks-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="img/arrow-left.svg" class="arrow-prev slider-arrow sect-arrow">',
    nextArrow: '<img src="img/arrow-right.svg" class="arrow-next slider-arrow sect-arrow">'
})
