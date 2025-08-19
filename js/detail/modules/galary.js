let nextBtn = document.querySelector(".gallery__btn--next");
let prevBtn = document.querySelector(".gallery__btn--prev");

export function showSlide(index) {
  let currentSlide = index;
  //Gắn lại liên tục
  let slides = document.querySelectorAll(".gallery__slide");
  let points = document.querySelectorAll(".point__slide div");

  // ---------------- xóa tất cả các active cũ ----------------
  points.forEach((point) => {
    point.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // --------------------Thêm active vào đúng vs index--------------------------
  slides[index].classList.add("active");
  points[index].classList.add("active");
  //----------------------Gọi lại hàm khi được bấm vào next hoặc prev-----------
  nextBtn.addEventListener("click", (e) => {
    currentSlide = (currentSlide + 1) % slides.length;
    // if(currentIndex = 1) => next -> currentIndex = 0
    showSlide(currentSlide);
  });
  prevBtn.addEventListener("click", (e) => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    // if (currentIndex = 0) => prev -> currentIndex = 1
    showSlide(currentSlide);
  });
  //----------------------Gọi lại hàm khi được bấm vào point----------
  points.forEach((point, i) => {
    point.addEventListener("click", (e) => {
      showSlide(i);
    });
  });
}

