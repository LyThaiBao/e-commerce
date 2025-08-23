export function toggleBlock(
  iconClick,
  block,
  classNameAdd,
  classNameDelete,
  callback
) {
  iconClick.addEventListener("click", (e) => {
    block.classList.add(`${classNameAdd}`);
    block.classList.remove(`${classNameDelete}`);
    callback();
  });
}

export function handleToggleNav() {
  let barIcon = document.querySelector(".bar__icon");
  let btnClose = document.querySelector(".fa-xmark");
  let navigation = document.querySelector(".header__list");
  let overlay = document.querySelector(".overlay");
  toggleBlock(
    barIcon,
    navigation,
    "display__navbar",
    "hide__navbar",
    addScrollBody
  );
  toggleBlock(
    btnClose,
    navigation,
    "hide__navbar",
    "display__navbar",
    deleteScrollBody
  );
  toggleBlock(btnClose, overlay, "hide", "display", deleteScrollBody);
  toggleBlock(barIcon, overlay, "display", "hide", addScrollBody);
  toggleBlock(
    overlay,
    navigation,
    "hide__navbar",
    "display__navbar",
    deleteScrollBody
  );
  toggleBlock(overlay, overlay, "hide", "display", deleteScrollBody);
}
export function addScrollBody() {
  let body = document.querySelector("body");
  body.classList.add("no-scroll");
}
export function deleteScrollBody() {
  let body = document.querySelector("body");
  body.classList.remove("no-scroll");
}
