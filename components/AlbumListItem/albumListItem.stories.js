import AlbumListItem from './index';

export default {
  title: "Album list item"
}

const Template = arguments_ => <AlbumListItem {...arguments_} />

export const Primary = Template.bind({})

Primary.args ={
}