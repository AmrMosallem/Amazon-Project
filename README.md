# Amazon Clone Project Overview

## To Do List
1. **amazon.html**:
  - Enable "Add to Cart" Button Functionality
  - Enable Interactive Variation Selection

2. **product-details.html** (Completed)

3. **checkout.html**:
  - Add Product Variation Details
  - Delete Cart After Checkout

4. **orders.html**:
  - Enable Dynamic Orders Display Functionality

5. **tracking.html** (Not Created Yet)

## Project Pages

The project consists of five main pages:

1. **amazon.html**: A visually appealing page showcasing products for users to browse and add to their cart, including options for selecting product quantities and variations (if applicable).

2. **product-details.html**: Provides detailed information about a specific product, allowing users to view the product in greater depth.

3. **checkout.html**: A well-organized page displaying the contents of the user’s cart, including details for each item. Users can select delivery options for individual items. The page also includes a payment summary, outlining the total price, shipping fees, taxes, and the order total. A "Place Order" button finalizes the purchase and creates an order.

4. **orders.html**: Displays a comprehensive list of the user’s orders, showing key information such as order date, total cost, and order ID. It also details the items within each order, providing relevant product information.

5. **tracking.html**: Allows users to track the status of an item within an order, displaying expected delivery dates and indicating whether the item is being prepared, shipped, or has been delivered.

This structure ensures a seamless and user-friendly experience across all stages of the purchasing process.

## Project Components

The project is structured around three core components:

**1. Products**  
**2. Cart**  
**3. Orders**

### 1. Products

Each product in the system includes the following attributes:

- **Product ID**: Unique identifier for the product
- **Product Name**: Name of the product
- **Product Image Path**: File path to the product’s image
- **Product Rating**:
  - **Number of Stars**: Rating on a 1–5 scale
  - **Number of Ratings**: Total number of customer ratings
- **Product Price**: Price of the product in cents
- **Product Variations**: Available product variations (e.g., size, color)

**Example of a Product Object:**

```json
{
  "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d", // Product ID
  "name": "Intermediate Size Basketball", // Product Name
  "image": "images/products/intermediate-composite-basketball.jpg", // Image Path
  "rating": {
    "stars": 4, // Number of Stars
    "count": 127 // Number of Ratings
  },
  "priceCents": 2095 // Price in cents
}
```

Products are stored as objects in the `data/products.js` file.

### 2. Cart

A cart consists of a collection of products, each with specific quantities and optional variations. The cart attributes include:

- **Product ID**: Unique identifier of the product
- **Product Quantity**: Number of units added to the cart
- **Delivery Option**: Chosen delivery method
- **Product Variation**: Specific product variations, if applicable (e.g., size, color)

**Example of a Cart Object:**

```json
[
  {
    "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    "quantity": 2,
    "deliveryOptionId": "1"
  },
  {
    "productId": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    "quantity": 1,
    "deliveryOptionId": "1"
  },
  {
    "productId": "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    "quantity": 1,
    "deliveryOptionId": "3",
    "variation": {
      "Color": "Yellow",
      "Size": "S"
    }
  }
]
```

### 3. Orders

An order is created upon checkout and consists of the following attributes:

- **Order ID**: Unique identifier for the order
- **Order Time**: Timestamp of when the order was placed
- **Total Cost**: Total price of the order in cents
- **Order Items**: List of products in the order, including:
  - **Product ID**: Unique identifier of the product
  - **Product Quantity**: Number of units ordered
  - **Estimated Delivery Time**: Estimated date and time of delivery
  - **Product Variation**: Selected product variations, if any

**Example of an Order Object:**

```json
{
  "id": "cc410ee3-6874-843d-b2b9-762149a56891",
  "orderTime": "2024-09-05T21:32:42.300Z",
  "totalCostCents": 8247,
  "products": [
    {
      "productId": "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      "quantity": 1,
      "estimatedDeliveryTime": "2024-09-09T21:32:42.300Z",
      "variation": {
        "Color": "Yellow",
        "Size": "S"
      }
    },
    {
      "productId": "77919bbe-0e56-475b-adde-4f24dfed3a04",
      "quantity": 1,
      "estimatedDeliveryTime": "2024-09-11T21:32:42.300Z",
      "variation": { "Set": "6-Piece" }
    }
  ]
}
```

This structure ensures clear and organized handling of product data, carts, and orders, enabling a smooth workflow for managing e-commerce transactions.

### Test Data Setup Functions

Two pre-written data preparation functions are available in this project to assist with development. These functions are located in `scripts/shared/test-functions.js`.

1. **setTestCartToLocalStorage()**  
   This function populates local storage with a test cart. It allows team members to test their assigned pages that rely on cart data, even when the main page (where the cart is typically created) is not available.  
   
   **Function code:**
   ```javascript
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
   ```

2. **setTestOrdersToLocalStorage()**  
   This function sets a test array of orders in local storage. It helps team members test pages that rely on order data without requiring the checkout page, where the orders would typically be created.  

   **Function code:**
   ```javascript
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
                           estimatedDeliveryTime: "2024-09-09T21:32:42.300Z",
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
   ```

These functions streamline testing and ensure that development can proceed smoothly even when certain components are temporarily unavailable.