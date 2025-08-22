//import hàm render product sau khi xóa
import { renderProductInCart } from "../controller.js";
//import hàm tính tổng sản phẩm sau khi xóa
import { calcTotalProduct, renderTotalProductInCart } from "../controller.js";
export function deleteProduct(id) {
  let allProduct = JSON.parse(localStorage.getItem("productAddCart"));
  let deleteBtn = document.querySelectorAll(".cart__content--product button");
  //Duyet cac nut xoa
  deleteBtn.forEach((btn, index) =>
    btn.addEventListener("click", (e) => {
      //Nut nao duoc click xoa product do
      allProduct.splice(index, 1);
      localStorage.setItem("productAddCart", JSON.stringify(allProduct));
      console.log(allProduct);
      console.log(index);
      renderProductInCart();
      calcTotalProduct(renderTotalProductInCart);
    })
  );
}
