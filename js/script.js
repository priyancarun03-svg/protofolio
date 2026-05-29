const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

/* HAMBURGER MENU */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

/* ACTIVE NAV LINK */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")
        === "#" + current){

            link.classList.add("active");

        }

    });

});