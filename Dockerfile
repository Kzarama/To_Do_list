FROM node:latest

WORKDIR /app

COPY . .

RUN npm i -g npm

RUN npm i

CMD [ "npm", "start" ]