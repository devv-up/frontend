FROM node:12.14
COPY package*.json ./
RUN npm install -g @vue/cli
RUN npm install

