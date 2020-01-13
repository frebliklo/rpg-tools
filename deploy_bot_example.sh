#! /bin/bash
yarn build:bot
docker build . -f bot.Dockerfile -t DOCKER_IMAGE_NAME:latest
docker push DOCKER_IMAGE_NAME:latest
ssh root@YOUR_DROPLET_IP "docker pull DOCKER_IMAGE_NAME:latest && docker tag DOCKER_IMAGE_NAME:latest dokku/discord-bot:latest && dokku tags:deploy discord-bot latest"