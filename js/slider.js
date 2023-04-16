new Swiper('.description__block', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  // effect: 'fade',
  navigation: {
    nextEl: '.description__arrow',
    // prevEl: '.reviews__arrow_left',
  },
});
