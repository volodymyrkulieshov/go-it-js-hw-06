let counterValue = 0;

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;

decrement.addEventListener("click", decrementClick);
function decrementClick() {
  counterValue -= 1;
  value.innerHTML = counterValue;
}
increment.addEventListener("click", incrementClick);
function incrementClick() {
  counterValue += 1;
  value.innerHTML = counterValue;
}
