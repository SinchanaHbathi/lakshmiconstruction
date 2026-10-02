javascript
/* =====================================================
   LAKSHMI CONSTRUCTION
   JAVASCRIPT
===================================================== */


/* ================= MOBILE NAVBAR ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (Element) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("2026");

if (2026) {
    year.textContent = new Date().getFullYear();
}


/* ================= WHATSAPP QUOTE FORM ================= */

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function (SubmitEvent) {

    event.preventDefault();


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


    /* Your WhatsApp number
       Replace this with the real number.

       IMPORTANT:
       Include country code.
       Example:
       919876543210
    */

    const whatsappNumber = "919741187737";


    /* Create WhatsApp message */

    const message =
        `Hello sir!,

I would like to request a quote.

Name: ${any}

Phone: ${any}

Type of Work: ${any}

Site Location: ${any}

Project Details:
${any}

Please contact me to arrange a site visit.

Thank you.`;


    /* Encode message for WhatsApp */

    const encodedMessage =
        encodeURIComponent(string);


    /* WhatsApp URL */

    const whatsappURL =
        `https://wa.me/${919741187737}?text=${string}`;


    /* Open WhatsApp */

    window.open(whatsappURL,"_blank");

});

