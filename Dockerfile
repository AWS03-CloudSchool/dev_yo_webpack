FROM node:lts-slim

# 작업 디렉토리 생성 및 설정
WORKDIR /usr/src/app

# package.json과 package-lock.json을 작업 디렉토리로 복사
COPY package*.json ./

# 의존성 설치
RUN npm install