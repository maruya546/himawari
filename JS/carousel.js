'use strict';

{
  const images = document.querySelectorAll('.scale img');
  const navContainer = document.querySelector('.nav-container');
  const ul = document.querySelector('.scale');
  const slides = ul.children;
  let currentIndex = 0;

  images.forEach((_, index) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      currentIndex = index;
      updateSlide();
    });
    navContainer.appendChild(button);
  });

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    document.querySelectorAll('.nav-container button').forEach((button, index) => {
      button.style.backgroundColor = index === currentIndex ? '#000' : '#fff';
    });
  }


  function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  }

  setInterval(autoSlide, 3000);
  updateSlide();

}

