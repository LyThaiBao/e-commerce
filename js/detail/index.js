import {
  handleToggleCart,
  handleToggleNav,
  addClassActive,
  showSlide,
  getProduct,
  renderProductDetail,
} from "./controller.js";
let slides = document.querySelectorAll(".gallery__slide");
async function start() {
  handleToggleCart();
  handleToggleNav();
  addClassActive();
  await getProduct(renderProductDetail);
  showSlide(0);
}

start();
