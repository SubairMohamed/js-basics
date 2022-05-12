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

// console.log(shop);

// 01 Total Quantity In Shop ? 
const totalQuantity = shop.reduce((quantity, shopkeper) => {
  return quantity + shopkeper.quantity;
}, 0);
// console.log(totalQuantity); sax 

// 02 Total Items In Shop ? 
const totalitems = shop.map((items) => {
  return items.item;
});
// console.log(totalitems); sax

// 03 Items Quantity Above Twenty ?  
const quantityAboveTwenty = shop.filter((twenty) => {
  return twenty.quantity > 20;
});
// console.log(quantityAboveTwenty); sax

// 04 Total Price of All Quantity In Shop ? 

const totalpriceOfQuantity = shop.reduce((price, Items) => {
  return price + Items.price;
}, 0);
// console.log(totalpriceOfQuantity);

// 06 Items Available In Shop ? 
const ItemsAvailable = shop.filter((Available) => {
  return Available.quantity > 0;
});
// console.log(ItemsAvailable);

// 07 Items Unavailable In Shop ?
const ItemsUNavailable = shop.filter((unavailable) => {
  return unavailable.quantity === 0;
});
// console.log(ItemsUNavailable);