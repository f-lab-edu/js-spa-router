import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Item from "./src/pages/Item";

const $app = document.getElementById("app");
const routes = {
  "/": Home,
  "/about": About,
  "/item": Item,
};
const { pathname } = window.location;
const Component = routes[pathname];

$app.innerHTML = Component();
