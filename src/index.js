var products = [
  {
    name: "Duracell - AAA Batteries (4-Pack)",
    type: "HardGood",
    price: 5.49,
    category: "Household Batteries",
    manufacturer: "Duracell"
  },
  {
    name: "Hard Rock TrackPak - Mac",
    type: "Software",
    price: 29.99,
    category: "Recording Equipment",
    manufacturer: "Hal Leonard"
  },
  {
    name: "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
    type: "HardGood",
    price: 5.62,
    category: "Household Batteries",
    manufacturer: "Duracell"
  },
  {
    name: "Energizer - MAX Batteries AA (4-Pack)",
    type: "HardGood",
    price: 5.32,
    category: "Household Batteries",
    manufacturer: "Energizer"
  },
  {
    name: "METRA - Antenna Cable Adapter - Black",
    type: "HardGood",
    price: 13.99,
    category: "Antennas & Adapters",
    manufacturer: "Metra"
  },
  {
    name: "WipeDrive Six - Mac|Windows",
    type: "Software",
    price: 23.99,
    category: "Maintenance Software",
    manufacturer: "White Canyon"
  }
];
//Print all the product names.

let productNames = products.map((p) => {
  return p.name;
});

console.log("1::", productNames);

//Print all the hardgoods.

let hardGoods = products
  .filter((p) => {
    if (p.type === "HardGood") {
      return true;
    } else {
      return false;
    }
  })
  .map((a) => {
    return a.name;
  });

console.log("2::", hardGoods);

//Print all the softwares.

let softGoods = products
  .filter((p) => {
    if (p.type === "Software") {
      return true;
    } else {
      return false;
    }
  })
  .map((a) => {
    return a.name;
  });
console.log("soft-goods", softGoods);

//Print all the categories.

let categories = products.map((p) => {
  return p.category;
});
console.log("categories::", categories);

//Print only the products manufactured by Duracell.

let prodManByDuracell = products
  .filter((p) => {
    if (p.manufacturer === "Duracell") {
      return true;
    } else {
      return false;
    }
  })
  .map((a) => {
    return a.name;
  });
console.log("prodManByDuracell::", prodManByDuracell);

//Print the product names in ascending order of their prices.

let prodNamesinAsc = products
  .sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else {
      return -1;
    }
  })
  .map((a) => {
    return a.name;
  });
console.log("prodNamesinAsc::", prodNamesinAsc);

//Print only those products whose price is more than 14.99.

let priceMoreThan14 = products
  .filter((a) => {
    if (a.price > 14.99) {
      return true;
    } else {
      return false;
    }
  })
  .map((a) => {
    return a.name;
  });
console.log("priceMoreThan14::", priceMoreThan14);

//Print only those products whose price is less than 9.99.
let priceLessThan9 = products
  .filter((a) => {
    if (a.price < 9.99) {
      return true;
    } else {
      return false;
    }
  })
  .map((a) => {
    return a.name;
  });
console.log("priceLessThan9.9::", priceLessThan9);

//Print the total price of all the hardgoods.

let toatalHardgoods = products
  .filter((a) => {
    if (a.type === "HardGood") {
      return true;
    } else {
      return false;
    }
  })
  .reduce((a, b) => {
    return a + b.price;
  }, 0);
console.log("toatalHardgoods::", toatalHardgoods);

//Print the average price of the softwares.
let avgPriceOfSoftWare = products
  .filter((a) => {
    if (a.type === "Software") {
      return true;
    } else {
      return false;
    }
  })
  .reduce((a, b) => {
    return a + b.price / 2;
  }, 0);
console.log("avgPriceOfSoftWare::", avgPriceOfSoftWare);
