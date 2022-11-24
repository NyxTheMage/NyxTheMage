var encEmail = "bnl4dGhlbWFnZS5iaXpAZ21haWwuY29t";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));