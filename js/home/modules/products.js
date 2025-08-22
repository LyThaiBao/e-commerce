const productsApi = "https://e-commerce-z2wx.onrender.com/api/products";
// import { goToDeTail } from "./goToDetail.js";
// -------------------Fetch Data product---------------------

export async function getProductsData(callback) {
  try {
    const response = await fetch(productsApi);
    const products = await response.json();
    callback(products);
    return products;
  } catch (error) {
    console.log("Error");
  }
}
// ----------------------Định dạng VNĐ-----------------------------
export function formatVND(amount) {
  return amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
// -----------------------Lưu thông tin (id và type) product được click vào localstorage----------
window.saveIdProduct = (productId, productType) => {
  // window.nameFunction tức là khai báo hàm global
  localStorage.setItem(
    "information",
    JSON.stringify({ id: productId, type: productType })
  );
};

// setInterval(() => {
//   console.log(JSON.parse(localStorage.getItem("infor")));
// }, 2000);

// -----------------------Render Product ra trang home bằng data đã fetch-----------------

export function renderHomeProduct(data) {
  const productMan = data.man;
  const productGirl = data.girl;
  const productChildren = data.children;
  const allProduct = [...productMan, ...productGirl, ...productChildren];
  // vòng lặp xử lý ngẫu nhiên cần xem lại
  for (let i = 0; i < allProduct.length - 1; i++) {
    const j = Math.floor(Math.random() * (allProduct.length - i)) + i;
    [allProduct[i], allProduct[j]] = [allProduct[j], allProduct[i]];
  }
  // console.log(allProduct);

  let item = document.querySelector(".main__items");
  item.innerHTML = allProduct
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
}
// localStorage.clear();
