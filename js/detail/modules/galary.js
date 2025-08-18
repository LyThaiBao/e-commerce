let nextBtn = document.querySelector(".gallery__btn--next");
let prevBtn = document.querySelector(".gallery__btn--prev");

export function showSlide(index) {
  let currentSlide = index;
  //Gắn lại liên tục
  let slides = document.querySelectorAll(".gallery__slide");
  let points = document.querySelectorAll(".point__slide div");

  points.forEach((point) => {
    point.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
    // console.log(slides);
  });

  slides[index].classList.add("active");
  points[index].classList.add("active");
  nextBtn.addEventListener("click", (e) => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  prevBtn.addEventListener("click", (e) => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}

// --------------addEventListenInner-------------
