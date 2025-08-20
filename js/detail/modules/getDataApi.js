const productsApi = "http://localhost:3000/products";
const feedbackApi = "http://localhost:3000/feedback";
const cartsApi = "http://localhost:3000/cart";

// ---------------Function fetch Api product và feedback-----------------
export async function getProduct(callback) {
  const response = await Promise.all([
    (await fetch(productsApi)).json(),
    (await fetch(feedbackApi)).json(),
  ]);
  // fetch cùng lúc 2 api trả về data của product và feedback
  callback(response);
  return response;
}
