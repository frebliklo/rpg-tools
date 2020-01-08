import Axios, { AxiosResponse } from 'axios'

import { MONSTERS_BASE_URL } from './constants'
import { ApiResponse } from './types/ApiResponse.interface'
import { Monster } from './types/Monster.interface'

type MonsterResponse = ApiResponse<Monster>

export class Open5eMonster {
  private baseUrl: string = MONSTERS_BASE_URL

  async getMonstersByName(name: string): Promise<Monster[]> {
    const { data }: AxiosResponse<MonsterResponse> = await Axios.get(
      `${this.baseUrl}?search=${name}`,
    )

    return data.results
  }

  async getMonsterBySlug(slug: string): Promise<Monster> {
    const { data }: AxiosResponse<Monster> = await Axios.get(this.baseUrl + slug)

    return data
  }
}
