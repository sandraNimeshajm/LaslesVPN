const hamburgerMenu = () => {
  const hamburgerMenuBtn = document.querySelector('.js-menu');
  const headerContent = document.querySelector('.js-header__content');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  hamburgerMenuBtn.addEventListener('click', () => {
    headerContent.classList.toggle('active');
    hamburgerMenuBtn.classList.toggle('active');
    overlay.classList.toggle('hidden');
    body.classList.toggle('fixed');
  });


  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !headerContent.classList.contains('hidden')) {
      headerContent.classList.remove('active');
      hamburgerMenuBtn.classList.remove('active');
      body.classList.remove('fixed');
    }
  });
};

export default hamburgerMenu;
