// const productId = "dd82ca78-a18b-4e2a-9250-31e67412f98d";
addHeader();
let productId = new URLSearchParams(window.location.search).get("id");
if (!productId) productId = "dd82ca78-a18b-4e2a-9250-31e67412f98d";
const product = getProduct(productId);

loadPage();

// document.getElementById("search-button").addEventListener("click", () => {
//   searchProducts(document.getElementById("search-input").value);
// })

function loadPage() {
  document.getElementById("main-product-img").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("stars-count").textContent = product.rating.stars;
  document.getElementById("rating-count").textContent = product.rating.count;
  document.getElementById("stars-img").src =
    "images/ratings/rating-" + product.rating.stars * 10 + ".png";
  document.getElementsByClassName("price")[0].textContent = parseInt(
    product.priceCents / 100
  );
  document.getElementsByClassName("price")[1].textContent = parseInt(
    product.priceCents / 100
  );

  let cents = `${product.priceCents % 100}`;
  cents.length === 1 ? (cents = cents + "0") : cents;

  document.getElementsByClassName("cents")[0].textContent = cents;
  document.getElementsByClassName("cents")[1].textContent = cents;

  let variationsContainer = document.getElementById("variations-container");

  if (product.variation) {
    variationsContainer.style.display = "flex";
    for (element in product.variation) {
      let variation = ` <div class="variation" data-variation-name="${element}">
                            <span class="variation-name" >${element}:</span>
`;
      let flag = false;
      if (element == "Color") {
        for (var value in product.variation[element]) {
          if (flag) {
            variation += `<label>
                <input type="radio" name="${element}" value="${product.variation[element][value]}">
                <span style="background-color:${product.variation[element][value]}" class="color-variation"></span>
            </label>`;
          } else {
            flag = true;
            variation += `<label>
                <input type="radio" name="${element}" value="${product.variation[element][value]}" checked>
                <span style="background-color:${product.variation[element][value]}" class="color-variation"></span>
            </label>`;
          }
        }
      } else {
        for (var value in product.variation[element]) {
          if (flag) {
            variation += `<label>
                <input type="radio" name="${element}" value="${product.variation[element][value]}">
                <span>${product.variation[element][value]}</span>
            </label>`;
          } else {
            flag = true;
            variation += `<label>
                <input type="radio" name="${element}" value="${product.variation[element][value]}" checked>
                <span>${product.variation[element][value]}</span>
            </label>`;
          }
        }
      }
      variation += `</div>`;
      variationsContainer.innerHTML += variation;
    }
    variationsContainer.innerHTML += `<div class="line"></div>`;
  }
  document.getElementById("description").textContent = product.description;

  let today = new Date();
  let freeDeliveryDate = new Date(today.setDate(today.getDate() + 3));
  let freeDeliveryDateString = `${freeDeliveryDate.toLocaleString("en-US", {
    weekday: "long",
  })}, ${freeDeliveryDate.getDate()} ${freeDeliveryDate.toLocaleString(
    "en-US",
    { month: "long" }
  )}`;

  let fastDeliveryDate = new Date(today.setDate(today.getDate() - 2));
  let fastDeliveryDateString = `${fastDeliveryDate.toLocaleString("en-US", {
    weekday: "long",
  })}, ${fastDeliveryDate.getDate()} ${fastDeliveryDate.toLocaleString(
    "en-US",
    { month: "long" }
  )}`;
  document.getElementById("delivery-date-free").textContent =
    freeDeliveryDateString;
  document.getElementById("delivery-date-fast").textContent =
    fastDeliveryDateString;

  document.querySelectorAll(".variation input").forEach((element) => {
    let variationName = element.parentElement.parentElement.getAttribute(
      "data-variation-name"
    );
    if (variationName == "Size") return;
    element.addEventListener("click", () => {
      let currentImgName = document.getElementById("main-product-img").src;
      let change = element.value.toLowerCase();
      console.log(document.querySelector(".variation input:checked").value);
      console.log(currentImgName);
      let newImgName = currentImgName;
      product.variation[variationName].forEach((element) => {
        newImgName = newImgName.replace(element.toLowerCase(), change);
      });
      if (!newImgName.includes("/products/variations"))
        newImgName = newImgName.replace("/products", "/products/variations");
      document.getElementById("main-product-img").src = newImgName;
    });
  });
  document.getElementById("add-to-cart").addEventListener("click", () => {
    addToCart();
  });

  document.getElementById("counter").textContent = getCartCounter();
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItem = {
    productId: productId,
    quantity: parseInt(document.getElementById("quantity").value),
    deliveryOptionId: 1,
  };
  if (product.variation) {
    cartItem.variation = {};
    document.querySelectorAll(".variation").forEach((element) => {
      cartItem.variation[element.getAttribute("data-variation-name")] =
        element.querySelector("input:checked").value;
    });
  }
  let exists = false;
  cart.forEach((item) => {
    if (item.productId == cartItem.productId) {
      if (
        item.variation &&
        JSON.stringify(item.variation) != JSON.stringify(cartItem.variation)
      ) {
        return;
      }
      item.quantity += cartItem.quantity;
      exists = true;
      return;
    }
  });
  if (!exists) cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("counter").textContent =
    parseInt(document.getElementById("counter").textContent) +
    cartItem.quantity;
}
