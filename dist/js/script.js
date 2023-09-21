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

// inisialisasi gambar buat dark mode
const gambar = document.getElementById("bima_profil");
const gambar1Src = "dist/img/bima_new.png";
const gambar2Src = "dist/img/bima_new_dark.png";

let isGambar1 = true;


darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        gambar.src = gambar2Src;
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        gambar.src = gambar1Src;
    }
    isGambar1 = !isGambar1;
});

//set toggle == mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
    '(prefers - color - scheme: dark)').matches)) {
    darkToggle.checked = true;
    gambar.src = gambar2Src;
} else {
    darkToggle.checked = false;
    gambar.src = gambar1Src;
}
