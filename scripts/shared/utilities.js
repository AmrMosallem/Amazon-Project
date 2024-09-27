function loadProductDetailsPage(productId) {
  window.location.href = "product-details.html?id=" + productId;
}

function searchProducts(query) {
  if (!query) return;
  window.location.href = "amazon.html?search=" + query;
}

function addHeader() {
  let header = `    <header>
        <p class="icon" onclick="window.location.href='amazon.html'">
            ./amazon
        </p>
        <div class="search">
            <input type="text" placeholder="Search" class="search-bar" id="search-input">
            <i class='bx bx-search'></i>
        </div>
        <div class="features">
            <div class="cart" onclick = "window.location.href='checkout.html'">
                <i class='bx bx-shopping-bag'></i>
                <p>Cart <span id="counter">0</span></p>
            </div>
            <div class="order" onclick = "window.location.href='orders.html'">
                <p>Returns & Orders</p>
            </div>
        </div>
        </div>
    </header>`;
  document.body.innerHTML = header + document.body.innerHTML;
  document.getElementById("search-input").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchProducts(document.getElementById("search-input").value);
    }
  });
}
