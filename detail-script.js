var destiPictSmall = document.querySelector('.desti-pict-small');
const header = document.querySelector('header')

window.onscroll = function() {
    var scrollY = window.scrollY || window.pageYOffset;
    destiPictSmall.style.marginTop = (-150 + scrollY * 0.25) + 'px';
};

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open');

    document.querySelector('.navbar li').classList.toggle('shift-right');
}
