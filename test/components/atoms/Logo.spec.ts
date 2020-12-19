import { mount } from '@vue/test-utils'
import Logo from '@/components/atoms/Logo.vue'

describe('Test for Logo Basic.', () => {
  const wrapper = mount(Logo, {
    propsData: {
      src: 'test',
    },
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has a span', () => {
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html().replace(/\s+/g, ' ')).toBe(
      '<div><img src="test" class="h-16"></div>'
    )
  })
})

describe.each([
  ['s', 'h-8'],
  ['l', 'h-24'],
])('Test for Logo Size: %s', (size, expected) => {
  const wrapper = mount(Logo, {
    propsData: {
      src: 'test',
      size,
    },
  })
  it(`component has the correct classes: size = ${size}`, () => {
    expect(wrapper.find('img').classes()).toContain(expected)
  })
})
