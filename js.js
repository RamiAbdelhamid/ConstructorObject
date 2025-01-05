//  Q1
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.getDetails = function () {
    return `Brand: ${this.brand}  model: ${this.model}  year: ${this.year}`;
  };
}

let car = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("BMW", "BMW520", 2010);
let car3 = new Car("KIA", "RIO", 2012);

console.log(car.getDetails());
console.log(car2.getDetails());
console.log(car3.getDetails());

// .........................................................................//

// Q2
// Q2: Using the variable persons, Create a function called firstName that accept an object
// and return all the first name of the person insides
// Example: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
const persons = {
  name1: { firstname: "Rami", lastname: "ghassan" },
  name2: { firstname: "omar", lastname: "abd" },
  name3: { firstname: "ehab", lastname: "khaled" },
};

function firstname(object) {
  const array = [];
  let index = 0;
  for (const key in object) {
    array[index] = object[key].firstname;
    index++;
  }

  return array;
}

console.log(firstname(persons));

// Q3: Create a function called objectToArray that accept an object and return an array of the keys and values in this object
// Example: objectToArray({firstName:"Moh",age:24})
// => ["firstName","Moh","age",24]

// Q3

const personss = {
  name1: { firstname: "Rami", lastname: "ghassan" },
  name2: { firstname: "omar", lastname: "abd" },
  name3: { firstname: "ehab", lastname: "khaled" },
};

let z = Object.entries(personss);

console.log(z);

let x = typeof personss;
let q = typeof z;
console.log(x);

console.log(q);
