//template literals strings
const name = "bob";
const lastName = "sanders";
const age = 25;

const phrase =
  "My full name is " + name + " " + lastName + " and I'm " + age + " years old";

const phrase2 = `My full name is ${name} ${lastName} and I'm ${age} years old`;

console.log(phrase);
console.log(phrase2);
