import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme } from "../../../stitches.config";
import Box from "../Box";
import Main from "./Main";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Main> = (args) => (
  <Main
    {...args}
    css={{
      backgroundColor: theme.colors.gray4,
    }}
  >
    Main content goes here
  </Main>
);

export const Simple = Template.bind({});

Simple.args = {
  padding: "lg",
};
