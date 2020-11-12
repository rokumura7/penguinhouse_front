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
      '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-2 px-3 rounded"> test </button>'
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
    '<button class="font-semibold bg-blue-500 text-white py-2 px-3 rounded"> test </button>',
  ],
  [
    'warning',
    '<button class="font-semibold bg-yellow-500 text-white py-2 px-3 rounded"> test </button>',
  ],
  [
    'danger',
    '<button class="font-semibold bg-red-500 text-white py-2 px-3 rounded"> test </button>',
  ],
  [
    'black',
    '<button class="font-semibold bg-gray-900 text-gray-100 hover:bg-gray-900 py-2 px-3 rounded"> test </button>',
  ],
])('Test for Button Color: %i', (type, expected) => {
  const button = mount(Button, {
    propsData: {
      label: 'test',
      type,
    },
  })
  it(`renders the correct markup: color = ${type}`, () => {
    expect(button.html().replace(/\s+/g, ' ')).toBe(expected)
  })
})

describe.each([
  [
    'normal',
    '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-2 px-3 rounded"> test </button>',
  ],
  [
    'small',
    '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-1 px-2 text-sm rounded"> test </button>',
  ],
])('Test for Button Size. %i', (size, expected) => {
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
      '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-2 px-3 rounded-full"> test </button>'
    )
  })
})
