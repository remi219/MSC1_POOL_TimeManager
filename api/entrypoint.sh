#!/bin/bash

set -xe

sequelize db:migrate && \
sequelize db:seed:all && \
exec npm start
