// index.js (minimal, no interpolation)
document.addEventListener('DOMContentLoaded', () => {
  // Navbar burger toggle
  const burger = document.querySelector('.navbar-burger');
  const menu   = document.querySelector('.navbar-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  // bulmaCarousel (if present)
  if (window.bulmaCarousel) {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    });
  }

  // bulmaSlider (if present)
  if (window.bulmaSlider) {
    bulmaSlider.attach();
  }
});
