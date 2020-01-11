import Axios, { AxiosResponse } from 'axios'

import { MONSTERS_BASE_URL } from './constants'
import { ApiResponse } from './types/ApiResponse.interface'
import { Monster } from './types/Monster.interface'

type MonsterResponse = ApiResponse<Monster>

type MonsterByNameResponse = {
  count: number
  url: string
  monsters: Monster[]
}

export class Open5eMonster {
  private baseUrl: string = MONSTERS_BASE_URL

  async getMonstersByName(name: string, take = 10): Promise<MonsterByNameResponse> {
    const url = `${this.baseUrl}?search=${name}`

    const { data }: AxiosResponse<MonsterResponse> = await Axios.get(url)

    const monsters: Monster[] = []

    for (let i = 0; i < take - 1; i++) {
      monsters.push(data.results[i])
    }

    try {
      return {
        count: data.count,
        url,
        monsters,
      }
    } catch (error) {
      return error
    }
  }

  async getMonsterBySlug(slug: string): Promise<Monster> {
    const { data }: AxiosResponse<Monster> = await Axios.get(this.baseUrl + slug)

    try {
      return data
    } catch (error) {
      return error
    }
  }
}
