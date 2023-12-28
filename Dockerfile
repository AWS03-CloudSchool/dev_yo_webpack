# Node.js 이미지를 사용합니다. 여기서는 LTS 버전을 사용하겠습니다.
FROM node:lts as production-stage

# 작업 디렉터리를 설정합니다.
WORKDIR /app

# 애플리케이션 파일을 컨테이너로 복사합니다.
# package.json과 package-lock.json 파일을 먼저 복사합니다.
COPY package*.json ./

# 필요한 Node 패키지를 설치합니다.
RUN npm install

# 나머지 애플리케이션 소스 코드를 복사합니다.
COPY . .

# 애플리케이션이 사용할 포트를 지정합니다. 예를 들어 80 포트를 사용한다고 가정합니다.
EXPOSE 8050

# 애플리케이션을 시작합니다.
CMD ["node", "./server.js"]