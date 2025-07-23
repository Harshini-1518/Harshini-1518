const bannerImages = [
  "ajio img.jpg"
];

let current = 0;
const slider = document.getElementById("slider-img");

function changeBanner() {
  slider.classList.add("slide-right");
  setTimeout(() => {
    slider.src = bannerImages[current];
    slider.classList.remove("slide-right");
    current = (current + 1) % bannerImages.length;
  }, 500);
}

changeBanner();
setInterval(changeBanner, 3000);


const products = [
  {
  name: "Fashor Kurta Set",
  price: "₹899 - 60% OFF",
  img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"  // Traditional kurta style
},
{
  name: "DNMX Jeans",
  price: "₹1199 - 50% OFF",
  img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80"  // Blue jeans
},
{
  name: "Levi’s Denim Jacket",
  price: "₹2999 - 45% OFF",
  img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"  // Denim jacket
},
{
  name: "GAP Kids Tee",
  price: "₹899 - 55% OFF",
  img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"  // Kids t-shirt
},
{
  name: "Adidas Shoes",
  price: "₹3199 - 40% OFF",
  img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80"  // Sneakers/shoes
},
{
  name: "BUDA JEANS CO Men Regular Fit Bomber Jacket",
  price: "₹2499 - 69% OFF",
  img: "https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=600&q=80"  // Bomber jacket
},
{
  name: "JAHAL FASHION Women Georgette Traditional Saree",
  price: "₹1399 - 30% OFF",
  img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"  // Traditional saree
},
{
  name: "RENEE Bloom Eau De Parfum | 50.0 ml",
  price: "₹699 - 10% OFF",
  img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"  // Perfume bottle
},
{
  name: "Fashor Kurta Set",
  price: "₹899 - 60% OFF",
  img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"  // Traditional kurta style
},
{
  name: "DNMX Jeans",
  price: "₹1199 - 50% OFF",
  img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80"  // Blue jeans
},
{
  name: "Levi’s Denim Jacket",
  price: "₹2999 - 45% OFF",
  img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"  // Denim jacket
},
{
  name: "PANTALOONS JUNIOR Girls Regular Fit Jeans",
  price: "₹899 - 25% OFF",
  img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80"  // Junior girls jeans
}

];

document.addEventListener('DOMContentLoaded', () => {
  const productDiv = document.getElementById("products");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    img.style.transition = "transform 0.3s";

    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = product.price;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    productDiv.appendChild(card);
  });
});