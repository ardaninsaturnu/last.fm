import TrackListItem from './index';

export default {
  title: "Track list item"
}

const Template = arguments_ => <TrackListItem {...arguments_} />

export const Primary = Template.bind({})

Primary.args ={
}