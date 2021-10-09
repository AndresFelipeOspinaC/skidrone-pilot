//Responsive de nav (hambuerger)
  const menuBtn = document.querySelector(".menu-btn");
  const navegation = document.querySelector(".navegation");
  

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navegation.classList.toggle("active");
  });

// for del los videos
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");


var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

