// Affiche automatiquement l'année en cours
const yearElem = document.getElementById('year');
if (yearElem) yearElem.textContent = new Date().getFullYear();

// Fetch and display Redbubble products
async function fetchProducts() {
    try {
        const response = await fetch('/data/products.json');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <a href="${product.url}" target="_blank" class="product-link">View on Redbubble</a>
            </div>
        </div>
    `).join('');
}

// Fetch products when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts);