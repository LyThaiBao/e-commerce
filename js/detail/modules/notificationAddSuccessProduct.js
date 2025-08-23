export function notificationAddSuccessProduct() {
  let boxNotification = document.querySelector(
    ".main__notificationAddProduct--success"
  );
  boxNotification.classList.add("translate");
  setTimeout(() => {
    boxNotification.classList.remove("translate");
  }, 1500);
}
export function notificationMissedColor() {
  let boxNotification = document.querySelector(
    ".main__notificationAddProduct--missedColor"
  );
  boxNotification.classList.add("translate");
  setTimeout(() => {
    boxNotification.classList.remove("translate");
  }, 1500);
}
export function notificationMissedSize() {
  let boxNotification = document.querySelector(
    ".main__notificationAddProduct--missedSize"
  );
  boxNotification.classList.add("translate");
  setTimeout(() => {
    boxNotification.classList.remove("translate");
  }, 1500);
}
