FROM node:12.14 as build-stage
LABEL maintainer="joingaram@gmail.com"
COPY package*.json ./
RUN npm install
COPY . .

