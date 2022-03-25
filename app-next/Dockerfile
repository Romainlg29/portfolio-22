FROM node:16-alpine

ENV PORT 3000

RUN mkdir /app
WORKDIR /app

COPY package*.json /app
RUN npm install

COPY . /app

RUN npm run build
EXPOSE 3000

CMD "npm" "start"