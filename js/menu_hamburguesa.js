document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    body.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target) && !overlay.contains(e.target)) {
            nav.classList.remove('nav-open');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    overlay.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});
