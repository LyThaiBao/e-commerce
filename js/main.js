let quality = document.querySelector("input[name='quality']");

const cartApi = "http://localhost:3000/cart";
async function getData(callback) {
  const response = await fetch(cartApi);
  const carts = await response.json();
  callback(carts);
}

function render(data) {
  let number = data.map((cart) => {
    quality.value = cart.quality;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getData(render);
});
