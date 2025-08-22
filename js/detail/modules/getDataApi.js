const productsApi = "https://e-commerce-z2wx.onrender.com/api/products";
const feedbackApi = "https://e-commerce-z2wx.onrender.com/api/feedback";
const cartsApi = "https://e-commerce-z2wx.onrender.com/api/cart";

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
