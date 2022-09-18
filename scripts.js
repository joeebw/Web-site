const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:600});
ScrollReveal().reveal('.cards-banner-one', {delay:600});
ScrollReveal().reveal('.cards-banner-two', {delay:600});