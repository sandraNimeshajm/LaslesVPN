import counterUp from './countup';

const obesrver = () => {
  const elements = document.querySelectorAll('.js-observe');

  const animate = (el) => {
    if (el.classList.contains('js-counter')) {
      el.classList.add('visible');
      counterUp(el, {
        duration: 3000,
      });
    }
  };

  const myObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -100px  0px',
    }
  );

  elements.forEach((el) => {
    myObserver.observe(el);
  });
};

export default obesrver;
