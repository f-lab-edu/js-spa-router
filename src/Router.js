import Home from "./pages/Home";
import About from "./pages/About";
import Item from "./pages/Item";

export default class Router {
  constructor() {
    this.$app = document.getElementById("app");
    this.routes = {
      "/": Home,
      "/about": About,
      "/item": Item,
    };

    window.addEventListener("popstate", this.route.bind(this));
  }

  route() {
    const { pathname } = window.location;
    const Component = this.routes[pathname];

    if (!Component) {
      alert("존재하지 않는 페이지입니다");
      return this.onNavigate("/");
    }

    this.$app.innerHTML = Component();
  }

  onNavigate(pathname) {
    window.history.pushState(null, null, pathname);
    this.route();
  }
}
