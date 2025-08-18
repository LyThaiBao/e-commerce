import { toggleBlock } from "./toggleNav.js";
export function handleToggleCart() {
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
