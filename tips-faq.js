const header = document.querySelector('header')
const btn = document.querySelector('.btn');
const text = document.querySelector('.home-text');


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
