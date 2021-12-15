import $, { jQuery } from 'jquery';

window.$ = $;
window.jQuery = jQuery;

const stickyHeader = () => {
  const header = document.querySelector('.js-header');
  const sticky = header.offsetTop;

  function checkCurrentPosition() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    }
  }
  checkCurrentPosition();

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
  window.onscroll = myFunction;

  $(() => {
    let lastScrollTop = 0;
    const delta = 15;
    $(window).scroll((event) => {
      const st = $(window).scrollTop();

      if (Math.abs(lastScrollTop - st) <= delta) return;
      if (st > lastScrollTop && lastScrollTop > 0) {
        // downscroll code
        $('header').addClass('hide-on-scroll');
      } else {
        // upscroll code
        $('header').removeClass('hide-on-scroll');
      }
      lastScrollTop = st;
    });
  });
};

export default stickyHeader;
