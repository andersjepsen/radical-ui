import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Switch from "./Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});

Primary.args = { color: "error" };
