FROM node:16.17.0

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["nodemon", "src/bin/www"]