'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/** Open Mailboxes  */
const subject = encodeURIComponent("Let's Connect with a business enquiry.");
const to_email = "midhuns@fegno.com";
const phoneNumber = "918943397962"; // Replace with the recipient's phone number
const linkedinHandle = "midhuns-"; // Replace with the recipient's phone number
let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000';


const composeGmail = document.getElementById("composeGmail");
composeGmail.addEventListener("click", function() {
    const id_name = document.getElementById("id_name");
    const id_message = document.getElementById("id_message");
    const recipient = encodeURIComponent(id_name.value);
    const message = encodeURIComponent(id_message.value + '\n\n - With Regards \n\n' ) + recipient;
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${to_email}&subject=${subject}&body=${message}`;
    window.open(url, '_blank');
});

/** Open Mailboxes  */
const composeOutlook = document.getElementById("composeOutlook");
composeOutlook.addEventListener("click", function() {
    const id_name = document.getElementById("id_name");
    const id_message = document.getElementById("id_message");
    const recipient = encodeURIComponent(id_name.value);
    const message = encodeURIComponent(id_message.value + '\n\n - With Regards \n\n' )+ recipient;
    const url = `https://outlook.office365.com/mail/deeplink/compose?to=${to_email}&subject=${subject}&body=${message}`;
    window.open(url, '_blank');
});

/** Open Whatsapp  */
const composeWhatsapp = document.getElementById("composeWhatsapp");
composeWhatsapp.addEventListener("click", function() {
    const id_name = document.getElementById("id_name");
    const id_message = document.getElementById("id_message");
    const recipient = encodeURIComponent(id_name.value);
    const message = encodeURIComponent(id_message.value);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
});

/** Open LinkedIN  */
const composeLinkedin = document.getElementById("composeLinkedin");
composeLinkedin.addEventListener("click", function() {
    const id_name = document.getElementById("id_name");
    const id_message = document.getElementById("id_message");
    const recipient = encodeURIComponent(id_name.value);
    const message = encodeURIComponent(id_message.value);
    const url = `https://www.linkedin.com/messaging/compose/?recipient=${linkedinHandle}&message=${message}`;
    window.open(url, "_blank");
});



