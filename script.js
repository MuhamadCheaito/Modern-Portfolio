let menuToggle = document.querySelector('.hamburger-button')
let sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

const themeBtn = document.querySelector('.light-dark-button');

function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.getItem('canabrey.theme') ? theme = localStorage.getItem('canabrey.theme') : null;
    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (theme === "light") {
        themeBtn.innerHTML = "<i class='fas fa-moon'></i>"
    } else {
        themeBtn.innerHTML = "<i class='fas fa-sun'></i>"
    }
    root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
    let theme = getCurrentTheme();
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    localStorage.setItem('canabrey.theme', `${theme}`);
    loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
})


gsap.fromTo('.header',
    { duration: 1, opacity: 0, scale: 5 },
    { duration: 2, ease: "power3.out", opacity: 1, scale: 1 });

gsap.fromTo('.sub-title',
    { duration: 6, opacity: 0, x: -500 },
    { duration: 2, delay: 5, ease: "power1.out", opacity: 1, x: 0 });

const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const appTitles = document.querySelectorAll('.app-title')

let activeSlide = 0
let activeTitle = 0

rightBtn.addEventListener('click', () => {
    activeSlide++
    activeTitle++

    if (activeSlide > slides.length - 1 && activeTitle > appTitles.length - 1) {
        activeSlide = 0
        activeTitle = 0
    }
    setActiveSlide()
    setActiveTitle()
})
leftBtn.addEventListener('click', () => {
    activeSlide--
    activeTitle--

    if (activeSlide < 0 && activeTitle < 0) {
        activeSlide = slides.length - 1
        activeTitle = appTitles.length - 1
    }
    setActiveSlide()
    setActiveTitle()
})

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}
function setActiveTitle() {
    appTitles.forEach(title => {
        title.classList.remove('active')
    })
    appTitles[activeTitle].classList.add('active')
}

$(document).ready(function () {
    $("html, body").animate({ scrollTop: "#" });
});