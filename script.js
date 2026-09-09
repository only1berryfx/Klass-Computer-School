/* =========================================================
   KLASS COMPUTER SCHOOL
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");

});


/* Close mobile menu when a link is clicked */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

    });

});



/* =========================================================
   2. BACK TO TOP BUTTON
========================================================= */

const backToTop = document.getElementById("back-to-top");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================================================
   3. AUTOMATIC COPYRIGHT YEAR
========================================================= */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();



/* =========================================================
   4. CONTACT FORM → WHATSAPP
========================================================= */

const contactForm = document.getElementById("contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get the values entered by the visitor */

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const course = document.getElementById("course").value;

    const message = document.getElementById("message").value;


    /* Create the WhatsApp message */

    const whatsappMessage =
        `Hello Klass Computer School.%0A%0A` +
        `My name is ${name}.%0A` +
        `My phone number is ${phone}.%0A` +
        `I am interested in: ${course || "your computer training courses"}.%0A%0A` +
        `Message:%0A${message || "I would like to get more information about your training."}`;


    /* Klass WhatsApp number */

    const whatsappNumber = "2348161118790";


    /* Create WhatsApp URL */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    /* Open WhatsApp */

    window.open(whatsappURL, "_blank");

});



/* =========================================================
   5. GALLERY LIGHTBOX
========================================================= */


/* Create the lightbox */

const lightbox = document.createElement("div");

lightbox.className = "lightbox";


lightbox.innerHTML = `
    <button class="lightbox-close">
        ×
    </button>

    <img src="" alt="Gallery image" class="lightbox-image">
`;


document.body.appendChild(lightbox);


/* Get gallery images */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightboxImage = lightbox.querySelector(".lightbox-image");

const lightboxClose = lightbox.querySelector(".lightbox-close");


/* Open image */

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

    });

});


/* Close lightbox */

lightboxClose.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


/* Close when clicking the background */

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


/* Close with Escape key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});



/* =========================================================
   6. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".course-card, .benefit-card, .step, .testimonial-card, .gallery-item"
);


const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});