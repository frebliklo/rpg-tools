FROM node:alpine

WORKDIR /rpg-tools

COPY ./package.json .
COPY ./packages/common/package.json ./packages/common/
COPY ./packages/discord-bot/package.json ./packages/discord-bot/
COPY ./packages/open5e/package.json ./packages/open5e/

# Cannot install production until Discord.js upgrades
# RUN yarn install --production
RUN yarn install

COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/discord-bot/dist ./packages/discord-bot/dist
COPY ./packages/open5e/dist ./packages/open5e/dist
COPY ./packages/discord-bot/.env ./packages/discord-bot

WORKDIR ./packages/discord-bot

ENV NODE_ENV production

EXPOSE 80

CMD ["./node_modules/.bin/env-cmd", "node", "dist/index.js"]
