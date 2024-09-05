// Set a test cart in local storage (for testing pages without an active cart)
function setTestCartToLocalStorage() {
  localStorage.setItem(
    "cart",
    JSON.stringify([
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 1,
        deliveryOptionId: "1",
      },
      {
        productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        quantity: 1,
        deliveryOptionId: "3",
        variation: {
          Color: "Yellow",
          Size: "S",
        },
      },
      {
        productId: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        quantity: 1,
        deliveryOptionId: "2",
        variation: {
          Set: "6-Piece",
        },
      },
    ])
  );
}

// Set a test order in local storage (for testing pages without an active order)
function setTestOrdersToLocalStorage() {
  localStorage.setItem(
    "orders",
    JSON.stringify([
      {
        id: "cc410ee3-6874-843d-b2b9-762149a56891",
        orderTime: "2024-09-05T21:32:42.300Z",
        totalCostCents: 8247,
        products: [
          {
            productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
            quantity: 1,
            estimatedDeliveryTime: "2024-09-9T21:32:42.300Z",
            variation: {
              Color: "Yellow",
              Size: "S",
            },
          },
          {
            productId: "77919bbe-0e56-475b-adde-4f24dfed3a04",
            quantity: 1,
            estimatedDeliveryTime: "2024-09-11T21:32:42.300Z",
            variation: { Set: "6-Piece" },
          },
        ],
      },
      {
        id: "daab580c-a996-4335-a98b-1e823d650c89",
        orderTime: "2024-09-05T21:32:22.373Z",
        totalCostCents: 4363,
        products: [
          {
            productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
            quantity: 1,
            estimatedDeliveryTime: "2024-09-12T21:32:22.373Z",
            variation: null,
          },
          {
            productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
            quantity: 1,
            estimatedDeliveryTime: "2024-09-12T21:32:22.373Z",
            variation: null,
          },
        ],
      },
    ])
  );
}
