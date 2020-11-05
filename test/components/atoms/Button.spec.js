import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button.vue'

describe('Button', () => {
  const fn = jest.fn()
  const wrapper = mount(Button, {
    propsData: {
      label: 'test',
      size: 'small',
      type: 'primary',
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
      '<button class="font-semibold bg-blue-500 text-white py-1 px-2 text-sm rounded"> test </button>'
    )
  })

  it('calls method by clicking button', () => {
    wrapper.trigger('click')
    expect(fn).toBeCalled()
  })
})
