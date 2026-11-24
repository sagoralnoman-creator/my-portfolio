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
});const themeButton = document.getElementById("themeButton");
const themeLabel = document.getElementById("themeLabel");
const themeIcon = document.getElementById("themeIcon");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
let colorTheme = "dark";

try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    colorTheme = savedTheme;
  }
} catch {
  // Theme switching still works if storage is unavailable.
}

function applyColorTheme() {
  document.documentElement.dataset.theme = colorTheme;
  themeButton.setAttribute("aria-pressed", String(colorTheme === "light"));
  themeIcon.textContent = colorTheme === "dark" ? "☀" : "☾";

  themeLabel.dataset.en = colorTheme === "dark" ? "Light" : "Dark";
  themeLabel.dataset.bn = colorTheme === "dark"
    ? "\u09B2\u09BE\u0987\u099F"
    : "\u09A1\u09BE\u09B0\u09CD\u0995";
  themeLabel.textContent = themeLabel.getAttribute(`data-${language}`);

  if (themeColorMeta) {
    themeColorMeta.content = colorTheme === "dark" ? "#081426" : "#f4f7fc";
  }
}

applyColorTheme();

themeButton.addEventListener("click", () => {
  colorTheme = colorTheme === "dark" ? "light" : "dark";

  try {
    localStorage.setItem("portfolio-theme", colorTheme);
  } catch {
    // Theme switching still works if storage is unavailable.
  }

  applyColorTheme();
});
