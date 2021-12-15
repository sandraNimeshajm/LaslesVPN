import AOS from 'aos';

const animation = () => {
  AOS.init({
    offset: 100,
    duration: 1000,
    once: true,
  });
};

export default animation;
