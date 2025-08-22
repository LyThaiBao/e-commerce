import {
  renderProductInCart,
  deleteProduct,
  calcTotalProduct,
  renderTotalProductIcon,
  renderTotalProductInCart,
} from "./controller.js";
// renderProductInCart();
function start() {
  renderProductInCart();
  deleteProduct();
  calcTotalProduct(renderTotalProductIcon);
  calcTotalProduct(renderTotalProductInCart);
}
start();
