# Dockerfile for react front end
FROM node:12.16-alpine

# Setup app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]

EXPOSE 3000
