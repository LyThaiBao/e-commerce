import {
  handleToggleCart,
  handleToggleNav,
  addClassActive,
  showSlide,
  getProduct,
  renderProductDetail,
  handleChose,
  renderFeedback,
} from "./controller.js";

async function start() {
  handleToggleCart();
  handleToggleNav();
  addClassActive();
  getProduct(renderFeedback);
  await getProduct(renderProductDetail);
  showSlide(0);
  handleChose();
}

start();
