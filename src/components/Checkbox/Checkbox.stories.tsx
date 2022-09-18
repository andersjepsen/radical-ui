import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});

Primary.args = { label: "Click me!", id: "test", disabled: false };
