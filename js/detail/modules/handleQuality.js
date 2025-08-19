export function handleQuality() {
  // -----return boxInput để handle cart----------------
  let boxInput = document.querySelector(
    ".product__quantity input[name='quality']"
  );
  let btnReduce = document.querySelector(".reduce");
  let btnIncrease = document.querySelector(".increase");
  // ----------------Increase Value-------------------------
  btnIncrease.addEventListener("click", (e) => {
    boxInput.value++;
  });
  // ----------------Reduce Value-------------------------
  btnReduce.addEventListener("click", (e) => {
    boxInput.value = boxInput.value == 0 ? 0 : boxInput.value - 1;
  });
}
