// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// ======================
// SCROLL PROGRESS BAR
// ======================

const progressBar = document.getElementById("progress");

window.addEventListener("scroll", () => {
  if (!progressBar) return;

  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = percent + "%";
});

// ======================
// FADE ANIMATION
// ======================

const fadeElements = document.querySelectorAll(".fade");

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

fadeElements.forEach(el => fadeObserver.observe(el));

// ======================
// TYPING EFFECT
// ======================

const typingElement = document.getElementById("typing");

if (typingElement) {
  const texts = [
    "Front-End Developer",
    "Cyber Security Student",
    "UI Designer",
    "Web Developer"
  ];

  let textIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingElement.textContent =
        texts[textIndex].substring(0, charIndex - 1);

      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }

      setTimeout(typeEffect, 300);
    }
  }

  typeEffect();
}

// ======================
// FLOATING PROFILE IMAGE
// ======================

const profileImage = document.querySelector(".profile-image");

if (profileImage) {
  let position = 0;
  let direction = 1;

  setInterval(() => {
    position += direction;

    if (position > 10) direction = -1;
    if (position < -10) direction = 1;

    profileImage.style.transform =
      `translateY(${position}px)`;
  }, 50);
}

// ======================
// SKILL CARD ANIMATION
// ======================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });
});

// ======================
// PROJECT CARD ANIMATION
// ======================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ======================
// CONTACT FORM
// ======================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const message =
      document.getElementById("message").value.trim();

    if (name.length < 3) {
      alert("Enter valid name");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    if (message.length < 10) {
      alert("Message too short");
      return;
    }

    const success =
      document.getElementById("success");

    if (success) {
      success.innerHTML =
        "✅ Message Sent Successfully!";
    }

    contactForm.reset();
  });
}

// ======================
// ACTIVE NAV LINK
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;

    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove(
      "text-pink-500",
      "font-bold"
    );

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add(
        "text-pink-500",
        "font-bold"
      );
    }
  });
});

// ======================
// BACK TO TOP BUTTON
// ======================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className =
  "fixed bottom-5 right-5 bg-pink-500 text-white w-12 h-12 rounded-full shadow-lg hidden z-50";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.classList.remove("hidden");
  } else {
    topBtn.classList.add("hidden");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ======================
// PAGE LOADER
// ======================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});