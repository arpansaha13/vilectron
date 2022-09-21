import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import { Tab } from '@headlessui/vue'
import Navbar from '~/components/Navbar.vue'

const mockRoute = {
  path: '/',
}
const mockRouter = {
  push: vi.fn(),
}

describe('Navbar.vue', () => {
  it('should render', () => {
    const wrapper = mount(Navbar, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })

    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Theme')
  })

  it('should be interactive', async () => {
    const wrapper = mount(Navbar, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })

    const navTabs = wrapper.findAllComponents(Tab)
    expect(navTabs.length).toBe(2)

    let i = 1
    for (const tab of navTabs) {
      const text = tab.text()

      tab.trigger('click')
      expect(mockRouter.push).toHaveBeenCalledTimes(i++)

      switch (text) {
        case 'Home':
          expect(mockRouter.push).toHaveBeenCalledWith('/')
          break
        case 'Theme':
          expect(mockRouter.push).toHaveBeenCalledWith('/theme')
          break
      }
    }
  })
})
