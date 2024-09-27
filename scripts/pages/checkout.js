 addHeader();
 document.querySelector("header .features .cart").remove();

let overlay = document.querySelector(".overlay");
let summaryOrder = document.querySelector(".summary-order");
let cartItemsContainer = document.querySelector(".cart-items");
let countItmes = document.querySelector("h2.checkout span.count");
let cartDataProducts = [];
const showSummary = () => {
  summaryOrder.classList.toggle("show");
  overlay.classList.toggle("hide");
};

// setTestCartToLocalStorage();
// get data of cart from localStorage, save it in cartDataProducts var
let cartItemsStorage = JSON.parse(localStorage.getItem("cart"));
countItmes.innerHTML = cartItemsStorage.length;
for (let i = 0; i < cartItemsStorage.length; i++) {
  let id = cartItemsStorage[i].productId;
  cartDataProducts.push(products.find((e, i) => e.id == id));
  cartDataProducts[i].quantity = cartItemsStorage[i].quantity;
  cartDataProducts[i].deliveryOptionId = cartItemsStorage[i].deliveryOptionId;
}
// console.log('cartDataProducts\n',cartDataProducts);
// set order and save in localStorage
const addOrder = () => {
  fetch("https://supersimplebackend.dev/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: cartItemsStorage,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(data);
      localStorage.setItem("orders", JSON.stringify(orders));
    })
    .then(() => {
      window.location.href = "orders.html";
    })
    .catch((error) => console.log(err));
};

const showItems = () => {
  // calc date of delivery
  let d = new Date();
  let day = d.getDate();
  d.setDate(day + 8);
  let dateFree = d.toLocaleDateString("en-ca", {
    weekday: "short",
    day: "2-digit",
    month: "long",
  });
  d.setDate(day + 3);
  let dateMed = d.toLocaleDateString("en-ca", {
    weekday: "short",
    day: "2-digit",
    month: "long",
  });
  d.setDate(day + 1);
  let dateFast = d.toLocaleDateString("en-ca", {
    weekday: "short",
    day: "2-digit",
    month: "long",
  });
  cartItemsContainer.innerHTML = "";
  cartDataProducts.forEach((ele, i) => {
    cartItemsContainer.innerHTML += `
          <div class="card">
            <div class="delivery-date">
              <h2>Delivery date: <span>Tuesday, May 2</span></h2>
            </div>
            <div class="card-body">
              <div class="img">
                <img
                  src="${ele.image}"
                  alt=""
                  onclick="loadProductDetailsPage('${ele.id}');"
                  style="cursor=pointer"
                />
              </div>
              <div class="detail-product">
                <h4 class="name-product">${ele.name}</h4>
                <div class="price">$<span>${(ele.priceCents / 100).toFixed(
                  2
                )}</span></div>
                <div class="quantity">
                  Quantity:
                  <span class="decrease" onclick="decrease(${i})">-</span>
                  <span class="count">${cartItemsStorage[i].quantity}</span>
                  <span class="increase" onclick="increase(${i})">+</span>
                </div>
              </div>
              <div class="delivery-options">
                <h4>Choose a delivery option:</h4>
                <div class="options">
                  <div class="option">
                    <input type="radio" value="1" name="date${i}" id="slowly_${i}" />
                    <label for="slowly_${i}">
                      <div class="date">${dateFree}</div>
                      <div class="cost"><span>FREE</span> Shipping</div>
                    </label>
                  </div>
                  <div class="option">
                    <input type="radio" value="2" name="date${i}" id="medium_${i}" />
                    <label for="medium_${i}">
                      <div class="date">${dateMed}</div>
                      <div class="cost">$<span>4.99</span> - Shipping</div>
                    </label>
                  </div>
                  <div class="option">
                    <input type="radio" value="3" name="date${i}" id="fast_${i}" />
                    <label for="fast_${i}">
                      <div class="date">${dateFast}</div>
                      <div class="cost">$<span>9.99</span> - Shipping</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  });
};
const decrease = (i) => {
  if (cartItemsStorage[i].quantity <= 1) return;
  cartDataProducts[i].quantity--;
  cartItemsStorage[i].quantity--;
  localStorage.setItem("cart", JSON.stringify(cartItemsStorage));
  showItems();
  calcSummeryOrder();
};
const increase = (i) => {
  cartItemsStorage[i].quantity++;
  cartDataProducts[i].quantity++;
  localStorage.setItem("cart", JSON.stringify(cartItemsStorage));
  showItems();
  calcSummeryOrder();
};
const calcSummeryOrder = () => {
  // get count of items
  document.querySelector(".summary-order .cost-details .items span").innerHTML =
    cartDataProducts.length;
  // calc total cost of items without tax and delivery
  let sum = 0;
  for (let i = 0; i < cartDataProducts.length; i++) {
    sum +=
      (cartDataProducts[i].priceCents * cartDataProducts[i].quantity) / 100;
  }
  document.querySelector(
    ".summary-order .cost-details .items+ .cost span"
  ).innerHTML = sum.toFixed(2);
  // calc delivery cost
  let allInputOfDelivery = [];
  for (let i = 0; i < cartDataProducts.length; i++) {
    // console.log(document.getElementsByName(`date${i}`));
    allInputOfDelivery.push(document.getElementsByName(`date${i}`));
  }
  // console.log(allInputOfDelivery);
  let totalDeliveryCost = 0;
  const utiltyForShiping = () => {
    totalDeliveryCost = 0;
    allInputOfDelivery.forEach((e, i) => {
      e.forEach((e, j) => {
        if (cartItemsStorage[i].deliveryOptionId == e.value) {
          if (e.value == 2) totalDeliveryCost += 4.99;
          else if (e.value == 3) totalDeliveryCost += 9.99;
        }
      });
    });
    document.querySelector(
      ".summary-order .cost-details .shipping + .cost span"
    ).innerHTML = totalDeliveryCost.toFixed(2);
    document.querySelector(
      ".summary-order .tax .before-tax + .cost span"
    ).innerHTML = (totalDeliveryCost + sum).toFixed(2);
    document.querySelector(
      ".summary-order .tax .estimated-tax + .cost span"
    ).innerHTML = ((totalDeliveryCost + sum) * 0.1).toFixed(2);
    document.querySelector(
      ".summary-order .end-order .total + .cost span"
    ).innerHTML = (
      totalDeliveryCost +
      sum +
      (totalDeliveryCost + sum) * 0.1
    ).toFixed(2);
  };
  allInputOfDelivery.forEach((e, i) => {
    e.forEach((e, j) => {
      if (cartItemsStorage[i].deliveryOptionId == e.value) {
        e.checked = true;
        utiltyForShiping();
      }
      e.addEventListener("click", () => {
        cartItemsStorage[i].deliveryOptionId = e.value;
        utiltyForShiping();
        localStorage.setItem("cart", JSON.stringify(cartItemsStorage));
      });
    });
  });
};
// Fire EL Functions
showItems();
calcSummeryOrder();
// setOrder();
document.querySelector(".create-order").onclick = () => {
  addOrder();
};
