import { mount } from '@vue/test-utils'
import { Chip } from '@/components/atoms'

describe('Test for Button Basic.', () => {
  const wrapper = mount(Chip, {
    propsData: {
      label: 'test',
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has a span', () => {
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html().replace(/\s+/g, ' ')).toBe(
      '<span class="text-white rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 bg-indigo-500"> test </span>'
    )
  })
})
