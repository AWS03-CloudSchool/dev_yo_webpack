const express = require('express');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


// CORS 미들웨어를 사용합니다.
app.use(cors(
  {
    origin: "*", // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  }
));

// 정적 파일 경로를 설정합니다.
app.use(express.static(path.join(__dirname, 'dist')));

// API 요청을 위한 프록시 설정
app.use('/api', createProxyMiddleware({
  target: 'http://my-spring:9090', // 백엔드 서버 주소
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // API 경로를 리라이트합니다.
  }
}));

// 모든 GET 요청을 index.html로 라우팅합니다.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 서버를 시작합니다.
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
