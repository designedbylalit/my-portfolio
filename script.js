// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// ✅ WhatsApp message on contact form submit
const whatsappForm = document.getElementById("whatsapp-form");
if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const text = `Hi Lalit! I visited your portfolio and would like to connect.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
        const url = `https://wa.me/918949365393?text=${encodeURIComponent(text)}`;

        // show toast animation
        let toast = document.createElement("div");
        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 18px;">✅</span>
              <span><strong>Redirecting to WhatsApp...</strong></span>
            </div>
        `;
        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.background = "#00abf0";
        toast.style.color = "#081b29";
        toast.style.padding = "14px 26px";
        toast.style.borderRadius = "10px";
        toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        toast.style.fontWeight = "500";
        toast.style.fontSize = "14px";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";

        document.body.appendChild(toast);
        setTimeout(() => (toast.style.opacity = "1"), 100);

        setTimeout(() => {
            window.open(url, "_blank");
            toast.style.opacity = "0";
            setTimeout(() => document.body.removeChild(toast), 500);
        }, 2000);
    });
}

