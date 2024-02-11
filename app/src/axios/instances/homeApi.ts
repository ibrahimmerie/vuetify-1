import axios from 'axios'

export default class HomeApi {
  public async getRandomName(): Promise<string> {
    const resp = await axios.get('https://randomuser.me/api/')
    const people = resp.data.results.map((person: any) => {
      return `${person.name.title}. ${person.name.first} ${person.name.last}`
    })

    return String(people[0])
  }
}

export const homeApi = new HomeApi()
