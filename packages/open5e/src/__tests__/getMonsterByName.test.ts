import Axios from 'axios'
import { Open5eMonster } from '../index'

jest.mock('axios')
const mockAxios = Axios as jest.Mocked<typeof Axios>

describe('Monsters by name', () => {
  const monsterApi = new Open5eMonster()

  it('should call axios correctly', async () => {
    await monsterApi.getMonstersByName('bird')

    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://api.open5e.com/monsters/?search=bird')
  })

  it('should return correct values', async () => {
    const response = await monsterApi.getMonstersByName('bird')

    expect(response.count).toBe(2)
    expect(response.url).toBe('https://api.open5e.com/monsters/?search=bird')
    expect(response.monsters.length).toBe(2)
    expect(response.monsters[0].skills).toEqual({
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
