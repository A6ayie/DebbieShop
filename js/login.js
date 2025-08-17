const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if(!email || !password){
        alert("Please fill all fields.");
        return;
    }

    // Simulate login
    alert("Login successful!");
    window.location.href = "index.html"; // redirect after login
});
