const nameImput = document.querySelector("#name-input");
console.dir(nameImput);
const nameOutput = document.querySelector("#name-output");
console.dir(nameOutput);

nameImput.addEventListener("input", inputChange);

function inputChange() {
  nameOutput.textContent = nameImput.value;
  if (!nameImput === "") {
    nameImput = nameOutput;
  }
}
