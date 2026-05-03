/* =================== MOBIILI MENU =================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  const isOpen = navLinks.classList.contains("show");

  menuToggle.textContent = isOpen ? "×" : "☰";
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});


/* ================= SULJE MOBIILI MENU ========================= */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});


/* ===================== KIELIVAIHTO ========================= */

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-en][data-fi]");

function setLanguage(selectedLanguage) {
  translatableElements.forEach((element) => {
    element.innerHTML = element.dataset[selectedLanguage];
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === selectedLanguage);
  });

  document.documentElement.lang = selectedLanguage;
}

setLanguage("fi");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});