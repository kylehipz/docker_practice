# Dockerfile for node express backend api
FROM node:12.16-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
copy package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

