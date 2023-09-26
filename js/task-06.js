const input = document.querySelector("#validation-input");
console.dir(input);
input.addEventListener("blur", handlerBlur);
function handlerBlur(evt) {
  if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
