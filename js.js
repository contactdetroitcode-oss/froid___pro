/* =========================
   FROIDPRO — JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE MENU
    // =========================

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuBtn.textContent =
                isOpen ? "✕" : "☰";

            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Fermer le menu"
                    : "Ouvrir le menu"
            );

        });


        const links =
            navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

            });

        });

    }


    // =========================
    // HEADER SCROLL
    // =========================

    const header =
        document.getElementById("header");

    function handleHeader() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleHeader
    );

    handleHeader();


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealElements =
        document.querySelectorAll(
            ".service-card, " +
            ".project-card, " +
            ".process-item, " +
            ".why-item, " +
            ".stat-item, " +
            ".about-main-card, " +
            ".contact-info, " +
            ".contact-form"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "reveal"
                                );

                                setTimeout(
                                    function () {

                                        entry.target.classList.add(
                                            "show"
                                        );

                                    },
                                    50
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal",
                    "show"
                );

            }
        );

    }


    // =========================
    // CONTACT FORM → WHATSAPP
    // =========================

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nom =
                    document
                        .getElementById("nom")
                        .value
                        .trim();


                const telephone =
                    document
                        .getElementById("telephone")
                        .value
                        .trim();


                const service =
                    document
                        .getElementById("service")
                        .value;


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();


                if (
                    !nom ||
                    !telephone ||
                    !service ||
                    !message
                ) {

                    alert(
                        "Veuillez remplir tous les champs."
                    );

                    return;
                }


                // =========================
                // TON NUMÉRO WHATSAPP
                // 0710937826
                // Format international Maroc:
                // 212710937826
                // =========================

                const numero =
                    "212710937826";


                const whatsappMessage =
                    `Bonjour FroidPro 👋

Nom : ${nom}
Téléphone : ${telephone}
Service : ${service}

Message :
${message}

Je souhaite obtenir plus d'informations.`;


                const whatsappURL =
                    `https://wa.me/${numero}?text=${encodeURIComponent(
                        whatsappMessage
                    )}`;


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    // =========================
    // BACK TO TOP
    // =========================

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // =========================
    // CONSOLE
    // =========================

    console.log(
        "❄️ FroidPro — Site chargé avec succès."
    );

    console.log(
        "📱 WhatsApp : 212710937826"
    );

});
