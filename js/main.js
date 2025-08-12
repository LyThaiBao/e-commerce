function handleToggle() {
  let barIcon = document.querySelector(".bar__icon");
  let btnClose = document.querySelector(".fa-xmark");
  let btnCloseCart = document.querySelector(".cart__head i");
  let navigation = document.querySelector(".header__list");
  let overlay = document.querySelector(".overlay");
  let btnCart = document.querySelector(".header__cart");
  let cart = document.querySelector(".block__cart");
  toggleBlock(barIcon, navigation, "display__navbar", "hide__navbar");
  toggleBlock(btnClose, navigation, "hide__navbar", "display__navbar");
  toggleBlock(btnClose, cart, "hide__cart", "display__cart");
  toggleBlock(btnClose, overlay, "hide", "display");
  toggleBlock(barIcon, overlay, "display", "hide");
  toggleBlock(overlay, navigation, "hide__navbar", "display__navbar");
  toggleBlock(overlay, overlay, "hide", "display");
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
handleToggle();
