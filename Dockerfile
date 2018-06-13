FROM node:9.11-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm i --prod

COPY src ./src
COPY config.js .

CMD npm start
