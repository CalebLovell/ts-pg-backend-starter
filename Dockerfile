FROM node:12-alpine

USER me

RUN mkdir /home/me/app

WORKDIR /home/me/app

COPY --chown=me:me package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY --chown=me:me . .

EXPOSE 7999

CMD yarn start
