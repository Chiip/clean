$(function () {

  $(".blog__slider").slick({
    dots: true,
    appendArrows: $('.blog__container'),
    nextArrow: '<button id="next" type="button" class="blog__arrow blog__arrow_next"><img class="blog__arrow_img-next" src="img/arrowNext.svg" alt=""></button>',
    prevArrow: '<button id="prev" type="button" class="blog__arrow blog__arrow_prev"><img class="blog__arrow_img-prev"  src="img/arrowPrev.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $(".blog__slide-wrap").magnificPopup({
    type: 'image',
  });

  $(".comments__slider").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          focusOnSelect: false,
          centerMode: false,

        }
      },
    ]
  });

  $('.accordion__title').click(function (event) {
    $(this).toggleClass('accordion__active').next().toggleClass('accordion__active_content')
  })

  function checkWidth() {
    if ($('body').innerWidth() < 1100) {
      $(".navigation").removeClass('animate__animated');
      $(".navigation").removeClass('animate__bounceInDown');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });

  $('.navigation__burger').click(function (e) {
    $('.navigation__burger, .navigation__list_nav, .navigation__social_nav ').toggleClass('navigation_active');
  });
  new WOW().init();
});