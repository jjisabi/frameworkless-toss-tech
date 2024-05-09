import Router from "../router/router.js";

const sum = (a,b)=> {
    return a + b;
}

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("addRoute 호출 시 해당 경로의 뷰가 실행 되는 지 테스트", () => {
    let router;
    router = Router();
    const pageFunction = jest.fn();
    router.addRoute("/", pageFunction);
    
});

