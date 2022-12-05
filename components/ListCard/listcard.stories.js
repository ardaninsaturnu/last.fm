import ListCard from "./index";

export default {
  title: "List Card"
}

const Template = arguments_ => <ListCard {...arguments_} />

export const Primary = Template.bind({})

Primary.args ={
  dataUri : '',
  listTitle : 'Top Something List',
  theme : 'dark'
}