import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Header
    {...args}
    css={{
      backgroundColor: "red",
    }}
  >
    <Box css={{ backgroundColor: "blue" }} padding="md" />
    <Box css={{ backgroundColor: "yellow" }} padding="md" />
  </Header>
);

export const Primary = Template.bind({});

Primary.args = {
  padding: "lg",
};
