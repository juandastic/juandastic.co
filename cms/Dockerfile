FROM node:12.14.1
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 1337 80

CMD [ "npm", "run" ,"develop" ]