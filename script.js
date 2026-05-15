// Sticky Header
const header = document.querySelector(".header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Mobile Menu Toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// Close menu on link click (mobile)
document.querySelectorAll('.navlist a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    };
});

// Scroll Reveal or Active Link logic can be added here
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
