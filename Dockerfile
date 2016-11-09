FROM node:4.4.5-slim

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install && npm install -g webpack

COPY . /app

EXPOSE 8080

CMD [ "npm", "start"]
