document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const strengthIndicator = document.getElementById("password-strength");
  
    // Check password strength function
    const checkPasswordStrength = (password) => {
      if (password.length >= 10 && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
        return "ძლიერი";
      } else if (password.length >= 8 && (/[A-Z]/.test(password) || /\d/.test(password))) {
        return "საშუალო";
      } else if (password.length >= 6) {
        return "მდაბალი";
      } else {
        return "სუსტი";
      }
    };
  
    // Event listener for password input
    passwordInput.addEventListener("input", () => {
      const password = passwordInput.value;
      const strength = checkPasswordStrength(password);
  
      // Update strength text and background color
      if (strength === "ძლიერი") {
        strengthIndicator.textContent = "ძლიერი სიძლიერე";
        passwordInput.style.backgroundColor = "#d4edda"; // Green
      } else if (strength === "საშუალო") {
        strengthIndicator.textContent = "საშუალო სიძლიერე";
        passwordInput.style.backgroundColor = "#fff3cd"; // Yellow
      } else if (strength === "მდაბალი") {
        strengthIndicator.textContent = "მდაბალი სიძლიერე";
        passwordInput.style.backgroundColor = "#f8d7da"; // Red
      } else {
        strengthIndicator.textContent = "ძალიან სუსტი პაროლი";
        passwordInput.style.backgroundColor = "#f8d7da"; // Red
      }
    });
  });
  