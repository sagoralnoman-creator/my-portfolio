const languageButton = document.getElementById("languageButton");
const translatableElements = document.querySelectorAll("[data-bn][data-en]");

let language = "bn";

document.getElementById("year").textContent = new Date().getFullYear();

languageButton.addEventListener("click", () => {
  language = language === "bn" ? "en" : "bn";
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${language}`);
  });

  languageButton.textContent = language === "bn" ? "English" : "বাংলা";
});