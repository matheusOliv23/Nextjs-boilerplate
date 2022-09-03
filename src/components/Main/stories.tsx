import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Main from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Main",
  component: Main,
  args: {
    title: "Boilerplate",
    description: "Typescript, Reactjs, Nextjs, Styled Components"
  },
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Main>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  title: "Boilerplate",
  description: "Typescript, Reactjs, Nextjs, Styled Components"
}
