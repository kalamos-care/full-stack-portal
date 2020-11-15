FROM node:15.2.0 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --no-cache

COPY . /app
RUN npm run build

FROM node:15.2.0
WORKDIR /app

RUN npm install -g 'serve@11.3.2'
COPY --from=build /app/build/ ./

CMD ["serve", "-l", "3000", "-s", "."]
