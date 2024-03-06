import Router from "./src/Router";

window.addEventListener("DOMContentLoaded", () => {
  const router = new Router();

  router.route();

  document.querySelector(".navbar ul").addEventListener("click", (e) => {
    e.preventDefault();
    const $link = e.target.closest("li a");

    if ($link) {
      router.onNavigate($link.getAttribute("href"));
    }
  });
});
