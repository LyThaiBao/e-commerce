import { formatVND } from "../controller.js";
// -----------------Varibale lưu thông tin product của sản phẩm đã click đã được lưu ở localStorage-------------------
let informationOfProductTarget = JSON.parse(
  localStorage.getItem("information")
);

// ----------Function render ra UI------------------------------------
export function renderProductDetail(data) {
  console.log(data);

  // -----Chỉ lấy phần data products----------------------------------
  let productsGirl = data[0].girl;
  let productsMan = data[0].man;
  let productsChildren = data[0].children;
  // -------Trộn 3 mảng sản phẩm  man , girl, children ----------------------------------------------
  let allProducts = [...productsMan, ...productsGirl, ...productsChildren];
  // -----------Lấy product có thông tin lưu ở localStorage-------------
  let currentProduct = allProducts.find(
    (product) =>
      product.id === informationOfProductTarget.id &&
      product.type === informationOfProductTarget.type
  );

  // ---------------------Show UI--------------------------
  let gallery = document.querySelector(".gallery__slider");
  let productName = document.querySelector(".product__name--detail");
  let productPrice = document.querySelector(".product__price span");
  let productColor = document.querySelectorAll(".product__color span");
  let productSize = document.querySelector(".product__size");
  let containDetail = document.querySelector(".main__detail--product");
  console.log(containDetail);

  // --------------------Render--------------------------------------
  // --------------------Image of gallery---------------------------------------
  gallery.innerHTML = `
  <div class="gallery__slide active">
                <img src="${currentProduct.image[0]}" alt="" />
              </div>
              <div class="gallery__slide">
                <img src="${currentProduct.image[1]}" alt="" />
     </div>
  `;
  // ---------------------Render Text-------------------------------------
  containDetail.innerHTML = `
 <h1 class="product__name--detail">${currentProduct.name}</h1>
            <div class="product__price">
              <strong>Giá:</strong>
              <span class="">${formatVND(currentProduct.price)}</span>
            </div>
            <div class="product__color">
              <strong>Màu:</strong>
              <span style = "background-color:${
                currentProduct.color[0]
              }" class=""></span>
              <span  style ="background-color:${
                currentProduct.color[1]
              }" class=""></span>
            </div>
            <div class="product__size">
              <strong>Size:</strong>
              <span class="">${currentProduct.size[0]}</span>
              <span class="">${currentProduct.size[1]}</span>
              <span class="">${currentProduct.size[2]}</span>
              <span class="">${currentProduct.size[3]}</span>
            </div>
            <div class="product__quantity">
              <strong>Số Lượng</strong>
              <button class="reduce">-</button>
              <input
                
                type="number"
                value="1"
                name="quality"
                min="1"
              />
              <button class="increase">+</button>
            </div>
            <div class="product__cta">
              <div class="addCart" style="background-color: #eee">Thêm vào giỏ hàng</div>
              <div class="buyNow">Mua Ngay</div>
            </div>
`;
  // ------------------------Render Description product--------------------------------
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
