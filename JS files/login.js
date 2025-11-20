
function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const popupMessage = document.getElementById("popupMessage");

    if (!email || !password) {
        popupMessage.innerText = "Please fill in both fields.";
        popupMessage.classList.add("show");
        setTimeout(() => {
            popupMessage.classList.remove("show");
        }, 3000); 
        return false; 
    }

    popupMessage.innerText = "Login successful! Redirecting...";
    popupMessage.classList.add("show");

    
    setTimeout(() => {
        popupMessage.classList.remove("show");
        window.location.href = 'home.html'; 
    }, 2000); 

    return false;
}


function openForgotPasswordModal() {
    const modal = document.getElementById("forgotPasswordModal");
    modal.style.display = "block";
}


function closeForgotPasswordModal() {
    const modal = document.getElementById("forgotPasswordModal");
    modal.style.display = "none";
}


function resetPassword() {
    const resetEmail = document.getElementById("resetEmail").value.trim();
    const resetMessage = document.getElementById("resetMessage");

    if (resetEmail) {
        
        resetMessage.textContent = "A reset link has been sent to " + resetEmail + ". Please check your inbox.";
        resetMessage.style.color = "green"; 
    } else {
        resetMessage.textContent = "Please enter a valid email address.";
        resetMessage.style.color = "red"; 
    }
}
function toggleLoginButton() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginButton = document.getElementById("loginButton");

    
    loginButton.disabled = !(email && password);
}


document.getElementById("email").addEventListener("input", toggleLoginButton);
document.getElementById("password").addEventListener("input", toggleLoginButton);
