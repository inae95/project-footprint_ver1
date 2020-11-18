  // swiper
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 25,

    breakpoints: {
      1131: {
        slidesPerView: 5,
      },
      1130: {
        slidesPerView: 4,
      },
      930: {
        slidesPerView: 4,
      },
      901: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 3,
      },
      699: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      479: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 2000,
    },
  });
