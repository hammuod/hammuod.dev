(function() {
  emailjs.init("3dY_DckMAD-xob1br"); 
})();
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const statusText = document.getElementById("status");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    statusText.style.background = "#232323"

    emailjs.sendForm("service_bt1290q", "template_csn0n0r", this)
      .then(function() {
        statusText.style.background = "#1cc18a"
      }, function(error) {
        statusText.style.background = "#c11c1c"
      });
  });
});

// i18next

let translations = {};
let currentLang = "ar";

async function loadLang(lang) {
  const res = await fetch(`./${lang}.json`);
  translations = await res.json();
  currentLang = lang;
  updateContent();
}
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key] || key;
  });
  const btn = document.getElementById("langBtn");
}
function toggleLang() {
  const newLang = currentLang === "ar" ? "en" : "ar";
  loadLang(newLang);
}
loadLang(currentLang);
