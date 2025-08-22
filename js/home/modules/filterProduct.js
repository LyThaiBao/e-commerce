import { formatVND } from "../controller.js";
import { renderHomeProduct } from "../controller.js";
export async function filterProduct(data) {
  console.log(data);

  let filterBox = document.getElementById("filterProduct");
  let containProduct = document.querySelector(".main__items");
  filterBox.addEventListener("change", (e) => {
    var valueSelected = filterBox.value;
    console.log(valueSelected);
    if (valueSelected != "Tat ca danh muc") {
      containProduct.innerHTML = data[valueSelected]
        .map(
          (product) => `
    <section class="item" onclick = "saveIdProduct(${product.id},'${
            // chỗ '${product.type}' cần dùng ngoặc ' '
            product.type
          }')">
          <a href="./detail.html"  class="item__img">
                <img src="${product.image[0]}" alt="" />
          </a>
          <div class="item__text" >
              <div class="item__name">${product.name}</div>
              <div class="item__para">
                <span>${product.ranting}
                <i class="fa-solid fa-star" style  ="color:yellow;"></i>
                </span>
                <span>${product.sold}</span>
              </div>
              <div class="item__price"><strong>${formatVND(
                product.price
              )}</strong></div>
            </div>
      </section>
    `
        )
        .join(" ");
    } else {
      renderHomeProduct(data);
    }
  });
}
