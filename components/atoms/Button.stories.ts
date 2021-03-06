import { Args, ArgTypes } from '@storybook/addons/dist/types'
import { Button } from '@/components/atoms'
import { colors } from '@/plugins/Colors'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    roundFull: {
      control: 'boolean',
    },
    label: {
      control: 'text',
      defaultValue: 'Button',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal'],
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
