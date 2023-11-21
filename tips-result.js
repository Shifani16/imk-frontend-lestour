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

// document.addEventListener("DOMContentLoaded", function () {
//     const searchParam = new URLSearchParams(window.location.search).get("guide-input");
//     const textTitle = document.querySelector(".tips-container h2");

//     if (searchParam !== null) {
//         textTitle.textContent = "TRAVEL TIPS AT: '" + searchParam + "'";
//     }
// });

// function submitForm() {
//     const inputText = document.getElementById("guide-input").value;
//     const textTitle = document.querySelector(".tips-container h2");

//     console.log(inputText);
//     if (inputText !== "") {
//         textTitle.textContent = "TRAVEL TIPS AT: '" + inputText + "'";
//     }

//     return false;
// }