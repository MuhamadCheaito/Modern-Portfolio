let menuToggle = document.querySelector('.hamburger-button')
let sidebar =  document.querySelector('.sidebar');

menuToggle.addEventListener("click",function(){
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

gsap.fromTo(".header", 
            {duration: 1, opacity: 0, scale: 2},
            {duration: 2,ease: "bounce.out", opacity: 1, scale: 1});