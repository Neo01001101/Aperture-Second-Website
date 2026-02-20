const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-mobile');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});


