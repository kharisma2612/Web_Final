document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    try {
        const response = await fetch("http://localhost:3000/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("accessToken", data.accessToken);
            alert("Login Successful!");
            window.close(); // Menutup popup setelah login
        } else {
            errorMessage.textContent = data.error || "Login Failed!";
        }
    } catch (error) {
        errorMessage.textContent = "Server Error!";
    }
});
