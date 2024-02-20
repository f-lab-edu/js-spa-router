import Router from "./router/Router";

export default class App {
  constructor($target) {
    this.router = new Router($target);
    this.router.route();
  }
}
