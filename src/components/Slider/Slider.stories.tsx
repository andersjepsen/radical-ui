import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Slider from "./Slider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  defaultValue: [50],
  max: 100,
  step: 1,
  color: "warning",
  orientation: "horizontal",
};
