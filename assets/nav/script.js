window.addEventListener('scroll', function() {
    document.querySelector('.wow-header')
        .classList.toggle('wow-scrolled', window.scrollY > 30);
});