const formRegister = document.querySelector(".login-form")


formRegister.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const loginForm = form.elements.login.value;
  const passwordForm = form.elements.password.value;
  
  if (loginForm === "" || passwordForm === "") {
     alert("All spaces must be filled!");
  }

  console.log(`Login: ${loginForm.value}, Password: ${passwordForm.value}`);
  form.reset();
}
