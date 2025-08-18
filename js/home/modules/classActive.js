export function addClassActive() {
  let category = document.querySelectorAll(".header__choose--item");
  category.forEach((part, index) => {
    part.addEventListener("click", (e) => {
      // e.preventDefault();
      category.forEach((itemDeleteActive) => {
        itemDeleteActive.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
}
