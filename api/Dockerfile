FROM node:8.12

WORKDIR /usr/src/app

COPY package.json .

RUN npm install && \
    npm install -g sequelize sequelize-cli mysql2

#RUN npm install && \
#	npm install --g sequelize sequelize-cli mysql2 cors axios && \
#	npm install --save jsonwebtoken csurf cors axios

COPY . .

EXPOSE 3000

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
