FROM node:alpine

WORKDIR /app/

COPY assets /app/assets
COPY pages /app/pages
COPY public /app/public
COPY styles /app/styles
COPY package.json /app/package.json
COPY .eslintrc.json /app/.eslintrc.json
COPY next.config.js /app/next.config.js

RUN yarn
CMD npm run dev
