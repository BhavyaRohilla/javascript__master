const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/*
// Topic : 2

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// ?? Nullish Coalescing
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// Topic : 1 Short Circuiting

console.log("------ OR --------");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Bhavya");
console.log("" || "Bhavya");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("------ AND -------");
console.log(0 && "Bhavya");
console.log(7 && "Bhavya");
console.log(true && 0);

console.log("Hello" && 22 && null && "Bhavya");

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "Spinach");
*/
