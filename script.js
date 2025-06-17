
// Toggle menu/navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

// WhatsApp redirect on contact form submit
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("input[placeholder='Your Name']").value;
    const email = document.querySelector("input[placeholder='Your Email']").value;
    const message = document.querySelector("textarea[placeholder='Your Message']").value;

    const whatsappText = `Hi Lalit! I visited your portfolio and would like to connect.%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/918949365393?text=${whatsappText}`;
    window.open(whatsappURL, "_blank");
  });
}
