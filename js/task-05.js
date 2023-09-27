const nameInput = document.querySelector("#name-input");
console.dir(nameInput);
const nameOutput = document.querySelector("#name-output");
console.dir(nameOutput.textContent);

nameInput.addEventListener("input", handlerInput);

function handlerInput() {
  nameOutput.textContent = nameInput.value;
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  }
  nameInput.value;
}
