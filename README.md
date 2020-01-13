[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# rpg-tools

A small set of helpers for roleplaying games

Monorepo with yarn workspaces and lerna.

Run `yarn` in root directory

Run lerna commands from root as well.

Remember to build when working on linked packages at the same time.

When setting up new packages each package must have the following in it's own tsconfig.json:

```json
{
  // WHATEVER OTHER CONFIG
  "compilerOptions": {
    // WHATEVER OTHER CONFIG
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true
  }
  // WHATEVER OTHER CONFIG
}
```

## Deployment

### Discord bot

The Discord bot is deployed to a Digital Ocean droplet with Dokku. Everything is automated in the `deploy_bot_example.sh` script, but in order to run it you need to have the Docker CLI and be logged in, so that it's possible to push the image privately to Docker Hub. Replace the DOCKER_IMAGE_NAME with your own.

You also need to replace YOUR_DROPLET_IP with an actual IP address and make sure that you are able to ssh into it without password prompt. [This help article](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-existing-droplet/) from Digital Ocean can help you get going.

Lastly make the shell script executable `chmod +x deploy_bot.sh`

You are now good to go and should be able to deploy :D
