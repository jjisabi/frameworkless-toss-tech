import createRouter from "./src/router/router.js";
import createPages from "./src/router/pages.js";

const container = document.querySelector("#app");
const pages = createPages(container);

/* 
  라우터 구성
  addRoute 메소드: routes 배열에 저장할 경로, 경로에 따라 보여줄 컴포넌트 정의
  setNotFound 메소드: 일치하는 경로 없을 경우
  start 메소드: 라우터 초기화하고 url이 변경되면 listen하여 라우팅
*/
const router = createRouter();
router
  .addRoute("/", pages.tech)
  .addRoute("/tech", pages.tech)
  .addRoute("/design", pages.design)
  .addRoute("/detail/:id", pages.detail)
  .setNotFound(pages.notFound)
  .start();

/*
  버튼 클릭 시 라우팅 기능 적용
  버튼의 data-navigate 속성 가져오고, 클릭 시 경로를 param으로 넘겨 router의 navigate() 메서드를 호출하여 경로 이동
*/
const ATTR_SELECTOR = "[data-navigate]";
document.body.addEventListener("click", (e) => {
  const target = e.target.closest(ATTR_SELECTOR);
  if (target !== null && target.matches(ATTR_SELECTOR)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
  }
});