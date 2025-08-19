import {
  handleToggleCart,
  handleToggleNav,
  addClassActive,
  showSlide,
  getProduct,
  renderProductDetail,
  handleQuality,
  addActiveColorAndSize,
} from "./controller.js";
let slides = document.querySelectorAll(".gallery__slide");
async function start() {
  handleToggleCart();
  handleToggleNav();
  handleQuality();
  addClassActive();
  addActiveColorAndSize();
  await getProduct(renderProductDetail);
  showSlide(0);
}

start();
