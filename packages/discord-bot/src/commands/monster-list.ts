import { Open5eMonster } from '@rpg-tools/open5e'
import { Monster } from '@rpg-tools/open5e/dist/types/Monster.interface'
import Discord from 'discord.js'

import { createMonsterEmbed } from './monster'

function createListEmbed(monsters: Monster[], title: string): Discord.RichEmbed {
  const embed = new Discord.RichEmbed().setTitle(title)

  monsters.forEach(monster => {
    embed.addField('Name', monster.name, true)
    embed.addField('Slug', monster.slug, true)
    embed.addField('Challenge rating', monster.challenge_rating, true)
  })

  return embed
}

export async function monsterList(message: Discord.Message, args: string[]): Promise<void> {
  const monsterApi = new Open5eMonster()
  let skip = args[1] ? parseFloat(args[1]) : 0
  const { count, monsters } = await monsterApi.getMonstersByName(args[0], 5, skip)

  if (count < 1) {
    message.channel.send(`Couldn't find any monster based on '${args[0]}'`)
    return
  }

  const monsterNames = monsters.map(monster => monster.name)
  const monsterSlugs = monsters.map(monster => monster.slug)

  const embed = createListEmbed(monsters, 'Monsters')

  message.channel.send(`Found ${count} monsters`)
  message.channel.send(embed)

  const filter = (response: Discord.Message): boolean => {
    return (
      response.content.includes('next') ||
      response.content.includes('skip') ||
      monsterNames.includes(response.content) ||
      monsterSlugs.includes(response.content)
    )
  }
  const collector = message.channel.createMessageCollector(filter, { time: 15000 })

  collector.on('collect', async response => {
    if (response.content === 'next') {
      skip = skip + 5
    }

    if (response.content.includes('skip')) {
      const resArgs = response.content.split(' ')

      skip = parseInt(resArgs[1])
    }

    if (monsterNames.includes(response.content) || monsterSlugs.includes(response.content)) {
      const [monsterByName] = monsters.filter(
        monster => monster.name === response.content || monster.slug === response.content,
      )

      const resMonsterByNAme = await monsterApi.getMonsterBySlug(monsterByName.slug)

      message.channel.send(createMonsterEmbed(resMonsterByNAme))
      collector.stop()
      return
    }

    const { monsters: resMonsters } = await monsterApi.getMonstersByName(args[0], 5, skip)

    resMonsters.length > 0
      ? message.channel.send(createListEmbed(resMonsters, 'More monsters'))
      : message.channel.send(`No more monsters from the search word: ${args[0]}`)
  })

  collector.on('end', () => {
    message.channel.send('Let me know if I need to look up more monsters')
  })
}
