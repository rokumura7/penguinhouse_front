import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button.vue'

describe('Test for Button Basic.', () => {
  const fn = jest.fn()
  const wrapper = mount(Button, {
    propsData: {
      label: 'test',
      onClick: fn,
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-gray-500 hover:bg-gray-600 text-white py-2 px-3 rounded"> test </button>'
    )
  })

  it('calls method by clicking button', () => {
    wrapper.trigger('click')
    expect(fn).toBeCalled()
  })
})

describe.each([
  ['default', ['bg-gray-500', 'hover:bg-gray-600', 'text-white']],
  ['primary', ['bg-indigo-500', 'hover:bg-indigo-600', 'text-white']],
  ['success', ['bg-green-500', 'hover:bg-green-600', 'text-white']],
  ['warning', ['bg-yellow-500', 'hover:bg-yellow-600', 'text-white']],
  ['danger', ['bg-red-500', 'hover:bg-red-600', 'text-white']],
])('Test for Button Color: %s', (color, expected) => {
  const button = mount(Button, {
    propsData: {
      label: 'test',
      color,
    },
  })
  it(`component has the correct classes: color = ${color}`, () => {
    expected.forEach((className) =>
      expect(button.classes()).toContain(className)
    )
  })
})

describe.each([
  ['normal', ['py-2', 'px-3']],
  ['small', ['py-1', 'px-2', 'text-sm']],
])('Test for Button Size. %s', (size, expected) => {
  const button = mount(Button, {
    propsData: {
      label: 'test',
      size,
    },
  })
  it(`component has the correct classes: size = ${size}`, () => {
    expected.forEach((className) =>
      expect(button.classes()).toContain(className)
    )
  })
})

describe('Test for Button Rounded.', () => {
  const normal = mount(Button, {
    propsData: {
      label: 'test',
      roundFull: true,
    },
  })

  it('component has the correct classes: roundFull = true', () => {
    expect(normal.classes()).toContain('rounded-full')
  })
})
