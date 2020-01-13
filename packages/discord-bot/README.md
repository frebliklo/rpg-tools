# @rpg-tools/discord-bot

Private Discord bot coded with [discord.js](https://discord.js.org/#/)

Local config file is required in the `src` directory. the file should look like this:

```json
{
  "prefix": "!",
  "token": "you-token-goes-here"
}
```

The token can be obtained in the [Discord Developer Portal](https://discordapp.com/developers/)

## Deployment

The bot is deployed to Digital Ocean using Docker. See the read me in the root directory for instructions.
