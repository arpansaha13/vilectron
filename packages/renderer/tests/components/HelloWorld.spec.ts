import { setActivePinia, createPinia } from 'pinia'

import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import Button from '~/components/Button.vue'
import HelloWorld from '~/components/HelloWorld.vue'
import { useCount } from '~/stores/count'

// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-components

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [
          createTestingPinia({
            // https://pinia.vuejs.org/cookbook/testing.html#specifying-the-createspy-function
            createSpy: vi.fn(),
          }),
        ],
      },
    })

    const button = wrapper.findComponent(Button)
    expect(button.exists()).toBeTruthy()
  })

  it('should be interactive', async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn(),
          }),
        ],
      },
    })
    const count = useCount()
    const button = wrapper.findComponent(Button)

    expect(count.count).toBe(0)
    button.trigger('click')
    expect(count.count).toBe(1)
  })
})
