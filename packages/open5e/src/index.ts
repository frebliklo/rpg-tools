import Axios, { AxiosResponse } from 'axios'

import { MONSTERS_BASE_URL } from './constants'
import { IApiResponse } from './types/IApiResponse'
import { IMonster } from './types/IMonster'

export class Open5eMonster {
  private baseUrl: string = MONSTERS_BASE_URL

  async getMonstersByName(name: string): Promise<IMonster[]> {
    const { data }: AxiosResponse<IApiResponse<IMonster>> = await Axios.get(
      `${this.baseUrl}?search=${name}`
    )

    return data.results
  }

  async getMonsterBySlug(slug: string): Promise<IMonster> {
    const { data }: AxiosResponse<IMonster> = await Axios.get(
      this.baseUrl + slug
    )

    return data
  }
}
