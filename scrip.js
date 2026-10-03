/* =====================================================
   LAKSHMI CONSTRUCTION
   JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ================= MOBILE NAVBAR ================= */

    const menuBtn = document.getElementById("menu-btn");

    const navMenu = document.querySelector(".nav-menu");


    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }


    /* ================= CURRENT YEAR ================= */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* ================= WHATSAPP QUOTE FORM ================= */

function sendToWhatsApp() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const workType = document.getElementById("workType").value;
    const location = document.getElementById("location").value.trim();
    const details = document.getElementById("details").value.trim();

    if (name === "" || phone === "" || workType === "" || location === "") {
        alert("Please fill in all required fields.");
        return;
    }

    const whatsappNumber = "919741187737";

    const message =
        "Hello sir!%0A%0A" +
        "I would like to request a quote.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Type of Work: " + encodeURIComponent(workType) + "%0A" +
        "Site Location: " + encodeURIComponent(location) + "%0A%0A" +
        "Project Details:%0A" +
        encodeURIComponent(details) + "%0A%0A" +
        "Please contact me to arrange a site visit.%0A%0A" +
        "Thank you.";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.location.href = whatsappURL;
}

    }

);


