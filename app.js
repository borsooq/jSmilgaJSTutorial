const num1 = 30;
const num2 = 50;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}

add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

//pass arguments
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(num1, num2);

//return/assignm to variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(num1, num2);

console.log(result);
