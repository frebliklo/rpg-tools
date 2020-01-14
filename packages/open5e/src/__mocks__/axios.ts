/* eslint-disable @typescript-eslint/camelcase */
export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            slug: 'firebird',
            name: 'Firebird',
            size: 'Small',
            type: 'celestial',
            subtype: '',
            group: null,
            alignment: 'neutral good',
            armor_class: 16,
            armor_desc: 'natural armor',
            hit_points: 99,
            hit_dice: '18d6+36',
            speed: {
              walk: 20,
              fly: 100,
            },
            strength: 12,
            dexterity: 19,
            constitution: 14,
            intelligence: 16,
            wisdom: 15,
            charisma: 21,
            strength_save: null,
            dexterity_save: 6,
            constitution_save: 4,
            intelligence_save: 5,
            wisdom_save: 4,
            charisma_save: 7,
            perception: 7,
            skills: {
              acrobatics: 6,
              arcana: 5,
              insight: 4,
              medicine: 4,
              nature: 5,
              perception: 7,
              religion: 5,
            },
            damage_vulnerabilities: '',
            damage_resistances:
              'lightning; bludgeoning, piercing, and slashing from nonmagical weapons',
            damage_immunities: 'fire',
            condition_immunities: 'charmed, frightened, invisible',
            senses: 'truesight 60 ft., passive Perception 17',
            languages: 'Celestial, Common, Elvish, Primordial, Sylvan',
            challenge_rating: '4',
            actions: [
              {
                name: 'Multiattack',
                desc: 'The firebird makes one bite attack and two claw attacks.',
              },
              {
                name: 'Bite',
                desc:
                  'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 4) piercing damage.',
                attack_bonus: 6,
                damage_dice: '1d8',
              },
              {
                name: 'Claw',
                desc:
                  'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d8 + 4) slashing damage.',
                attack_bonus: 6,
                damage_dice: '2d8',
              },
              {
                name: 'Blinding Ray (Recharge 5-6)',
                desc:
                  'The firebird can fire a burning ray of light from its tail feathers in a line 5 feet wide and up to 50 feet long. Targets in the line must succeed on a DC 15 Dexterity saving throw or take 24 (7d6) fire damage and become blinded for 1d4 rounds. A successful saving throw negates the blindness and reduces the damage by half.',
              },
            ],
            reactions: '',
            legendary_desc: '',
            legendary_actions: '',
            special_abilities: [
              {
                name: 'Innate Spellcasting',
                desc:
                  "the firebird's innate spellcasting ability is Charisma (spell save DC 15). It can innately cast the following spells, requiring no material components:\n\nat will: guidance, purify food and drink, speak with animals\n\n3/day each: charm person, cure wounds (2d8 + 5), daylight, faerie fire, heat metal, hypnotic pattern, tongues\n\n1/day each: geas, heal, reincarnate",
              },
              {
                name: 'Light of the World',
                desc:
                  "The firebird's feathers glow with a warm light. The creature sheds light as dim as a candle or as bright as a lantern. It always sheds light, and any feathers plucked from the creature continue to shed light as a torch.",
              },
              {
                name: 'Warming Presence',
                desc:
                  'The firebird and any creatures within a 5-foot radius are immune to the effects of natural, environmental cold. Invited into a home or building, a firebird can expand this warming presence to its inhabitants no matter how close they are to the creature.',
              },
            ],
            spell_list: [],
            img_main: null,
            document__slug: 'tob',
            document__title: 'Tome of Beasts OGL',
            document__license_url: 'http://open5e.com/legal',
          },
          {
            slug: 'terror-bird',
            name: 'Terror Bird',
            size: 'Large',
            type: 'beast',
            subtype: '',
            group: null,
            alignment: 'unaligned',
            armor_class: 12,
            armor_desc: 'natural armor',
            hit_points: 65,
            hit_dice: '10d8+20',
            speed: {
              walk: 50,
            },
            strength: 18,
            dexterity: 12,
            constitution: 14,
            intelligence: 3,
            wisdom: 12,
            charisma: 10,
            strength_save: null,
            dexterity_save: null,
            constitution_save: null,
            intelligence_save: null,
            wisdom_save: null,
            charisma_save: null,
            perception: 3,
            skills: {
              athletics: 6,
              perception: 3,
            },
            damage_vulnerabilities: '',
            damage_resistances: '',
            damage_immunities: '',
            condition_immunities: '',
            senses: 'darkvision 60 ft., passive Perception 13',
            languages: '-',
            challenge_rating: '2',
            actions: [
              {
                attack_bonus: 6,
                damage_dice: '3d6+4',
                desc:
                  'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) slashing damage. The target must succeed on a DC 12 Constitution saving throw or take 7 (2d6) slashing damage at the beginning of its next turn.',
                name: 'Serrated Beak',
              },
            ],
            reactions: '',
            legendary_desc: '',
            legendary_actions: '',
            special_abilities: [
              {
                desc:
                  "The terror bird has advantage on attack rolls against a creature if at least one of the bird's allies is within 5 feet of the creature and the ally isn't incapacitated.",
                name: 'Pack Tactics',
              },
              {
                desc:
                  'Terror birds who move at least 20 feet straight toward a target have advantage on the next attack roll against that target.',
                name: 'Passing Bite',
              },
            ],
            spell_list: [],
            img_main: null,
            document__slug: 'cc',
            document__title: 'Creature Codex OGL',
            document__license_url: 'http://open5e.com/legal',
          },
        ],
      },
    }),
  ),
}
