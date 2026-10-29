




const circleImage = document.getElementById("circleImage");
const switchButton = document.getElementById("switchButton");

let isNight = false;

if (circleImage && switchButton) {
    switchButton.addEventListener("click", function () {

        if (!isNight) {
            circleImage.setAttribute(
                "src",
                "maseru-Night.jpg"
            );
            isNight = true;
            switchButton.textContent = "Switch to Day View";

        } else {
            circleImage.setAttribute(
                "src",
                "maseru-day.jpg"
            );
            isNight = false;
            switchButton.textContent = "Switch to Night View";
        }

    });
}



const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const gender = document.getElementById("gender").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const errorMessage = document.getElementById("errorMessage");
        const successMessage = document.getElementById("successMessage");

        errorMessage.textContent = "";
        successMessage.textContent = "";

    
        if (!fullName || !email || !phone || !gender ||
            !password || !confirmPassword) {
            errorMessage.textContent = "Please fill in all required fields.";
            return;
        }

    
        if (fullName.length < 2) {
            errorMessage.textContent =
                "Please enter your full name.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errorMessage.textContent =
                "Please enter a valid email address.";
            return;
        }

        const phonePattern = /^\+?[0-9\s()-]{7,20}$/;

        if (!phonePattern.test(phone)) {
            errorMessage.textContent =
                "Please enter a valid phone number.";
            return;
        }


        if (password.length < 8) {
            errorMessage.textContent =
                "Your password must contain at least 8 characters.";
            return;
        }

    
        if (password !== confirmPassword) {
            errorMessage.textContent =
                "Your passwords do not match.";
            return;
        }

        successMessage.textContent =
            "Registration completed successfully! Welcome to Lesotho Tourism.";

        registrationForm.reset();
    });
}
