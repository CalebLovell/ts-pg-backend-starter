FROM node:12.18.1

WORKDIR /app

COPY ./package.json yarn.lock ./

RUN npm install

COPY . .

CMD npm start
