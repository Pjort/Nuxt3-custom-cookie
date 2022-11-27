FROM node:17-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN npm install && npm cache clean --force

COPY . .

RUN npm run build

ENV TZ="Europe/Copenhagen"
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE $PORT 

ENTRYPOINT ["node", ".output/server/index.mjs"]