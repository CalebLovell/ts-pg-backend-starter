FROM node:12.18.1

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install

COPY . .

EXPOSE 7999
CMD npm start
