import { Open5eMonster } from '@rpg-tools/open5e'
import Discord from 'discord.js'

const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(process.env.DISCORD_TOKEN)

client.on('message', async msg => {
  console.log(msg.content)

  if (msg.content === '!ping') {
    msg.channel.send('Pong!!!')
  }

  if (msg.content === '!wolf') {
    const o5e = new Open5eMonster()

    const wolfData = await o5e.getMonsterBySlug('wolf')

    msg.channel.send(`I've found a ${wolfData.name} that has ${wolfData.hit_points} hit points`)
  }
})
