FROM node:latest

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install

ADD . /app
CMD ["npm", "run", "start"]
