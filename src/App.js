import Router from "./router/Router";

export default function App({ $target }) {
  const router = new Router($target);

  router.route();
}
