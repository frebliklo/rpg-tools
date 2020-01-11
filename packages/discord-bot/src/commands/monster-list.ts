import { Open5eMonster } from '@rpg-tools/open5e'
import Discord from 'discord.js'

export async function monsterList(message: Discord.Message, args: string[]): Promise<void> {
  const monsterApi = new Open5eMonster()

  const list = await monsterApi.getMonstersByName(args[0])

  if (list.length < 1) message.channel.send(`Couldn't find any monster based on '${args[0]}'`)

  const embed = new Discord.RichEmbed().setTitle('Monsters')

  list.forEach(item => {
    embed.addField('Name', item.name, true)
    embed.addField('Slug', item.slug, true)
    embed.addField('Challenge rating', item.challenge_rating, true)
  })

  message.channel.send(embed)
}
