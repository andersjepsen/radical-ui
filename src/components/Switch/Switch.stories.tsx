import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Switch from "./Switch";
import Box from "../Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = () => (
  <>
    <Box padding="sm">
      <Switch />
    </Box>
    <Box padding="sm">
      <Switch color="primary" />
    </Box>
    <Box padding="sm">
      <Switch color="success" />
    </Box>
    <Box padding="sm">
      <Switch color="warning" />
    </Box>
    <Box padding="sm">
      <Switch color="error" />
    </Box>
  </>
);

export const Primary = Template.bind({});

Primary.args = {};
