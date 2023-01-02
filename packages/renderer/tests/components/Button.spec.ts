import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Button from '~/components/Button.vue'

describe('Button.vue', () => {
  it('should render', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test Button',
      },
    })

    expect(wrapper.text()).toContain('Test Button')
  })
})
