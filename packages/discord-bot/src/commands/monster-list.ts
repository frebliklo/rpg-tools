import { Open5eMonster } from '@rpg-tools/open5e'
import Discord from 'discord.js'

export async function monsterList(message: Discord.Message, args: string[]): Promise<void> {
  const monsterApi = new Open5eMonster()

  const { count, monsters } = await monsterApi.getMonstersByName(args[0], 5)

  if (count < 1) message.channel.send(`Couldn't find any monster based on '${args[0]}'`)

  const embed = new Discord.RichEmbed().setTitle('Monsters')

  monsters.forEach(monster => {
    embed.addField('Name', monster.name, true)
    embed.addField('Slug', monster.slug, true)
    embed.addField('Challenge rating', monster.challenge_rating, true)
  })

  message.channel.send(embed)
}
