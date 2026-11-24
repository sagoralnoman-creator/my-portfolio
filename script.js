const languageButton = document.getElementById("languageButton");
const translatableElements = document.querySelectorAll("[data-bn][data-en]");
const yearElement = document.getElementById("year");
let language = "en";

yearElement.textContent = new Date().getFullYear();

document.documentElement.lang = language;
languageButton.textContent = "বাংলা";

languageButton.addEventListener("click", () => {
  language = language === "en" ? "bn" : "en";
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${language}`);
  });

  languageButton.textContent = language === "en" ? "বাংলা" : "English";
});