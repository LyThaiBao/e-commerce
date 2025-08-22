export async function renderFeedback(data) {
  let typeOfProduct = JSON.parse(localStorage.getItem("information")).type;
  // console.log(typeOfProduct);

  const feedbacks = data[1][typeOfProduct]; // [] thứ 2 truy cập object bằng bracket notation
  // console.log(feedbacks);

  //-------------------------Render feedback-----------------------------------------
  let containFeedback = document.querySelector(".core__feedback");
  containFeedback.innerHTML = feedbacks
    .map(
      (feedback) => `
  <span class="feedback__user--name">
    <strong style="color: var(--text-color)">Name:</strong>${feedback.userName}</span>
    <p class="feedback__content">
    <strong style="color: var(--text-color)">Nội dung:</strong> "${feedback.content}"</p>
  `
    )
    .join(" ");
  // -----------------------Handle showMore less------------------------------------

  containFeedback.nextElementSibling.addEventListener("click", (e) => {
    containFeedback.classList.toggle("active");
    if (containFeedback.classList.contains("active")) {
      containFeedback.nextElementSibling.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>Thêm`;
    } else {
    }
  });
}
