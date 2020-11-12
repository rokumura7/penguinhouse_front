import { mount } from '@vue/test-utils'
import Logo from '@/components/atoms/Logo.vue'

describe('Test for Logo.', () => {
  const wrapper = mount(Logo, {
    propsData: {
      src: 'test.png',
    },
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has a img', () => {
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html().replace(/\s+/g, ' ')).toBe(
      '<div><img src="test.png" class="h-16"></div>'
    )
  })
})

describe.each([
  ['s', '<div><img src="test.png" class="h-8"></div>'],
  ['m', '<div><img src="test.png" class="h-16"></div>'],
  ['l', '<div><img src="test.png" class="h-24"></div>'],
])('Test for Logo Size: %i', (size, expected) => {
  const logo = mount(Logo, {
    propsData: {
      src: 'test.png',
      size,
    },
  })

  it(`renders the correct markup: size = ${size}`, () => {
    expect(logo.html().replace(/\s+/g, ' ')).toBe(expected)
  })
})
