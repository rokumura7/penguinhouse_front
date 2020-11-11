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

describe('Test for Button Color.', () => {
  const primary = mount(Button, {
    propsData: {
      label: 'test',
      type: 'primary',
    },
  })

  it('renders the correct markup: color = primary', () => {
    expect(primary.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-blue-500 text-white py-2 px-3 rounded"> test </button>'
    )
  })

  const warning = mount(Button, {
    propsData: {
      label: 'test',
      type: 'warning',
    },
  })

  it('renders the correct markup: color = warning', () => {
    expect(warning.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-yellow-500 text-white py-2 px-3 rounded"> test </button>'
    )
  })

  const danger = mount(Button, {
    propsData: {
      label: 'test',
      type: 'danger',
    },
  })

  it('renders the correct markup: color = danger', () => {
    expect(danger.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-red-500 text-white py-2 px-3 rounded"> test </button>'
    )
  })

  const black = mount(Button, {
    propsData: {
      label: 'test',
      type: 'black',
    },
  })

  it('renders the correct markup: color = black', () => {
    expect(black.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-gray-900 text-gray-100 hover:bg-gray-900 py-2 px-3 rounded"> test </button>'
    )
  })
})

describe('Test for Button Size.', () => {
  const normal = mount(Button, {
    propsData: {
      label: 'test',
      size: 'normal',
    },
  })

  it('renders the correct markup: size = normal', () => {
    expect(normal.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-2 px-3 rounded"> test </button>'
    )
  })

  const small = mount(Button, {
    propsData: {
      label: 'test',
      size: 'small',
    },
  })

  it('renders the correct markup: size = small', () => {
    expect(small.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-1 px-2 text-sm rounded"> test </button>'
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

  it('renders the correct markup: roundFull = true', () => {
    expect(normal.html().replace(/\s+/g, ' ')).toBe(
      '<button class="font-semibold bg-white text-gray-800 border-gray-400 border py-2 px-3 rounded-full"> test </button>'
    )
  })
})
