import {
  renderProductInCart,
  deleteProduct,
  calcTotalProduct,
  renderTotalProductIcon,
  renderTotalProductInCart,
} from "./controller.js";
function start() {
  renderProductInCart();
  deleteProduct();
  calcTotalProduct(renderTotalProductIcon);
  calcTotalProduct(renderTotalProductInCart);
}
document.addEventListener("DOMContentLoaded", start);
