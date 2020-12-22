import { Args, ArgTypes } from '@storybook/addons/dist/types'
import Button from '@/components/atoms/Button.vue'
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'warning', 'dander'],
      },
      defaultValue: 'default',
    },
    roundFull: { control: 'boolean' },
    label: {
      control: 'text',
      defaultValue: 'Button',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal'],
        defaultValue: 'normal',
      },
    },
    onClick: {
      action: 'click',
    },
  },
}

export const button = (_arg: Args, { argTypes }: ArgTypes) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
})
