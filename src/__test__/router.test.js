import createRouter, { extractUrlParams , checkRoutes } from "../router/router.js";

//1)extractUrlParams 함수 
describe("1) extractUrlParams 함수", () => {
    test("URL에 파라미터가 없을 경우 Return 한다." , () => {
      const route = {
        params: [],
        testRegExp: /tech/,
      };
      const pathname = "/tech";
      expect(extractUrlParams(route, pathname)).toEqual({});
    })

    test("URL에서 파라미터를 뽑는다.", () => {
      const route = {
        params: ["id"],
        testRegExp: /^\/detail\/([^\\/]+)$/,
      };
      const pathname = "/detail/1";
      expect(extractUrlParams(route, pathname)).toEqual({
        id: "1",
      });
    });
});

//2) Router 함수
describe("3) Router 함수 테스트 ", () => {
    let router;
    let mockCallback;
    let mockNotFoundCallback;

    beforeEach(() => {
        router = createRouter();
        mockCallback = jest.fn();
        mockNotFoundCallback = jest.fn();

        router.addRoute("/detail/:id", mockCallback);
        router.setNotFound(mockNotFoundCallback);

        //윈도우 객체 생성
        global.window = Object.create(window);
        
        //window 객체에 "location" 속성 추가, 기본 경로(pathname) /로 설정
        Object.defineProperty(window, "location", {
            value: {
              pathname: '/',
            },
            writable: true,
          });
    })

    test("calls the callback when the route matches", () => {
        window.location.pathname = "/detail/1";
        router.start();

        //함수가 호출 되었는 지 확인
        expect(mockCallback).toHaveBeenCalled();
    })

    test("calls notFound when no route matches", () => {
        window.location.pathname = "/not-added-page";
        router.start();

        expect(mockNotFoundCallback).toHaveBeenCalled();
    })
})

