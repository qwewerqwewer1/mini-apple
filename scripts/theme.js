document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Установить начальную тему (можно добавить сохранение в localStorage)
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.toggle("light", currentTheme === "light");

  // Обработчик переключения темы
  themeToggleButton.addEventListener("click", () => {
    const isLightTheme = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  });
});
