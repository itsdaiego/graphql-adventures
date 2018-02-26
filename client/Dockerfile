FROM node:latest

RUN mkdir /client

WORKDIR /client

COPY package.json /client

RUN npm i

COPY . /client

CMD ["npm", "start"]

