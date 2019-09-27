FROM node:11-alpine

RUN apk add --update git && \
  rm -rf /tmp/* /var/cache/apk/*

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g http-server && \
    npm install vue-morris --save && \
    npm install axios --save

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
