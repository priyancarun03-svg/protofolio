const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

/* HAMBURGER MENU */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

/* ACTIVE NAVIGATION */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(window.pageYOffset >= sectionTop - 200){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});

/* CONTACT FORM VALIDATION */

const form =
document.getElementById("contactForm");

const nameInput =
document.getElementById("name");

const emailInput =
document.getElementById("email");

const messageInput =
document.getElementById("message");

const nameError =
document.getElementById("nameError");

const emailError =
document.getElementById("emailError");

const messageError =
document.getElementById("messageError");

const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    /* NAME VALIDATION */

    if(nameInput.value.trim() === ""){

        nameError.textContent =
        "Name is required.";

        isValid = false;

    }

    else if(
        nameInput.value.trim().length < 2
    ){

        nameError.textContent =
        "Name must be at least 2 characters.";

        isValid = false;

    }

    /* EMAIL VALIDATION */

    if(emailInput.value.trim() === ""){

        emailError.textContent =
        "Email is required.";

        isValid = false;

    }

    else if(
        !emailInput.value.includes("@")
        ||
        !emailInput.value.includes(".")
    ){

        emailError.textContent =
        "Enter a valid email address.";

        isValid = false;

    }

    /* MESSAGE VALIDATION */

    if(messageInput.value.trim() === ""){

        messageError.textContent =
        "Message is required.";

        isValid = false;

    }

    /* SUCCESS */

    if(isValid){

        form.style.display = "none";

        successMessage.textContent =
        "Thank you " +
        nameInput.value +
        "! Your message has been sent.";

    }

});