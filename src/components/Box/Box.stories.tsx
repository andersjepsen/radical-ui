import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "./Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    {...args}
    css={{
      backgroundColor: "red",
    }}
  >
    <Box padding="sm" css={{ backgroundColor: "blue" }} />
    <Box padding="md" css={{ backgroundColor: "yellow" }} />
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  padding: "lg",
};
