import { mount } from '@vue/test-utils'
import Input from '@/components/atoms/Input.vue'

describe('Test for Input.', () => {
  const wrapper = mount(Input, {
    propsData: {
      type: 'text',
    },
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has a input', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html().replace(/\s+/g, ' ')).toBe(
      '<input placeholder="" type="text" class="shadow border rounded w-full px-2 py-1 focus:outline-none focus:shadow-outline">'
    )
  })
})
