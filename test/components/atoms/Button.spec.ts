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
  [
    'primary',
    '<button class="font-semibold bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-3 rounded"> test </button>',
  ],
  [
    'warning',
    '<button class="font-semibold bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded"> test </button>',
  ],
])('Test for Button Color: %s', (color, expected) => {
  const button = mount(Button, {
    propsData: {
      label: 'test',
      color,
    },
  })
  it(`renders the correct markup: color = ${color}`, () => {
    expect(button.html().replace(/\s+/g, ' ')).toBe(expected)
  })
})

describe.each([
  [
    'normal',
    '<button class="font-semibold bg-gray-500 hover:bg-gray-600 text-white py-2 px-3 rounded"> test </button>',
  ],
  [
    'small',
    '<button class="font-semibold bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 text-sm rounded"> test </button>',
  ],
])('Test for Button Size. %s', (size, expected) => {
  const button = mount(Button, {
    propsData: {
      label: 'test',
      size,
    },
  })
  it(`renders the correct markup: size = ${size}`, () => {
    expect(button.html().replace(/\s+/g, ' ')).toBe(expected)
  })
})

describe('Test for Button Rounded.', () => {
  const normal = mount(Button, {
    propsData: {
      label: 'test',
      roundFull: true,
    },
  })

  it('renders the correct markup: roundFull = true', () => {
    expect(normal.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-gray-500 hover:bg-gray-600 text-white py-2 px-3 rounded-full"> test </button>'
    )
  })
})
