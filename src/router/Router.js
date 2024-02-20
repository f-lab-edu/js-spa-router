import ItemListPage from "../pages/ItemList";
import ItemDetailPage from "../pages/ItemDetail";

import { REG_EXP, ROUTE_PATH } from "../constants";

export default class Router {
  constructor($target) {
    this.$target = $target;
    this.routeInfo = [
      { path: ROUTE_PATH.itemList, element: ItemListPage },
      { path: ROUTE_PATH.itemDetail, element: ItemDetailPage },
    ];

    window.addEventListener("popstate", this.route.bind(this));
    window.addEventListener("routechange", this.route.bind(this));
  }

  changeRoute(path, params) {
    let routePath = path;
    if (!!params) {
      routePath = path.replace(REG_EXP.dynamicRoute, params);
    }

    history.pushState(null, null, routePath);
    window.dispatchEvent(new CustomEvent("routechange"));
  }

  getCurrentRoute(pathname) {
    return this.routeInfo.find((route) => {
      if (REG_EXP.dynamicRoute.test(route.path)) {
        return pathname.startsWith(
          route.path.replace(REG_EXP.dynamicRoute, "")
        );
      }
      return route.path === pathname;
    });
  }

  getRouteParams(routePath, pathname) {
    let routeParams = null;

    if (REG_EXP.dynamicRoute.test(routePath)) {
      const paramValue = pathname.replace(
        routePath.replace(REG_EXP.dynamicRoute, ""),
        ""
      );
      routeParams = {
        id: paramValue,
      };
    }

    return routeParams;
  }

  route() {
    this.$target.innerHTML = "";

    const { pathname } = location;

    const currentRoute = this.getCurrentRoute(pathname);

    if (!currentRoute) {
      alert("페이지를 찾을 수 없습니다");
      return this.changeRoute(ROUTE_PATH.itemList);
    }

    const { path, element: Page } = currentRoute;

    const routeParams = this.getRouteParams(path, pathname);

    const pageProps = !routeParams
      ? { $target: this.$target }
      : { $target: this.$target, params: routeParams };

    new Page({ ...pageProps }).render();
  }
}
