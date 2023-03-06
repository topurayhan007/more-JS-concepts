console.log(1);
console.log(2);
const timeoutID = setTimeout(() => {
  console.log("lazy logged");
}, 4000);
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((respose) => respose.json())
  .then((json) => console.log(json)); */
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}
let num = 0;
const intervalId = setInterval(() => {
  console.log(++num);
  if (num === 10) {
    clearInterval(intervalId);
  
  }
}, 1000);
