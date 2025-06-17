// Menu toggle for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Remove menu on scroll
window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll-triggered animations
window.addEventListener('scroll', () => {
  const scrollElements = document.querySelectorAll('.animate.scroll');
  scrollElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      el.classList.add('show-animate');
    } else {
      el.classList.remove('show-animate');
    }
  });
});

// WhatsApp form submission
const form = document.getElementById("whatsapp-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const encodedText = `Hi Lalit! I visited your portfolio and would like to connect.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
    const url = `https://wa.me/918949365393?text=${encodedText}`;

    window.open(url, "_blank");
  });
}
