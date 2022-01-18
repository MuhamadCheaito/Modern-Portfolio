let menuToggle = document.querySelector('.hamburger-button')
let sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

gsap.fromTo('.header',
    { duration: 1, opacity: 0, scale: 5 },
    { duration: 2, ease: "power3.out", opacity: 1, scale: 1 });

gsap.fromTo('.sub-title',
    { duration: 6, opacity: 0, x: -500 },
    { duration: 2, delay: 5, ease: "power1.out", opacity: 1, x: 0 });

TweenMax.set("#arrow", { xPercent: -50, yPercent: -50, transformOrigin: "center" });

var motionPath = MorphSVGPlugin.pathDataToBezier('#line', { align: "#arrow" });

var Intro = new TimelineMax({ repeat: 3, repeatDelay: 1 })
    .from("#line", 4, { drawSVG: "0%", ease: Linear.easeNone })
    .to('#arrow', 4, { bezier: { values: motionPath, type: "cubic", autoRotate: true }, ease: Linear.easeNone }, 0);