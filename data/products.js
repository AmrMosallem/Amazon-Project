const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    description: "These athletic socks are designed for comfort and performance. Made from a blend of cotton, polyester, and spandex, they provide a snug fit and excellent moisture-wicking properties. The arch support and cushioning will keep your feet happy even during the toughest workouts.",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    description: "This intermediate size basketball is designed for players with smaller hands. It is made of a durable rubber bladder and a synthetic leather cover. The ball is designed to be easy to grip and handle, making it perfect for players who are just starting out or looking for a more comfortable ball to play with.",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    description: "These plain cotton t-shirts are perfect for everyday wear. Made from 100% cotton, they are soft and comfortable against the skin. The classic design makes them easy to mix and match with your favorite bottoms.",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    description: "This 2 slot toaster is perfect for making toast for you and a friend. It has a sleek and modern design that will look great in any kitchen. The toaster has a variable heat control and a defrost function, making it easy to toast your favorite bread.",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    keywords: ["toaster", "kitchen", "appliances"],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    description: "This 6 piece dinner plate set is perfect for any dinner party. The plates are made from a durable ceramic material and have a classic design that will complement any table setting.",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    keywords: ["plates", "kitchen", "dining"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    description: "This 6 piece non-stick baking set is perfect for any home baker. The set includes a variety of pieces that are perfect for making cakes, cookies, and other sweet treats. The non-stick coating makes cleanup a breeze and the carbon steel construction ensures that the pieces will last for years to come.",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    keywords: ["kitchen", "cookware"],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    description: "This plain hooded fleece sweatshirt is perfect for casual wear. Made from a soft fleece material, it is comfortable against the skin and keeps you warm on chilly days. The hood is adjustable and the cuffs are ribbed for a comfortable fit.",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    variation: {
      Color: ["Yellow", "Teal"],
      Size: ["S", "M", "L"],
    },
    keywords: ["hoodies", "sweaters", "apparel"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    description: "This luxury towel set is perfect for any bathroom. The set includes 6 pieces: 2 bath towels, 2 hand towels, and 2 washcloths. The towels are made from a soft, absorbent material that will keep you dry and comfortable.",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    variation: {
      Set: ["6-Piece", "4-Piece"],
    },
    keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    description: "This liquid laundry detergent is perfect for any laundry room. It is designed to effectively remove tough stains and dirt, leaving your clothes smelling fresh and clean. The 110 load bottle is a great value and will last you a long time.",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    variation: {
      Style: ["Plain", "Lavender"],
    },
    keywords: ["bathroom", "cleaning"],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    description: "These knit athletic sneakers are perfect for any athlete. They are waterproof and have a comfortable, breathable design. The sneakers are made from a durable material that will withstand even the toughest workouts.",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    variation: {
      "Shoe Size (US)": ["5", "6", "7", "8", "9"],
    },
    keywords: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    description: "These round sunglasses are perfect for any face shape. They are made from a durable acetate material and have a comfortable, adjustable frame. The lenses are UV protected and provide excellent visual clarity.",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
    variation: {
      Style: ["Black", "Gold"],
    },
    keywords: ["accessories", "shades"],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    description: "These women's sandals are perfect for any beach vacation. They are made from a soft, comfortable material and have a adjustable strap for a secure fit. The buckle is made from a durable metal and adds a touch of style to the sandals.",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
    variation: {
      "Shoe Size (US)": ["7", "8", "9"],
    },
    keywords: ["footwear", "sandals", "womens"],
  },


  {

    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    description: "These blackout curtains are perfect for blocking out light and noise. They are made from a durable material and come in a set of 4.",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    variation: {
      Color: ["Gray", "Black", "Beige"],
      "Waist size (Inches)": ["30", "31", "32"],
    },
    keywords: ["bedroom", "curtains", "home"],
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    description: "These men's shorts are perfect for hot summer days. They are made from a comfortable material and have a slim fit.",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    keywords: ["shorts", "apparel", "mens"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    description: "This electric kettle is perfect for making tea or coffee. It is made from a durable glass and steel material and has a 1.7-liter capacity.",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
    keywords: ["water boiler", "appliances", "kitchen"],
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    description: "These facial tissues are perfect for blowing your nose or wiping your eyes. They are made from a soft, 2-ply material and come in a set of 18 boxes.",
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,
    keywords: ["kleenex", "tissues", "kitchen", "tissues box", "napkins"],
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    description: "This sun hat is perfect for long days at the beach. It is made from a durable straw material and has a wide brim for added protection.",
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,
    keywords: ["hats", "straw hats", "summer", "apparel"],
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    description: "These earrings are perfect for adding a touch of elegance to your outfit. They are made from a durable sterling silver material and have a beautiful flower design.",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,
    keywords: ["jewelry", "accessories", "womens"],
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    description: "This bath rug is perfect for adding a touch of comfort to your bathroom. It is made from a soft, absorbent material and has a non-slip backing.",
    rating: {
      stars: 4.5,
      count: 119,
    },
    priceCents: 1250,
    keywords: ["bathmat", "bathroom", "home"],
  },

  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    description: "This polo shirt is perfect for golfing. It is made from a comfortable, quick-drying material and has a regular fit.",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
    variation: {
      Color: ["Blue", "Black", "Red"],
      Size: ["S", "M", "L"],
    },
    keywords: ["tshirts", "shirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    description: "This trash can is perfect for any room in your home. It is made from a durable brushed stainless steel material and has a foot pedal for added convenience.",
    rating: {
      stars: 4.5,
      count: 2286,
    },

    priceCents: 8300,
    variation: {
      Size: ["50L", "30L Tall"],
    },
    keywords: ["garbage", "bins", "cans", "kitchen"],
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    description: "This duvet cover set is perfect for adding a touch of comfort to your bedroom. It is made from a soft, comfortable material and has a zipper closure.",
    rating: {
      stars: 4,
      count: 456,
    },

    priceCents: 2399,
    variation: {
      Color: ["Blue", "Red"],
      Size: ["Twin", "Queen"],
    },
    keywords: ["bedroom", "bed sheets", "sheets", "covers", "home"],
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    description: "This beanie is perfect for cold winter days. It is made from a soft, chunky material and has a gray color.",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    keywords: ["hats", "winter hats", "beanies", "tuques", "apparel", "womens"],
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    description: "These pants are perfect for any occasion. They are made from a comfortable, classic-fit material and have a pleated design.",
    rating: {
      stars: 4.5,
      count: 9017,
    },

    priceCents: 2290,
    variation: {
      Color: ["Beige", "Green", "Black"],
      Size: ["30", "31", "32"],
    },
    keywords: ["pants", "apparel", "mens"],
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    description: "These shoes are perfect for any athletic activity. They are made from a durable material and have a comfortable fit.",
    rating: {
      stars: 4,
      count: 229,
    },

    priceCents: 3890,
    variation: {
      Color: ["Green", "Black"],
      Size: ["9", "10", "11", "12"],
    },
    keywords: ["shoes", "running shoes", "footwear", "mens"],
  },




  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    description: "These navigator sunglasses are perfect for any man. They have a classic design that will never go out of style and are made from a durable material that will last for years to come. The lenses are UV protected and provide excellent visual clarity. The frame is adjustable for a comfortable fit.",
    rating: {
      stars: 3.5,
      count: 42,
    },
    priceCents: 1690,
    variation: {
      Color: ["Brown", "Silver"],
    },
    keywords: ["sunglasses", "glasses", "accessories", "shades"],
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    description: "This non-stick cookware set is perfect for any kitchen. It includes 15 pieces: a frying pan, saucepan, Dutch oven, utensils and more. The pots and pans are made from a durable non-stick material that makes food release easy and cleaning a breeze. The utensils are made from a comfortable, easy-to-grip material.",
    rating: {
      stars: 4.5,
      count: 511,
    },
    priceCents: 6797,
    keywords: ["cooking set", "kitchen"],
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    description: "This vanity mirror is perfect for any bathroom. It has a large, adjustable mirror that provides excellent visibility and a sturdy, heavy base that won't tip over. The mirror is made from a durable material that will last for years to come.",
    rating: {
      stars: 4.5,
      count: 130,
    },
    priceCents: 1649,
    keywords: ["bathroom", "washroom", "mirrors", "home"],
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    description: "These earrings are perfect for any woman. They have a classic design that will never go out of style and are made from a durable material that will last for years to come. The earrings are easy to put on and take off and are comfortable to wear.",
    rating: {
      stars: 4.5,
      count: 117,
    },
    priceCents: 2400,
    keywords: ["accessories", "womens"],
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    description: "These airtight food storage containers are perfect for any kitchen. They are made from a durable material that will last for years to come and are easy to use. The containers are airtight, which makes them perfect for storing food.",
    rating: {
      stars: 4,
      count: 126,
    },
    priceCents: 2899,
    keywords: ["boxes", "food containers", "kitchen"],
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    description: "This coffeemaker is perfect for any coffee lover. It has a large, 25 oz capacity and a reusable filter that makes it easy to brew coffee. The coffeemaker is easy to use and clean and has a modern design that will look great in any kitchen.",
    rating: {
      stars: 4.5,
      count: 1211,
    },
    priceCents: 2250,
    keywords: ["coffeemakers", "kitchen", "appliances"],
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    description: "These blackout curtains are perfect for any bedroom. They are made from a durable material that will block out light and keep your bedroom dark and quiet. The curtains are easy to hang and have a modern design that will look great in any bedroom.",
    rating: {
      stars: 4.5,
      count: 363,
    },
    priceCents: 3099,
    keywords: ["bedroom", "home"],
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    description: "These cotton bath towels are perfect for any bathroom. They are made from a soft, comfortable material that will feel great against your skin. The towels are easy to wash and dry and are a great value for the price.",
    rating: {
      stars: 4.5,
      count: 93,
    },
    priceCents: 2110,
    keywords: ["bathroom", "home", "towels"],
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    description: "These knit athletic sneakers are perfect for any athlete. They are made from a durable, waterproof material that will keep your feet dry and comfortable. The sneakers are easy to slip on and off and have a comfortable fit.",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear", "womens"],
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    description: "This countertop blender is perfect for any kitchen. It has a large, 64 oz capacity and a powerful 1400 watt motor that will blend anything. The blender is easy to use and clean and has a modern design that will look great in any kitchen.",
    rating: {
      stars: 4,
      count: 3,
    },
    priceCents: 10747,
    keywords: ["food blenders", "kitchen", "appliances"],
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    description: "This mixing bowl set is perfect for any kitchen. It includes 10 pieces: 5 mixing bowls and 5 lids. The bowls are made from a durable material that will last for years to come and are easy to clean. The lids are airtight, which makes them perfect for storing food.",
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
    keywords: ["mixing bowls", "baking", "cookware", "kitchen"],
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    description: "These kitchen paper towels are perfect for any kitchen. They are made from a durable material that will last for years to come and are easy to use. The paper towels are 2-ply, which makes them perfect for cleaning up spills and messes.",
    rating: {
      stars: 4.5,
      count: 1045,
    },
    priceCents: 5799,
    keywords: ["kitchen", "kitchen towels", "tissues"],
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    description: "This sweatshirt is perfect for any man. It is made from a soft, cozy fleece material that will keep you warm on chilly days. The full-zip front and adjustable cuffs make it easy to put on and take off. The hood is also adjustable, which makes it perfect for windy days.",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
    keywords: ["sweaters", "hoodies", "apparel", "mens"],
  },
];



