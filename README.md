# Welcome to Amazon Clone Project

## This project has 3 main components:

1. Products
2. Cart
3. Orders

## Products
A product have the following attributes:

- Product ID
- Product Name
- Product Image Path
- Product Rating
  - Number of Stars
  - Number of Ratings
- Product Price
- Product Variation
  - Variation 1
  - Variation 2
  - ...
  - Variation n

Example of a Product Object:
{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d", // Product ID
    name: "Intermediate Size Basketball", // Product Name
    image: "images/products/intermediate-composite-basketball.jpg", // Product Image Path
    rating: { // Product Rating Object
    stars: 4, // Number of Stars
    count: 127, // Number of Ratings
    },
    priceCents: 2095, // Price in cents
}

## Cart
A cart consists of products with varying quantities.
A cart has the following attributes:
- Item 1
    - Product ID
    - Product Quantity
    - Delivery Option
    - Product Variation (If Exists)
- Item 2
    - Product ID
    - Product Quantity
    - Delivery Option
    - Product Variation (If Exists)
- ...
- Item n
    - Product ID
    - Product Quantity
    - Delivery Option
    - Product Variation (If Exists)


Example of Cart Object:
[
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
]

## Order
An order is a result of a cart checkout
An Order has the following attributes:
- Order ID
- Order Time
- Order Total Cost
- Order Items
    - Item 1
        - Product ID
        - Product Quantity
        - Estimated Delivery Time
        - Product Variation
    - Item 2
        - Product ID
        - Product Quantity
        - Estimated Delivery Time
        - Product Variation
    - ...
    - Item n
        - Product ID
        - Product Quantity
        - Estimated Delivery Time
        - Product Variation

Example of an Order Object:
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
