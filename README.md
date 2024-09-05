# Amazon Clone Project Overview

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