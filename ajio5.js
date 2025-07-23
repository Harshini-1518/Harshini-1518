function addToCart(name, price) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: name, price: price, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(name + ' added to cart!');
    }

    function search() {
      const query = document.getElementById('searchBox').value.toLowerCase();
      if (!query) {
        alert('Please enter a search term.');
        return;
      }

      const products = document.querySelectorAll('.product-card');
      let found = false;
      products.forEach(card => {
        const productName = card.querySelector('p').textContent.toLowerCase();
        if (productName.includes(query)) {
          card.style.border = '2px solid #0a74da';
          found = true;
        } else {
          card.style.border = '1px solid #ccc';
        }
      });

      if (!found) alert('No products found matching "' + query + '".');
    }