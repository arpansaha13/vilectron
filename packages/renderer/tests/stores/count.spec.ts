import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useCount } from '~/stores/count'

// https://pinia.vuejs.org/cookbook/testing.html#testing-stores

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCount()
    expect(counter.count).toBe(0)
    counter.count++
    expect(counter.count).toBe(1)
  })

  it('patches', () => {
    const counter = useCount()
    expect(counter.count).toBe(0)

    counter.$patch({
      count: 40,
    })
    expect(counter.count).toBe(40)
  })
})
