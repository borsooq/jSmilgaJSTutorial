//Asynchronous execution

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve("hey value is true");
  } else {
    reject(`there was an error. Value is false`);
  }
});
console.log(promise);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
