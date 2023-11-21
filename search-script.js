const header = document.querySelector('header')
const btn = document.querySelector('.btn');
const text = document.querySelector('.home-text');
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('section');
const imageBox = document.getElementById('PopularBox')


window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 60)
});

document.addEventListener("DOMContentLoaded", function () {
    const searchParam = new URLSearchParams(window.location.search).get("search-input");
    const textTitle = document.querySelector(".desti-content h2");

    if (searchParam !== null) {
        textTitle.textContent = "Destination Result of '" + searchParam + "'";
    }
});

function submitForm() {
    const inputText = document.getElementById("search-input").value;
    const textTitle = document.querySelector(".desti-content h2");

    console.log(inputText);
    if (inputText !== "") {
        textTitle.textContent = "Destination Result of '" + inputText + "'";
    }

    return false;
}

function goReview() {
    window.location.href="desti-detail.html"
}

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open');

    document.querySelector('.navbar li').classList.toggle('shift-right');
}