import Discord from 'discord.js'

import { monsterList } from './commands/monster-list'

const prefix = process.env.PREFIX || '!'

const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')

  client.user.setPresence({
    status: 'online',
    game: {
      type: 'WATCHING',
      name: 'Adventure Time',
    },
  })
})

client.login(process.env.DISCORD_TOKEN)

client.on('message', async message => {
  console.log(message.content)
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(' ')

  if (!args || args.length < 1) return

  const command = args.shift()?.toLowerCase()

  if (command === 'monsterlist') await monsterList(message, args)
})
