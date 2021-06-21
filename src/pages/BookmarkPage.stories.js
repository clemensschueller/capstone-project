import BookmarkPage from './BookmarkPage'
export default {
  title: 'BookmarkPage',
  component: BookmarkPage,
}

const Template = args => <BookmarkPage {...args} />

export const Default = Template.bind({})
Default.args = {}
