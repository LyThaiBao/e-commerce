export function toggleBlock(iconClick, block, classNameAdd, classNameDelete) {
  iconClick.addEventListener("click", (e) => {
    block.classList.add(`${classNameAdd}`);
    block.classList.remove(`${classNameDelete}`);
  });
}

export function handleToggleNav() {
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
