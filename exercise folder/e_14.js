import { e14_updateQuantity } from "../data/cart.js";
import { e14_updateCartQuantity } from "../script/checkout.js";

function addClassToUpdateLInk() {
  document
    .querySelectorAll(".js-update-quantity-link")
    .forEach((updateLink) => {
      const productId = updateLink.dataset.productId;

      updateLink.addEventListener("click", () => {
        document
          .querySelector(`.js-cart-item-container-${productId}`)
          .classList.add("is-editing-quantity");
      });
    });
}

function inputAndSaveLinkInteractive() {
  document.querySelectorAll(".js-save-quantity-link").forEach((saveLink) => {
    const productId = saveLink.dataset.productId;
    saveLink.addEventListener("click", () => {
      document
        .querySelector(`.js-cart-item-container-${productId}`)
        .classList.remove("is-editing-quantity");

      const newQuantity = Number(
        document.querySelector(`.js-quantity-input-${productId}`).value,
      );
      
      if (newQuantity === parseInt(newQuantity)) {
        document.querySelector(`.js-quantity-label-${productId}`).innerHTML =
          newQuantity;
          
        e14_updateQuantity(productId, newQuantity);
        e14_updateCartQuantity();
      }
    });
  });
}

export function e14_codeUpdForUpateLink() {
  addClassToUpdateLInk();
  inputAndSaveLinkInteractive();
}
