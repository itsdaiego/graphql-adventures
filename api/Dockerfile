FROM node:latest

RUN mkdir /api

WORKDIR /api

COPY package.json /api

RUN npm i

COPY . /api

CMD ["npm", "start"]

