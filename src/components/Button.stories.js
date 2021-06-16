import PropTypes from 'prop-types'
import Button from './Button'
export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}
