FROM node:alpine

WORKDIR /app/

COPY assets /app/assets
COPY pages /app/pages
COPY public /app/public
COPY styles /app/styles
COPY package.json /app/package.json
COPY .eslintrc.js /app/.eslintrc.js
COPY next.config.js /app/next.config.js
COPY yarn.lock /app/yarn.lock

RUN yarn
CMD npm run dev
