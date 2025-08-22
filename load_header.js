async function getHeader() {
  try {
    const response = await fetch("/header.html");
    const data = await response.text();
    document.body.insertAdjacentHTML("afterbegin", data); // Đẩy phần html vào đầu đầu body
  } catch (error) {
    console.log("Error");
  }
}

document.addEventListener("DOMContentLoaded", getHeader());
