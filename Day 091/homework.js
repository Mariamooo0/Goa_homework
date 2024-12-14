document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const ageInput = document.getElementById("age");
  
    // Validation functions
    const validateName = () => {
      const name = nameInput.value.trim();
      const regex = /^[a-zA-Zა-ჰ]{3,}$/;
      if (regex.test(name)) {
        setValid(nameInput);
        return true;
      } else {
        setInvalid(nameInput, "სახელი უნდა იყოს მინიმუმ 3 ასო და შეიცავდეს მხოლოდ ასოებს.");
        return false;
      }
    };
  
    const validateEmail = () => {
      const email = emailInput.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(email)) {
        setValid(emailInput);
        return true;
      } else {
        setInvalid(emailInput, "გთხოვთ, შეიყვანეთ სწორი ელ. ფოსტა.");
        return false;
      }
    };
  
    const validatePassword = () => {
      const password = passwordInput.value;
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (regex.test(password)) {
        setValid(passwordInput);
        return true;
      } else {
        setInvalid(passwordInput, "პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო, შეიცავდეს ერთ დიდ ასოს, ერთ რიცხვს და ერთ სპეციალურ სიმბოლოს.");
        return false;
      }
    };
  
    const validateConfirmPassword = () => {
      const confirmPassword = confirmPasswordInput.value;
      if (confirmPassword === passwordInput.value && confirmPassword !== "") {
        setValid(confirmPasswordInput);
        return true;
      } else {
        setInvalid(confirmPasswordInput, "პაროლები უნდა ემთხვეოდეს.");
        return false;
      }
    };
  
    const validateAge = () => {
      const age = parseInt(ageInput.value, 10);
      if (age >= 18) {
        setValid(ageInput);
        return true;
      } else {
        setInvalid(ageInput, "ასაკი უნდა იყოს 18 ან მეტი.");
        return false;
      }
    };
  
    // Helper functions for styling
    const setValid = (element) => {
      element.classList.add("valid");
      element.classList.remove("invalid");
      element.nextElementSibling.textContent = "";
    };
  
    const setInvalid = (element, message) => {
      element.classList.add("invalid");
      element.classList.remove("valid");
      element.nextElementSibling.textContent = message;
    };
  
    // Real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validateConfirmPassword);
    ageInput.addEventListener("input", validateAge);
  
    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateAge()
      ) {
        alert("ფორმა წარმატებით გაიგზავნა!");
      } else {
        alert("გთხოვთ, შეავსოთ ყველა ველი სწორად.");
      }
    });
  });
  