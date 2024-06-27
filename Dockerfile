FROM node:18 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["yarn", "start"]