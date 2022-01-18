let menuToggle = document.querySelector('.hamburger-button')
let sidebar =  document.querySelector('.sidebar');

menuToggle.addEventListener("click",function(){
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});