import { toggleBlock, addScrollBody, deleteScrollBody } from "./toggleNav.js";
export function handleToggleCart() {
  let overlay = document.querySelector(".overlay");
  let btnCloseCart = document.querySelector(".cart__head i");
  let btnCart = document.querySelector(".header__cart");
  let cart = document.querySelector(".block__cart");
  toggleBlock(
    btnCloseCart,
    cart,
    "hide__cart",
    "display__cart",
    deleteScrollBody
  );
  toggleBlock(btnCart, cart, "display__cart", "hide__cart", addScrollBody);
  toggleBlock(
    btnCloseCart,
    cart,
    "hide__cart",
    ".display__cart",
    deleteScrollBody
  );
  toggleBlock(btnCart, overlay, "display", "hide", addScrollBody);
  toggleBlock(overlay, cart, "hide__cart", "display__cart", deleteScrollBody);
  toggleBlock(btnCloseCart, overlay, "hide", "display", deleteScrollBody);
}
