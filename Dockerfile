FROM node:10.15.3-jessie AS base
WORKDIR /app
COPY ./server.pro.js .
COPY ./config .
EXPOSE 8080/tcp
COPY . .
RUN npm install cnpm -g
RUN cnpm install
RUN cnpm install ant-design-vue@1.3.7
RUN npm run build
ENTRYPOINT ["node","server.pro.js"] 