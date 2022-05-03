//Spread operator

const udemy = "udemy";

const letters = [...udemy];
//console.log(letters);

const fruits = ["apple", "orange", "banana", "lemon"];
const girls = ["susan", "anna"];
const bestfriend = "arnold";

//spread
const friends = [...fruits, ...girls, bestfriend];

//console.log(friends);

//reference to the same memory
//const newFriends = friends;
//spread creates new deep copy
const newFriends = [...friends];
newFriends[0] = "karina";

//console.log(newFriends);
//console.log(friends);

//ES2018
const person = { name: "john", job: "developer" };
//add or change property
const newPerson = { ...person, city: "chicago", name: "peter" };

//console.log(person);
//console.log(newPerson);

const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join("");

result.innerHTML = text;

const numbersArray = [4, 5, 6, 1, 55, 23, 36, 25];

console.log(Math.max(...numbersArray));

const john = ["john", "sanders"];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(...john);
