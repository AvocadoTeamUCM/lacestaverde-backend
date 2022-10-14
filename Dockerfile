FROM node:16
WORKDIR /Cesta-verde-server/app.js

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "serve.js"]