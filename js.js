// =========================
// FROIDPRO JAVASCRIPT
// =========================


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// =========================
// HERO MESSAGE
// =========================

console.log("Bienvenue sur FroidPro !");


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".service-card, .why-card, .stat, #apropos, #contact"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });

} else {

    animatedElements.forEach(function (element) {

        element.classList.add("show");

    });

}


// =========================
// CONTACT FORM → WHATSAPP
// =========================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get values

        const nom =
            document.getElementById("nom").value.trim();

        const telephone =
            document.getElementById("telephone").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        // WhatsApp number
        // IMPORTANT :
        // Remplace ce numéro par ton vrai numéro
        // sans + et sans espaces.

        const numero = "212710937826";


        // WhatsApp message

        const whatsappMessage =
            `Bonjour FroidPro,\n\n` +
            `Nom : ${nom}\n` +
            `Téléphone : ${telephone}\n` +
            `Service : ${service}\n` +
            `Message : ${message}`;


        // Encode message

        const whatsappURL =
            `https://wa.me/${numero}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}
