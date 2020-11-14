FROM node:15.2.0 as build

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install --no-cache

ADD . /app
RUN npm run build

FROM node:15.2.0
WORKDIR /app

RUN npm install -g serve
COPY --from=build /app/build/ ./

CMD ["serve", "-l", "3000", "."]
