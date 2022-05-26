const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submit = document.querySelector(".contact");
const errorMessage = document.querySelector(".form-error");
const success = document.querySelector(".success-message");
const inputs = document.querySelector("#input");
const form = document.querySelector("#form");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");


function validateForm(e) {
    e.preventDefault();
    console.log("clicked");
    if (lengthCheck(fullName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        nameError.style.color = "red";
  
    }
    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        emailError.style.color = "red";
    }

    if (lengthCheck(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        subjectError.style.color = "red";
    }

    if (lengthCheck(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        messageError.style.color = "red";
    }


}

// function to validate the form

function lengthCheck(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regEx)) {
        return true;
    } else {
        return false;
    }
}




    submit.addEventListener("click", validateForm );
   


//this will check for empty fields again  
//message on top of the page when the form is submitted
//if the form is submitted successfully, the message will be displayed & disappear after

 
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        if (
            fullName.value === "" ||
            email.value === "" ||
            subject.value === "" ||
            message.value === ""
        ) {
            success.style.display = "block";
            success.style.color = "red";
            success.innerHTML = "Please fill all the fields";
            setTimeout(() => {
            success.style.display = "none";
            }, 5000);
        } else {
            errorMessage.style.display = "none";
            success.style.display = "block";
            success.style.color = "green";
            success.innerHTML = "Your message has been sent!";
            setTimeout(() => {
            success.style.display = "none";
            }, 5000);
            form.reset();
        }
        }); 
    