function authenticateAdmin() {
    let password = prompt("Enter Admin Password:");
    if (password === "azhar123") {  // Change this to a secure method
        window.location.href = "admin.html";
    } else {
        alert("Incorrect password!");
    }
}