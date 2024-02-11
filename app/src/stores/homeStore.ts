import { ref } from 'vue'
import { defineStore } from 'pinia'
import { homeApi } from '../axios/instances/homeApi'

export const useHomeStore = defineStore('home', () => {
  const name = ref<string>('')

  async function getRandomName(): Promise<void> {
    name.value = await homeApi.getRandomName()
  }

  return {
    name,
    getRandomName,
  }
})
