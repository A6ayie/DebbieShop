const toggleBtn = document.getElementById("toggle-form");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

toggleBtn.addEventListener("click", () => {
    loginForm.classList.toggle("hidden");
    registerForm.classList.toggle("hidden");
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Logged in successfully!");
});

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Registered successfully!");
});
