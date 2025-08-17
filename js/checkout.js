const form = document.getElementById("checkout-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const address = form.address.value.trim();
    if(!name || !email || !address){
        alert("Please fill all required fields.");
        return;
    }
    localStorage.removeItem("cart"); // clear cart after checkout
    window.location.href = "thankyou.html";
});
