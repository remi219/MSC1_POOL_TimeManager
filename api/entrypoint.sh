#!/bin/bash

sequelize db:migrate && \
sleep 4 && \
sequelize db:seed:all && \
sleep 4 && \
npm start
