/* =====================================================
LAKSHMI CONSTRUCTION
JAVASCRIPT
===================================================== */

/* ================= MOBILE NAVBAR ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {


menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


}

/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {


link.addEventListener("click", function () {
    navMenu.classList.remove("active");
});

});

/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

/* ================= WHATSAPP QUOTE FORM ================= */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {


quoteForm.addEventListener("submit", function (submitEvent) {

    /* Stop the form from refreshing the page */
    submitEvent.preventDefault();


    /* Get form values */

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const workType =
        document.getElementById("workType").value;

    const location =
        document.getElementById("location").value.trim();

    const details =
        document.getElementById("details").value.trim();


    /* ================= WHATSAPP NUMBER ================= */

    const whatsappNumber = "919741187737";


    /* ================= CREATE MESSAGE ================= */

    const message =


`Hello sir!

I would like to request a quote.

Name: ${name}

Phone: ${phone}

Type of Work: ${workType}

Site Location: ${location}

Project Details:
${details}

Please contact me to arrange a site visit.

Thank you.`;

    /* ================= ENCODE MESSAGE ================= */

    const encodedMessage =
        encodeURIComponent(message);


    /* ================= WHATSAPP URL ================= */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    /* ================= OPEN WHATSAPP ================= */

    window.open(whatsappURL, "_blank");

});
}

