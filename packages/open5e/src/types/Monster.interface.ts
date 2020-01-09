import { TypesEnum } from './TypesEnum'
import { SubtypesEnum } from './SubtypesEnum'
import { GroupsEnum } from './GroupsEnum'
import { AlignmentsEnum } from './AlignmentsEnum'

export interface Monster {
  slug: string
  name: string
  size: string
  type: TypesEnum
  subtype: SubtypesEnum | ''
  group: GroupsEnum
  alignment: AlignmentsEnum
  armor_class: number
  armor_desc: string
  hit_points: number
  hit_dice: string
  speed: Speed
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  strength_save?: number
  dexterity_save?: number
  constitution_save?: number
  intelligence_save?: number
  wisdom_save?: number
  charisma_save?: number
  perception?: number
  skills: Skills
  damage_vulnerabilities: string
  damage_resistances: string
  damage_immunities: string
  condition_immunities: string
  senses: string
  languages: string
  challenge_rating: string
  actions: Action[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactions: any
  legendary_desc: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legendary_actions: any
  special_abilities: SpecialAbility[]
  spell_list: string[]
  img_main: string
  document__slug: string
  document__title: string
  document__license_url: string
}

type Speed = {
  walk: number
  swim?: number
  hover?: boolean
  fly?: number
  burrow?: number
  climb?: number
}

type Skills = {
  athletics: number
  intimidation: number
  history?: number
  perception?: number
  deception?: number
  performance?: number
  persuasion?: number
  stealth?: number
  medicine?: number
  religion?: number
  insight?: number
  arcana?: number
  nature?: number
  acrobatics?: number
  survival?: number
  investigation?: number
}

type Action = {
  attack_bonus: number
  damage_dice: string
  desc: string
  name: string
  damage_bonus?: number
}

type SpecialAbility = {
  desc: string
  name: string
}
