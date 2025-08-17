const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if(!name || !email || !password){
        alert("Please fill all fields.");
        return;
    }

    // Simulate registration
    alert("Registration successful!");
    window.location.href = "login.html"; // redirect to login
});
