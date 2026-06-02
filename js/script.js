const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});


const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Close menu after clicking link

document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});



const typingElement = document.getElementById("typing");

const texts = [
    "Front-End Developer",
    "Cyber Security Student",
    "Web Designer",
    "Tailwind CSS Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

if (typingElement) {
    typeEffect();
}



const progressBar = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = percent + "%";
});


const fadeElements =
    document.querySelectorAll(".fade");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

fadeElements.forEach(element => {
    observer.observe(element);
});


const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (name.length < 3) {
        alert("Please enter a valid name.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    document.getElementById("success").innerHTML =
        "✅ Message Sent Successfully!";

    contactForm.reset();
});



const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove(
            "text-pink-500",
            "font-bold"
        );

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add(
                "text-pink-500",
                "font-bold"
            );
        }

    });

});



const topButton =
    document.createElement("button");

topButton.innerHTML = "↑";

topButton.className =
    "fixed bottom-5 right-5 bg-pink-500 text-white w-12 h-12 rounded-full shadow-lg hidden z-50";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.classList.remove("hidden");
    } else {
        topButton.classList.add("hidden");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});