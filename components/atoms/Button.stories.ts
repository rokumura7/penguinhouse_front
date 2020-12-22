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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const button = (arg: any, { argTypes }: any) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
})
