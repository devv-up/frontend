FROM node:12.14
COPY package*.json ./
RUN npm install
RUN npm install -g @vue/cli
