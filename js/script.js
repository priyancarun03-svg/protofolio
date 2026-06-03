/* ── THEME TOGGLE ── */
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
let dark = false;

themeBtn.addEventListener('click', () => {
  dark = !dark;
  root.setAttribute('data-theme', dark ? 'dark' : '');
  themeBtn.innerHTML = dark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

/* ── MOBILE MENU — max-height animation, no layout shift ── */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  mobileMenu.classList.toggle('open', !isOpen);
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
  menuBtn.innerHTML = !isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

/* Close menu when clicking outside */
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMobile();
  }
});

/* ── INTERSECTION OBSERVER (fade-up) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── RESPONSIVE GRIDS ── */
function checkResponsive() {
  const w = window.innerWidth;
  const aboutGrid = document.querySelector('.about-grid');
  const eduExpGrid = document.querySelector('.edu-exp-grid');
  if (aboutGrid) aboutGrid.style.gridTemplateColumns = w < 768 ? '1fr' : '1fr 1fr';
  if (eduExpGrid) eduExpGrid.style.gridTemplateColumns = w < 768 ? '1fr' : '1fr 1fr';
}
checkResponsive();
window.addEventListener('resize', checkResponsive);

/* ── CONTACT FORM VALIDATION ── */
const form = document.getElementById('contactForm');

function setError(inputId, errId, show) {
  const input = document.getElementById(inputId);
  const err   = document.getElementById(errId);
  if (show) {
    input.classList.add('error');
    err.classList.add('show');
  } else {
    input.classList.remove('error');
    err.classList.remove('show');
  }
  return show;
}

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function validatePhone(v) {
  if (!v) return true;
  return /^[0-9]{10}$/.test(v.replace(/[\s\-+]/g, ''));
}

document.getElementById('fname').addEventListener('blur', () => {
  setError('fname','fnameErr', !document.getElementById('fname').value.trim());
});
document.getElementById('lname').addEventListener('blur', () => {
  setError('lname','lnameErr', !document.getElementById('lname').value.trim());
});
document.getElementById('email').addEventListener('blur', () => {
  setError('email','emailErr', !validateEmail(document.getElementById('email').value.trim()));
});
document.getElementById('phone').addEventListener('blur', () => {
  const v = document.getElementById('phone').value.trim();
  setError('phone','phoneErr', v && !validatePhone(v));
});
document.getElementById('subject').addEventListener('blur', () => {
  setError('subject','subjectErr', !document.getElementById('subject').value.trim());
});
document.getElementById('message').addEventListener('blur', () => {
  setError('message','messageErr', document.getElementById('message').value.trim().length < 20);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  let hasErr = false;
  if (setError('fname','fnameErr', !fname)) hasErr = true;
  if (setError('lname','lnameErr', !lname)) hasErr = true;
  if (setError('email','emailErr', !validateEmail(email))) hasErr = true;
  if (phone && setError('phone','phoneErr', !validatePhone(phone))) hasErr = true;
  if (setError('subject','subjectErr', !subject)) hasErr = true;
  if (setError('message','messageErr', message.length < 20)) hasErr = true;

  if (!hasErr) {
    const successBox = document.getElementById('formSuccess');
    successBox.classList.add('show');
    form.reset();
    ['fname','lname','email','phone','subject','message'].forEach(id => {
      document.getElementById(id).classList.remove('error');
    });
    ['fnameErr','lnameErr','emailErr','phoneErr','subjectErr','messageErr'].forEach(id => {
      document.getElementById(id).classList.remove('show');
    });
    setTimeout(() => successBox.classList.remove('show'), 5000);
  }
});