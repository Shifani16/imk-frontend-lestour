const header = document.querySelector('header')
const btn = document.querySelector('.btn');
const text = document.querySelector('.home-text');


window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 60)
});


function testConsole() {
    const inputText = document.querySelector(".search-input")
    console.log(inputText.value)

    form.submit();
    return false;
}

function goReview() {
    window.location.href="desti-detail.html"
}

function guideConsole() {
    const guideInput = document.querySelector(".guide-input")
    console.log(guideInput.value)

    form.submit_guide();
    return false;
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*="'+id+'"]').classList.add('active');
            })
        } 
    })
}

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open');

    document.querySelector('.navbar li').classList.toggle('shift-right');
}




// window.addEventListener('scroll', function () {
//     let value = window.scrollY;

//     btn.style.marginTop = value * 1.5 + 'px';
//     text.style.marginTop = 50 + value * -0.5 + + '%';
// })

//HOME 0
//ABOUT 460.5
//DESTINATION 1274.5
//GUIDE 1735
//OTHER 1969