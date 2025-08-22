export function calcTotalProduct(callback) {
  let allProduct = JSON.parse(localStorage.getItem("productAddCart")) || [];
  let sum = allProduct.length;
  callback(sum);
}
export function renderTotalProductIcon(sum) {
  let iconNotificationCart = document.querySelector(".header__cart");
}
export function renderTotalProductInCart(sum) {
  let totalProduct = document.querySelector(".cart__total--price");
  totalProduct.innerHTML = ` <strong>Tổng Số Lượng Sản Phẩm: </strong>${sum}`;
}
