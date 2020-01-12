import { getModifier } from '@rpg-tools/common'
import { Open5eMonster } from '@rpg-tools/open5e'
import { Monster } from '@rpg-tools/open5e/dist/types/Monster.interface'
import Discord from 'discord.js'

export function createMonsterEmbed(monster: Monster): Discord.RichEmbed {
  const embed = new Discord.RichEmbed()
    .setTitle(monster.name)
    .setURL(`https://open5e.com/monsters/${monster.slug}`)
    .addField('Armor class', monster.armor_class)
    .addField('Hit points', `${monster.hit_points} (${monster.hit_dice})`)
    .addField('STR', `${monster.strength} (${getModifier(monster.strength)})`, true)
    .addField('DEX', `${monster.dexterity} (${getModifier(monster.dexterity)})`, true)
    .addField('CON', `${monster.constitution} (${getModifier(monster.constitution)})`, true)
    .addField('INT', `${monster.intelligence} (${getModifier(monster.intelligence)})`, true)
    .addField('WIS', `${monster.wisdom} (${getModifier(monster.wisdom)})`, true)
    .addField('CHA', `${monster.charisma} (${getModifier(monster.charisma)})`, true)

  for (const skill in monster.skills) {
    embed.addField(skill.charAt(0).toUpperCase() + skill.slice(1), monster.skills[skill])
  }

  embed.addField('Senses', monster.senses).addField('Challenge', monster.challenge_rating)

  if (monster.special_abilities) {
    monster.special_abilities.forEach(ability => embed.addField(ability.name, ability.desc))
  }

  if (monster.actions) {
    monster.actions.forEach(action => embed.addField(action.name, action.desc))
  }

  return embed
}

export async function monster(message: Discord.Message, args: string[]): Promise<void> {
  const monsterApi = new Open5eMonster()

  try {
    const monster = await monsterApi.getMonsterBySlug(args[0])

    const embed = createMonsterEmbed(monster)

    message.channel.send(embed)
  } catch (error) {
    message.channel.send(
      `Something went wrong. Couldn't find any monsters based on the input; ${args[0]}. Try searching for it with the list command; "!monsterlist" ${args[0]}`,
    )
  }
}
