function start() {
  handleToggleCart();
  handleToggleNav();
  getProductsData(renderHomeProduct);
}

function handleToggleNav() {
  let barIcon = document.querySelector(".bar__icon");
  let btnClose = document.querySelector(".fa-xmark");
  let navigation = document.querySelector(".header__list");
  let overlay = document.querySelector(".overlay");
  toggleBlock(barIcon, navigation, "display__navbar", "hide__navbar");
  toggleBlock(btnClose, navigation, "hide__navbar", "display__navbar");
  toggleBlock(btnClose, overlay, "hide", "display");
  toggleBlock(barIcon, overlay, "display", "hide");
  toggleBlock(overlay, navigation, "hide__navbar", "display__navbar");
  toggleBlock(overlay, overlay, "hide", "display");
}
function handleToggleCart() {
  let overlay = document.querySelector(".overlay");
  let btnCloseCart = document.querySelector(".cart__head i");
  let btnCart = document.querySelector(".header__cart");
  let cart = document.querySelector(".block__cart");
  toggleBlock(btnCloseCart, cart, "hide__cart", "display__cart");
  toggleBlock(btnCart, cart, "display__cart", "hide__cart");
  toggleBlock(btnCloseCart, cart, "hide__cart", ".display__cart");
  toggleBlock(btnCart, overlay, "display", "hide");
  toggleBlock(overlay, cart, "hide__cart", "display__cart");
  toggleBlock(btnCloseCart, overlay, "hide", "display");
}
function toggleBlock(iconClick, block, classNameAdd, classNameDelete) {
  iconClick.addEventListener("click", (e) => {
    block.classList.add(`${classNameAdd}`);
    block.classList.remove(`${classNameDelete}`);
  });
}

// ---------------------------Product-------------------------------------------
const productsApi = "http://localhost:3000/products";
const feelbackApi = "http://localhost:3000/feelback";
const commentsApi = "http://localhost:3000/cart";
async function getProductsData(callback) {
  const response = await fetch(productsApi);
  const products = await response.json();
  callback(products);
  return products;
}
function formatVND(amount) {
  return amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
function renderHomeProduct(data) {
  const productMan = data[0].man;
  const productGirl = data[1].girl;
  const productChildren = data[2].children;
  const allProduct = [...productMan, ...productGirl, ...productChildren];
  // vòng lặp xử lý ngẫu nhiên cần xem lại
  for (let i = 0; i < allProduct.length - 1; i++) {
    const j = Math.floor(Math.random() * (allProduct.length - i)) + i;
    [allProduct[i], allProduct[j]] = [allProduct[j], allProduct[i]];
  }
  console.log(allProduct);

  let item = document.querySelector(".main__items");
  item.innerHTML = allProduct
    .map(
      (product) => `
 <section class="item">
      <div class="item__img">
            <img src="${product.image[0]}" alt="" />
      </div>
      <div class="item__text">
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
function addClassActive() {
  let category = document.querySelectorAll(".header__choose--item");
  category.forEach((part, index) => {
    part.addEventListener("click", (e) => {
      e.preventDefault();
      category.forEach((itemDeleteActive) => {
        itemDeleteActive.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
}
addClassActive();
start();
