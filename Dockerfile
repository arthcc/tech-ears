FROM node:18 AS dependencies

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18 AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM node:18

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app ./

EXPOSE 3000

CMD ["yarn", "start"]