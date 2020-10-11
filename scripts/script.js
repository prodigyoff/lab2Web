const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.top-nav');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menuButton.classList.add('open');
        navLinks.classList.add('show');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        navLinks.classList.remove('show');
        menuOpen = false;
    }
});