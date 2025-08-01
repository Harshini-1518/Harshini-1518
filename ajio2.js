const cartBtn = document.getElementById("cartBtn");
const cartDropdown = document.getElementById("cartDropdown");
const cartCount = document.getElementById("cartCount");
const categoryLinks = document.querySelectorAll(".category-link");
const categoryModal = document.getElementById("categoryModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalProducts = document.getElementById("modalProducts");
const allProducts = document.getElementById("allProducts");
const searchBox = document.getElementById("searchBox");

let cart = [];

function updateCartUI() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartDropdown.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let html = "";
    let total = 0;
    cart.forEach((item, index) => {
      html += `
        <div class="cart-item">
          <p>${item.name}</p>
          <p>₹${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
      total += item.price;
    });
    html += `<div class="cart-total"><strong>Total: ₹${total}</strong></div>`;
    cartDropdown.innerHTML = html;
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
  cartDropdown.style.display = "block";
}

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  updateCartUI();
};

cartBtn.addEventListener("click", () => {
  cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", (event) => {
  if (!event.target.closest(".cart-container") && event.target !== cartBtn) {
    cartDropdown.style.display = "none";
  }
});

function search() {
  const query = searchBox.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    const name = product.querySelector("p").innerText.toLowerCase();
    product.style.display = name.includes(query) ? "" : "none";
  });
}
window.search = search; 
categoryLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const category = link.getAttribute("data-category");
    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + " Products";

    modalProducts.innerHTML = "";
    const products = allProducts.querySelectorAll(`.product-card[data-category="${category}"]`);
    products.forEach(prod => {
      const clone = prod.cloneNode(true);
      const btn = clone.querySelector(".add-to-cart");
      btn.addEventListener("click", () => {
        const name = clone.querySelector("p").innerText;
        const priceText = clone.querySelector("span").innerText.replace("₹", "").trim();
        const price = parseInt(priceText, 10);
        addToCart(name, price);
      });
      modalProducts.appendChild(clone);
    });

    categoryModal.style.display = "block";
  });
});


closeModal.addEventListener("click", () => {
  categoryModal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === categoryModal) {
    categoryModal.style.display = "none";
  }
});

document.querySelectorAll("#allProducts .product-card .add-to-cart").forEach(button => {
  button.addEventListener("click", e => {
    const productCard = e.target.closest(".product-card");
    const name = productCard.querySelector("p").innerText;
    const priceText = productCard.querySelector("span").innerText.replace("₹", "").trim();
    const price = parseInt(priceText, 10);
    addToCart(name, price);
  });
});
updateCartUI();
