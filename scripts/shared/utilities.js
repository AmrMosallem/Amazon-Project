function loadProductDetailsPage(productId) {
    window.location.href = "product-details.html?id=" + productId;
}

function searchProducts(query) {
    if (!query) return;
    window.location.href = "amazon.html?search=" + query;
}