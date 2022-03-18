import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCount = defineStore('count', () => {
  const count = ref(0)

  return {
    count,
  }
})
