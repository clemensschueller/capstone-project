import React from 'react'
import ListPage from './ListPage'
export default {
  title: 'ListPage',
  component: ListPage,
}

const Template = args => <ListPage {...args} />

export const Default = Template.bind({})
Default.args = {}
