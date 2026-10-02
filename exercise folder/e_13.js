let timeOutId;

export function e13_showAdded_prompt(productId) {
  clearTimeout(timeOutId);

  timeOutId = setTimeout(() => {
    document
      .querySelector(`.js-added-to-cart-${productId}`)
      .classList.remove("show-added");
  }, 1000 * 2);

  document
    .querySelector(`.js-added-to-cart-${productId}`)
    .classList.add("show-added");

}

export function e13_useSelectorElementQuantity(productId) {
  let quantity = document.querySelector(`.js-quantity-selector-${productId}`);
  quantity = Number(quantity.value);
  return quantity;
}
