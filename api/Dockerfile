FROM node:8.12

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
	npm install --save sequelize sequelize-cli mysql2 jsonwebtoken bcryptjs

EXPOSE 3000

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
