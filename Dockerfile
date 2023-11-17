FROM node:lts-slim as build-stage

# 작업 디렉토리 생성 및 설정
WORKDIR /usr/src/app

# package.json과 package-lock.json을 작업 디렉토리로 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

COPY ./ ./
RUN npm run build

# Nginx 이미지를 사용하여 서빙 단계를 수행합니다.
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# 기본 Nginx 설정을 사용하거나, 필요에 따라 Nginx 설정을 복사합니다.
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]