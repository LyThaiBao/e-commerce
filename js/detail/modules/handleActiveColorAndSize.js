export function addActiveColorAndSize() {
  let pointColor = document.querySelectorAll(".product__color span");
  let sizes = document.querySelectorAll(".product__size span");

  // ------------------------Xóa active và gắn sự kiện cho COLOR------------------------

  pointColor.forEach((color) => {
    color.addEventListener("click", (e) => {
      pointColor.forEach((c) => c.classList.remove("active"));
      color.classList.add("active");
      let a = color.getAttribute("style").slice(18);
      console.log(a);
    });
  });
  // ------------------------Xóa active và gắn sự kiện cho SIZE------------------------
  sizes.forEach((size) => {
    size.addEventListener("click", (e) => {
      sizes.forEach((s) => s.classList.remove("active"));
      size.classList.add("active");
      size.setAttribute("size", size.innerText);
      console.log(size.innerText);
    });
  });
}
