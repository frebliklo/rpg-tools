/* eslint-disable @typescript-eslint/camelcase */
import Axios from 'axios'
import { Open5eMonster } from '../index'

jest.mock('axios')
const mockAxios = Axios as jest.Mocked<typeof Axios>

describe('Monster by slug', () => {
  const slug = 'firebird'
  const monsterApi = new Open5eMonster()

  mockAxios.get.mockResolvedValue({
    data: {
      slug: 'firebird',
      name: 'Firebird',
      size: 'Small',
      type: 'celestial',
      subtype: '',
      group: null,
      alignment: 'neutral good',
      hit_points: 99,
      hit_dice: '18d6+36',
      skills: {
        acrobatics: 6,
        arcana: 5,
        insight: 4,
        medicine: 4,
        nature: 5,
        perception: 7,
        religion: 5,
      },
    },
  })

  it('should call axios correctly', async () => {
    await monsterApi.getMonsterBySlug(slug)

    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://api.open5e.com/monsters/firebird')
  })

  it('should return correct values', async () => {
    const response = await monsterApi.getMonsterBySlug(slug)

    expect(response.slug).toBe('firebird')
    expect(response.skills).toEqual({
      acrobatics: 6,
      arcana: 5,
      insight: 4,
      medicine: 4,
      nature: 5,
      perception: 7,
      religion: 5,
    })
  })
})
