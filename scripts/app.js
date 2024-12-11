document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Функция для загрузки контента
  function loadContent(page) {
    app.innerHTML = templates[page] || `<h1>404</h1><p>Page not found</p>`;
  }

  // Устанавливаем обработчики кликов
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = event.target.dataset.link;
      console.log(event);
      loadContent(page);
      history.pushState({ page }, "", `#${page}`);
    });
  });

  // Обработка кнопки "назад" и "вперед" в браузере
  window.addEventListener("popstate", (event) => {
    const page = event.state?.page || "home";
    loadContent(page);
  });

  // Загрузка начальной страницы
  loadContent("home");
});
