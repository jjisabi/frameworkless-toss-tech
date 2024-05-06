//express 불러옴
const express = require("express");
//node.js 의 내부 라이브러리 path 불러옴
const path = require("path");

//express 객체 생성
const app = express();
const PORT = 3000;

//1. 정적 파일 경로 설정 - Express 미들웨어 함수(express.static)
app.use(express.static(path.resolve(__dirname)));

//2. 브라우저에서 보내는 GET 요청에 응답 설정 ('/' 경로로 요청이 들어오면 index.html 전송한다.)
app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
})

app.listen(PORT, () => {
    console.log("server is running");
})


