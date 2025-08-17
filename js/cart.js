document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  const subtotalEl = document.querySelector(".cart-summary p span");
  const totalEl = document.querySelector(".cart-summary strong span");

  function updateCartTotal() {
    let subtotal = 0;

    cartItems.forEach(item => {
      const price = parseFloat(item.querySelector("p").textContent.replace("$", ""));
      const qty = parseInt(item.querySelector("input").value);
      subtotal += price * qty;
    });

    const shipping = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + shipping;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  cartItems.forEach(item => {
    const qtyInput = item.querySelector("input");
    const minusBtn = item.querySelectorAll(".qty-btn")[0];
    const plusBtn = item.querySelectorAll(".qty-btn")[1];
    const removeBtn = item.querySelector(".remove-btn");

    // Quantity Input Change
    qtyInput.addEventListener("change", () => {
      if (qtyInput.value < 1) qtyInput.value = 1;
      updateCartTotal();
    });

    // Minus Button
    minusBtn.addEventListener("click", () => {
      if (qtyInput.value > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        updateCartTotal();
      }
    });

    // Plus Button
    plusBtn.addEventListener("click", () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
      updateCartTotal();
    });

    // Remove Button
    removeBtn.addEventListener("click", () => {
      item.remove();
      updateCartTotal();
    });
  });

  // Initial calculation
  updateCartTotal();
});
