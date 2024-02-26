import Router from "./router/Router";

export default function App({ $target }) {
  const router = new Router($target);

  router.route();
}

// export default class App {
//   constructor($target) {
//     this.router = new Router($target);
//     this.router.route();
//   }
// }
