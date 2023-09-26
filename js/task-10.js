function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const inputValue = document.querySelector("input");
// const emptyBox = document.querySelector("#boxes");
// console.dir(createBtn);
// console.dir(destroyBtn);
// console.dir(inputValue);
// console.dir(emptyBox);

// const elements = {
//   createBtn: document.querySelector("[data-create]"),
//   destroyBtn: document.querySelector("[data-destroy]"),
//   inputValue: document.querySelector("input"),
//   emptyBox: document.querySelector("#boxes"),
// };

// elements.createBtn.addEventListener("click", handlerCreateBtnClick);
// elements.destroyBtn.addEventListener("click", destroyBoxes);

// // Create boxes
// function handlerCreateBtnClick() {
//   let totalEl = elements.inputValue.value;

//   createBoxes(totalEl);
// }

// function createBoxes(amount) {
//   let boxSize = 30;

//   const boxes = [];
//   if (amount >= 1 && amount <= 100) {
//     for (let i = 0; i < amount; i += 1) {
//       const newBoxes = document.createElement("div");
//       newBoxes.style.width = `${boxSize}px`;
//       newBoxes.style.height = `${boxSize}px`;
//       newBoxes.style.backgroundColor = getRandomHexColor();
//       boxes.push(newBoxes);
//       boxSize += 10;
//     }
//     elements.emptyBox.append(...boxes);
//   }
// }

// // Delete boxes
// function destroyBoxes() {
//   elements.emptyBox.innerHTML = "";
//   elements.inputValue.value = "";
// }
