import { Open5eMonster } from '@rpg-tools/open5e'
import AsciiTable from 'ascii-table'
import Discord from 'discord.js'

export async function monsterList(message: Discord.Message, args: string[]): Promise<void> {
  const monsterApi = new Open5eMonster()

  const list = await monsterApi.getMonstersByName(args[0])

  const table = new AsciiTable()

  table.setHeading('Name', 'Slug')

  list.forEach(item => {
    table.addRow(item.name, item.slug)
  })

  message.channel.send(`I found ${list.length} monsters!`)
  message.channel.send(table.toString())
}
