FROM node:20.9.0

WORKDIR /usr/src/portfolio

COPY package.json /usr/src/portfolio

RUN npm install

COPY . /usr/src/portfolio

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
