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
  productSize.innerHTML = `
 <strong>Size:</strong>
  <span>${currentProduct?.size[0]}</span>
  <span>${currentProduct?.size[1]}</span>
  <span>${currentProduct?.size[2]}</span>
  <span>${currentProduct?.size[3]}</span>
`;

  // ------------------------Render Detail product--------------------------------
  let detailProduct = document.querySelector(".main__detail");
  detailProduct.innerHTML = `
  <h3>Chi tiết sản phẩm</h3>
  <h4>Mô tả sản phẩm</h4>
  <div class = "text">
    <p class="content">${currentProduct.description.content}</p>
    <p class="origin">Xuất Sứ: ${currentProduct.description.origin}</p>
    <p class="material">${currentProduct.description.material}</p>
  </div>
   <div style ="color:orange; cursor:pointer" class="btn__more--less"><i style ="transform: rotate(180deg)" class="fa-solid fa-circle-chevron-down"></i>Thu gọn</div>
  `;
  let showMoreLessBtn = document.querySelector(".btn__more--less");
  showMoreLessBtn.addEventListener("click", (e) => {
    detailProduct.querySelector(".text").classList.toggle("active");
    if (detailProduct.querySelector(".text").classList.contains("active")) {
      detailProduct.lastElementChild.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>Thêm`;
    } else {
      detailProduct.lastElementChild.innerHTML = `<i  style ="transform: rotate(180deg)" class="fa-solid fa-circle-chevron-down"></i>Thu gọn`;
    }
  });
}
