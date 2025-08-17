// Sample product data
const products = [
    {id:1, name:"Leather Bag", category:"accessories", price:45, popularity:10, img:"images/product1.jpg", date:"2025-08-01"},
    {id:2, name:"Summer Dress", category:"apparel", price:65, popularity:8, img:"images/product2.jpg", date:"2025-08-05"},
    {id:3, name:"Lipstick Set", category:"beauty", price:25, popularity:15, img:"images/product3.jpg", date:"2025-07-30"},
    {id:4, name:"Sneakers", category:"apparel", price:120, popularity:5, img:"images/product4.jpg", date:"2025-08-10"},
    {id:5, name:"Earrings", category:"accessories", price:35, popularity:12, img:"images/product5.jpg", date:"2025-08-08"}
];

let filteredProducts = [...products];
const productGrid = document.getElementById("product-grid");

// Render products
function renderProducts(list) {
    productGrid.innerHTML = "";
    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Filters
const categoryCheckboxes = document.querySelectorAll(".category-filter");
const priceRadios = document.querySelectorAll(".price-filter");
const sortSelect = document.getElementById("sort-products");

categoryCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));
priceRadios.forEach(rb => rb.addEventListener("change", applyFilters));
sortSelect.addEventListener("change", applyFilters);

function applyFilters() {
    let selectedCategories = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    let selectedPrice = Array.from(priceRadios).find(rb => rb.checked)?.value || null;

    filteredProducts = products.filter(product => {
        let categoryMatch = selectedCategories.length ? selectedCategories.includes(product.category) : true;
        let priceMatch = true;
        if(selectedPrice){
            if(selectedPrice === "0-50") priceMatch = product.price <= 50;
            else if(selectedPrice === "50-100") priceMatch = product.price > 50 && product.price <= 100;
            else if(selectedPrice === "100+") priceMatch = product.price > 100;
        }
        return categoryMatch && priceMatch;
    });

    sortProducts();
    renderProducts(filteredProducts);
}

// Sorting
function sortProducts() {
    const sortValue = sortSelect.value;
    if(sortValue === "low-high") filteredProducts.sort((a,b) => a.price - b.price);
    else if(sortValue === "high-low") filteredProducts.sort((a,b) => b.price - a.price);
    else if(sortValue === "popularity") filteredProducts.sort((a,b) => b.popularity - a.popularity);
    else if(sortValue === "newest") filteredProducts.sort((a,b) => new Date(b.date) - new Date(a.date));
}

// Initial render
renderProducts(products);
updateCartCount();
