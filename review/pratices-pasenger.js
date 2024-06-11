const rakaab = [
  {
    name: "maxamed cali faraax",
    amount: 5,
    price: 10,
  },
  {
    name: "suhayb yaasiin cabdi",
    amount: 8,
    price: 10,
  },
  {
    name: "xamda nuur cali",
    amount: 10,
    price: 10,
  },
];

// 01 magacada rakaabka ?
// 02 rakaabka ay lactu ku dhiman tahay ?
// 03 rakaabka lacagta wada bixiyay ?
// 04 dhamaan lacagta ay bixiyiin rakaabka ?
// 05 dhamaan lacagta laga doonayay ?
// 06 dhamaan lacagta dhiman ?
// 07 rakaab walba lacgta ku dhiman iyo magaciisa ?
// ---------------------------------------------------

// 01 magacada rakaabka ?
rakaab.map((names) => {
  // console.log(names.name);
});

// 02 rakaabka ay lactu ku dhiman tahay ?

const remainMoney = rakaab.filter((money) => {
  return money.amount < 10;
});
// console.log(remainMoney);

// 03 rakaabka lacagta wada bixiyay ?

const bixiyey = rakaab.filter((money) => {
  return money.amount >= 10;
});
// console.log(bixiyey);

// 04 dhamaan lacagta ay bixiyiin rakaabka ?

const lacagtaLabixiyay = rakaab.reduce((total, passenger) => {
  return total + passenger.amount;
}, 0);
// console.log(lacagtaLabixiyay);

// 05 dhamaan lacagta laga doonayay ?

const lacagtaLaDoonayo = rakaab.reduce((total, money) => {
  return total + money.price;
}, 0);
// console.log(lacagtaLaDoonayo);

// 06 dhamaan lacagta dhiman ?

// const lacagtaDhiman = lacagtaLabixiyay - lacagtaLaDoonayo;
// console.log(lacagtaDhiman);
// are same

const lacagtaDhiman = rakaab.reduce((remain, passenger) => {
  return remain - passenger.amount;
}, lacagtaLaDoonayo);
// console.log(lacagtaDhiman);

// 07 rakaab walba lacgta ku dhiman iyo magaciisa ?

const ninWalbaLacagtaBixiyay = rakaab.map((passenger) => {
  return {
    fullname: passenger.name,
    lacagtaKuDhiman: passenger.amount - passenger.price,
    lacagtaAybixiyeen: passenger.amount,
    lacagtiiLogaBahna: passenger.price,
  };
});
// console.log(ninWalbaLacagtaBixiyay);
