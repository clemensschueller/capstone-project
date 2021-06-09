import React from 'react'
import Cards from './Card'

export default {
  title: 'Cards',
  component: Cards,
}

const Template = args => <Cards {...args} />

export const Default = Template.bind({})
Default.args = {}
