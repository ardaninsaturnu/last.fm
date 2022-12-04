import ArtistCard from './index';

export default {
  title: "Artist Card"
}

const Template = arguments_ => <ArtistCard {...arguments_} />

export const Dark = Template.bind({})
Dark.args = {
  theme : 'dark',
  artistName: 'Daft Punk',
  listeners: 0,
  playCount: 0
}

export const Light = Template.bind({})
Light.args = {
  theme : 'light',
  artistName: 'Coldplay',
  listeners: 0,
  playCount: 0
}


