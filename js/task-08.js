const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const FormElem = evt.currentTarget.elements;
  const email = FormElem.email.value;
  const password = FormElem.password.value;
  const formObj = { email, password };
  if (email === "" || password === "") {
    alert("Введіть дані");
    return;
  } else {
    console.log(formObj);
    return loginForm.reset();
  }
}
