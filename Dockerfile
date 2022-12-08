FROM node:lts AS development

WORKDIR /app

COPY package*.json ./

RUN npm install rimraf

RUN npm install --only=development

COPY . .

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]