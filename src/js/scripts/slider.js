import Swiper from 'swiper/bundle';

const slider = () => {
  const swiper = new Swiper('.js-testimonials__swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.testimonials__item-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonials__item-button-next',
      prevEl: '.testimonials__item-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },

      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const swiperPartners = new Swiper('.js-partners__swiper-container', {
    slidesPerView: 5,
    spaceBetween: 64,
    loop: true,
    speed: 2000,
    freeMode: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 36,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
    },
  });
};

export default slider;
