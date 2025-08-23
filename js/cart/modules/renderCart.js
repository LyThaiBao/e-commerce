// import hàm delete để khi render xong thì có thể xóa ngay
import { deleteProduct, renderTotalProductInCart } from "../controller.js";
// import hàm update số lượng sản phầm
import { calcTotalProduct, renderTotalProductIcon } from "../controller.js";
export function renderProductInCart() {
  let allProducts = JSON.parse(localStorage.getItem("productAddCart")) || [];
  console.log(allProducts);

  let mainCart = document.querySelector(".cart__content");
  mainCart.innerHTML = allProducts // giá trị đầu tiên là [] có nên nó ko render và ko lỗi
    .map(
      (product) => `
    <section class="cart__content--product">
        <div class="product__img">
            <img src="${product.image}" alt="" />
        </div>
        <div class="product__name">${product.name}</div>
        <span class = "product__color" style = "background-color:${product.color}; width:13px;height:10px;border-radius:100%"></span>
        <span class = "size"> Size: ${product.size}</span>
        <div class="product__quality">
        <input type="number" name="quality" id="" min="1" value="${product.quantity}" />
        </div>
        <button>DELETE</button>
    </section>
  `
    )
    .join(" ");
  // gọi hàm delete sau khi đã render xong đã đủ dom => sẵn sàn xóa
  deleteProduct();
  //gọi hàm update số lượng sản phẩm
  calcTotalProduct(renderTotalProductInCart);
  calcTotalProduct(renderTotalProductIcon);
}
