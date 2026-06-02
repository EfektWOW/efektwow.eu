window.addEventListener('scroll', function() {
    document.querySelector('.wow-header')
        .classList.toggle('wow-scrolled', window.scrollY > 30);
});

const navbar = document.querySelector('.wow-navbar');
const toggle = document.querySelector('.wow-mobile-toggle');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('wow-open');
});