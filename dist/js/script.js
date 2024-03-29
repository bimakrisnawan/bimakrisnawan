// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
// import {
//     Carousel,
//     initTE,
//   } from "tw-elements";
  
//   initTE({ Carousel });

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixexNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixexNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});


//buat ngehilangin menu

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


//dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')




darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//set toggle == mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
    '(prefers - color - scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Initialization for ES Users
// import {
//     Carousel,
//     initTE,
//   } from "tw-elements";
  
//   initTE({ Carousel });