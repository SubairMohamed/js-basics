// Challenge
// =========

// 01 Total Quantity In Shop ?
// 02 Total Items In Shop ?
// 03 Items Quantity Above Twenty ?
// 04 Total Price of All Quantity In Shop ?
// 05 Total Price of Available Items ?
// 06 Items Available In Shop ?
// 07 Items Unavailable In Shop ?

const shop = [
  {
    item: "Kaluun",
    price: 9000,
    quantity: 10,
  },
  {
    item: "Mongo Sharaab",
    price: 5000,
    quantity: 8,
  },
  {
    item: "Caano Maraaci",
    price: 5000,
    quantity: 20,
  },
  {
    item: "Caano Lis",
    price: 6000,
    quantity: 24,
  },
  {
    item: "Fanta",
    price: 3500,
    quantity: 50,
  },
  {
    item: "Buskud Cake",
    price: 1000,
    quantity: 0,
  },
  {
    item: "Saliid",
    price: 80000,
    quantity: 1,
  },
  {
    item: "Jawaan Sonkor",
    price: 120000,
    quantity: 0,
  },
];

// 01 Total Quantity In Shop ?

const TotalQuatityShop = shop.reduce((total, quantity) => {
  return total + quantity.quantity;
}, 0);

console.log(TotalQuatityShop);

// 02 Total Items In Shop ?

const TotalItemsShop = shop.map((total) => {
  return total.item;
});

console.log(TotalItemsShop);

// 03 Items Quantity Above Twenty ?

const ItemsQuantityAbove20ty = shop.filter((Above) => {
  return Above.quantity >= 20;
});

console.log(ItemsQuantityAbove20ty);

// 04 Total Price of All Quantity In Shop ?

const TotalOfAllQuantity = shop.reduce((price, item) => {
  return price + item.price;
}, 0);

console.log(TotalOfAllQuantity);

// 05 Total Price of Available Items ?

const TotalPriceOfAvailableItems = shop.map((available) => {
  return {
    alaabtaTaala: available.item,
    qiimahaAlaabta: available.price,
  };
});

console.log(TotalPriceOfAvailableItems);
