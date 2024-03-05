import Router from "./src/Router";

const router = new Router();

router.route();

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".navbar ul").addEventListener("click", (e) => {
    e.preventDefault();
    const $link = e.target.closest("li a");

    if ($link) {
      router.onNavigate($link.getAttribute("href"));
    }
  });
});
