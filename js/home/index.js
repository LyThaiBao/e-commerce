import {
  handleToggleNav,
  handleToggleCart,
  getProductsData,
  renderHomeProduct,
  addClassActive,
} from "./controller.js";
// import { goToDeTail } from "./controller.js";
function start() {
  handleToggleCart();
  handleToggleNav();
  getProductsData(renderHomeProduct);
  addClassActive();
}

// function localStorage() {
//   let items = document.querySelectorAll(".header__choose--item");
//   let header = document.querySelector(".header");
//   items.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       console.log(header);
//     });
//   });
//   // console.log(items);
// }
// localStorage();
start();
