import { renderProductInCart } from "../controller.js";
export function handleChose() {
  let containAllProductAddCart =
    JSON.parse(localStorage.getItem("productAddCart")) || [];

  //  Lấy data trong localStorage để chuẩn bị render
  let allProductInLocalStorange =
    JSON.parse(localStorage.getItem("productAddCart")) || [];

  var productInfo = {
    name: "",
    price: 0,
    color: null,
    size: null,
    quantity: 1,
    image: null,
  };
  let pointColor = document.querySelectorAll(".product__color span");
  let sizes = document.querySelectorAll(".product__size span");

  // ------------------------Xóa active và gắn sự kiện cho COLOR------------------------
  // ====Here return color==============
  let colorChose = 0;
  pointColor.forEach((color) => {
    color.addEventListener("click", (e) => {
      pointColor.forEach((c) => c.classList.remove("active"));
      color.classList.add("active");
      // =========== Here asign value color==============
      colorChose = color
        .getAttribute("style")
        .slice(18, color.getAttribute("style").length - 1);
      productInfo.color = colorChose;
    });
  });
  // ------------------------Xóa active và gắn sự kiện cho SIZE------------------------
  // Here return size
  let sizeChose;
  sizes.forEach((size) => {
    size.addEventListener("click", (e) => {
      sizes.forEach((s) => s.classList.remove("active"));
      size.classList.add("active");
      // =========== Here asign value size==============

      sizeChose = size.innerText;
      productInfo.size = sizeChose;
    });
  });
  // ----------------Handle box input----------------
  let boxInput = document.querySelector(
    ".product__quantity input[name='quality']"
  );
  let btnReduce = document.querySelector(".reduce");
  let btnIncrease = document.querySelector(".increase");
  // ===========Here return quality==============
  let valueChose;
  // ----------------Increase Value-------------------------
  btnIncrease.addEventListener("click", (e) => {
    boxInput.value++;
    valueChose = boxInput.value;
    productInfo.quantity = valueChose;
  });
  //-----------------Typing by hand of box Input---------
  boxInput.addEventListener("change", (e) => {
    valueChose = boxInput.value;
    productInfo.quantity = valueChose;
  });
  // ----------------Reduce Value-------------------------
  btnReduce.addEventListener("click", (e) => {
    boxInput.value = boxInput.value == 1 ? 1 : boxInput.value - 1;
    // Here asign value quality
    valueChose = boxInput.value;
    productInfo.quantity = valueChose;
  });
  // Parent of detail product
  let DetailProduct = document.querySelector(".product__price").parentElement;
  //==================Here return name and price================
  let nameProduct = DetailProduct.querySelector(
    ".product__name--detail"
  ).innerText;
  productInfo.name = nameProduct;
  let priceProduct = Number(
    DetailProduct.querySelector(".product__price").innerText.trim().slice(4, 11)
  );
  productInfo.price = priceProduct;

  //============ Here return image======================
  console.log(JSON.parse(localStorage.getItem("information")));
  let img = document.querySelector(".gallery__slide img").getAttribute("src");
  productInfo.image = img;

  let btnAddCart = document
    .querySelector(".addCart")
    .addEventListener("click", (e) => {
      // kiểm tra xem có trường nào rỗng ko
      if (productInfo.color == null) {
        alert("vui long chon mau");
      } else if (productInfo.size == null) {
        alert("vui long chon size");
      } else {
        containAllProductAddCart.push({ ...productInfo }); // dùng toán tử spead để truyền bản sao, nếu ko thì
        // nó tham chiếu trực tiếp đến productInfo làm tham đổi các giá trị trước đó
        localStorage.setItem(
          "productAddCart",
          JSON.stringify(containAllProductAddCart)
        );
        renderProductInCart();
      }
    });
}
