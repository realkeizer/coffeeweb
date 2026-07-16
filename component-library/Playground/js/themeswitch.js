const themeToggle = document.querySelector(".theme-toggle");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {

    const newTheme =
        html.dataset.theme === "dark"
            ? "light"
            : "dark";

    html.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);
});