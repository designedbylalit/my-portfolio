document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsapp-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const text = `Hi Lalit! I visited your portfolio and would like to connect.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
      const url = `https://wa.me/918949365393?text=${text}`;

      window.open(url, "_blank");
    });
  }
});