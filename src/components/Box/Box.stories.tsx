import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme } from "../../../stitches.config";
import Box from "./Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    padding="lg"
    gap="md"
    direction="row"
    width="full"
    {...args}
    css={{
      backgroundColor: theme.colors.gray6,
    }}
  >
    <Box
      padding="sm"
      css={{ backgroundColor: theme.colors.gray9 }}
      width="1quart"
    />
    <Box
      padding="md"
      css={{ backgroundColor: theme.colors.gray11 }}
      width="3quarts"
    />
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {};
