let menuToggle = document.querySelector('.hamburger-button')
let sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

const themeBtn = document.querySelector('.light-dark-button');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('canabrey.theme') ? theme = localStorage.getItem('canabrey.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = "<i class='fas fa-moon'></i>"
  } else {
    themeBtn.innerHTML = "<i class='fas fa-sun'></i>"
  }
  root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if(theme === 'dark'){
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