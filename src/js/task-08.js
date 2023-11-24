const formRegister = document.querySelector(".login-form");
const login = document.querySelector(`[type="email"]`);
const password = document.querySelector (`[type="password"]`);



formRegister.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  
  const loginForm = login.value;
  const passwordForm = password.value;
  
  if (loginForm === "" || passwordForm === "") {
     alert("All spaces must be filled!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  formRegister.reset();
}
