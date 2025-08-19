import { formatVND } from "../controller.js";
// -----------------Varibale lưu thông tin product của sản phẩm đã click-------------------
let informationOfProductTarget = JSON.parse(
  localStorage.getItem("information")
);

// console.log(informationOfProductTarget);
// ----------Function render ra UI------------------------------------
export function renderProductDetail(data) {
  // console.log(1);
  // -----Chỉ lấy phần data products----------------------------------
  let productsGirl = data[0].girl;
  let productsMan = data[0].man;
  let productsChildren = data[0].children;
  // -------Trộn 3 mảng ----------------------------------------------
  let allProducts = [...productsMan, ...productsGirl, ...productsChildren];
  // -----------Lấy product có thông tin lưu ở localStorage-------------
  let currentProduct = allProducts.find(
    (product) =>
      product.id === informationOfProductTarget.id &&
      product.type === informationOfProductTarget.type
  );
  // console.log(currentProduct);

  // ---------------------Show UI--------------------------
  let gallery = document.querySelector(".gallery__slider");
  let productName = document.querySelector(".product__name");
  let productPrice = document.querySelector(".product__price span");
  let productColor = document.querySelectorAll(".product__color span");
  let productSize = document.querySelector(".product__size");
  // console.log(productColor);
  // --------------------Render--------------------------------------
  // --------------------Image---------------------------------------
  gallery.innerHTML = `
  <div class="gallery__slide active">
                <img src="${currentProduct.image[0]}" alt="" />
              </div>
              <div class="gallery__slide">
                <img src="${currentProduct.image[1]}" alt="" />
     </div>
  `;
  // ---------------------Name_Price_Color-------------------------------------
  productName.innerHTML = currentProduct.name;
  productPrice.innerHTML = formatVND(currentProduct.price);
  productColor[0].style.backgroundColor =
    currentProduct.color[0] != undefined ? currentProduct.color[0] : "orange";
  productColor[1].style.backgroundColor =
    currentProduct.color[1] != undefined ? currentProduct.color[1] : "orange";
  // --------------------------Size--------------------------------------------

  return currentProduct;
}
