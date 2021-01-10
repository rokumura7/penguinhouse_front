import { Args, ArgTypes } from '@storybook/addons/dist/types'
import { Card } from '@/components/molecules'
export default {
  title: 'Card',
  component: CanvasRenderingContext2D,
}

const Template = (_args: Args, { argTypes }: ArgTypes) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: '<Card v-bind="$props" />',
})

export const Create = Template.bind({})
Create.args = {
  isCreate: true,
}

export const Default = Template.bind({})
Default.args = {
  content: {
    id: '1',
    title: 'Task Title',
    description:
      'description description description description description description description description description description description description description description description description description',
    tags: [1, 2, 3, 4, 5],
    updatedBy: 'lilycoco',
    updatedAt: '2021/01/10',
  },
}
