import PropTypes from 'prop-types'
import GalleryDetails from './GalleryDetails'

export default {
  title: 'GalleryDetails',
  component: GalleryDetails,
}

const Template = args => <GalleryDetails {...args} />

export const Default = Template.bind({})
Default.args = {}
