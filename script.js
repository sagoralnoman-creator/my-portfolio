const languageButton = document.getElementById("languageButton");
const translatableElements = document.querySelectorAll("[data-bn][data-en]");
const yearElement = document.getElementById("year");
let language = "en";

function applyLanguage() {
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${language}`);
  });

  languageButton.textContent = language === "en" ? "বাংলা" : "English";
}

yearElement.textContent = new Date().getFullYear();
applyLanguage();

languageButton.addEventListener("click", () => {
  language = language === "en" ? "bn" : "en";
  applyLanguage();
});
