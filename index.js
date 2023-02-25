const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function login() {
  loginForm.style.transform = "translateX(300px)";
  registerForm.style.transform = "translateX(300px)";
}

function register() {
  loginForm.style.transform = "translateX(0px)";
  registerForm.style.transform = "translateX(0px)";
}
