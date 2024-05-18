// URL 경로의 동적 세그먼트를 식별
const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
//URL의 일부분을 대응시키기 위한 정규 표현식
const URL_FRAGMENT_REGEXP = "([^\\/]+)";

/**
 * 경로의 매개변수 값 추출 함수
 * 인자로 받은 경로에 매개변수가 없으면 return
 * 주어진 경로와 경로명을 match()하고 shift()하여 매개변수의 값인 두 번째값만 추출하여 return
 * route.testRegExp: /^\/detail\/([^\\/]+)$/
 * pathname: /detail/123
 * match(): /detail/123,123
 */
export const extractUrlParams = (route, pathname) => {
  const params = {};

  if (route.params.length === 0) {
    return params;
  }

  const matches = pathname.match(route.testRegExp);

  matches.shift();

  matches.forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });
  return params;
};

export default () => {
  const routes = [];
  let notFound = () => { };
  let lastPathname;

  /**
   * 현재 경로와 이전 경로 확인해서 일치하면 return
   * 변경되었으면 라우트 view 실행
   * 일치하는 경로가 없을 경우 notFound 실행
  */
  const checkRoutes = () => {
    const { pathname } = window.location;
    if (lastPathname === pathname) {
      return;
    }

    lastPathname = pathname;

    const currentRoute = routes.find((route) => {
      const { testRegExp } = route;
      return testRegExp.test(pathname);
    });

    if (!currentRoute) {
      notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, pathname);
    //현재 경로의 view(component)를 찾아 보여준다.
    currentRoute.view(urlParams);
  };

  const router = {
    addRoute: (path, view) => {
      const params = [];

      const parsedPath = path
        .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
          params.push(paramName);
          return URL_FRAGMENT_REGEXP;
        })
        .replace(/\//g, "\\/");

      /**
       * routes[] 배열 목록에 저장
       * testRegExp: 파싱된 경로 /^\/$/, /^\/tech$/, /^\/design$/, /^\/detail\/([^\\/]+)$/
       * view: 경로 목록, component(view)
       * params: 경로 매개변수 (:id) 
       */
      routes.push({
        testRegExp: new RegExp(`^${parsedPath}$`),
        view,
        params,
      });

      return router;
    },

    setNotFound: (cb) => {
      notFound = cb;
      return router;
    },

    /** 
     * historyAPI: history 객체를 통해 브라우저의 세션 기록에 접근하고, 기록의 앞,뒤 이동 가능 (window의 history 객체 이용할 수 있는 API)
     * 기록을 위해 주소 저장공간, 주소록(스택)에 주소를 추가해야 하고 이를 pushState가 해준다.
     * window.history.pushState(null, null, URL) : 히스토리 스택에 데이터를 푸시하여 현재 URL을 히스토리에 추가하고 해당 URL로 이동
     * 다시 경로에 맞는 렌더링까지는 해주지 않으므로, view를 호출하는 checkRoutes()실행하여 component를 보여준다.
    */
    navigate: (path) => {
      window.history.pushState(null, null, path);
      checkRoutes();
    },

    start: () => {
      checkRoutes();
      //앞/뒤로가기 구현, 이때 적절한 componet 보여주면 되므로 렌더링 하는 함수 실행(checkRoutes 함수 내부 component 보여주는 로직 구현)
      window.addEventListener("popstate", checkRoutes);
    },
  };

  return router;
};