import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Progress from "./Progress";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Primary = Template.bind({});

Primary.args = { value: 66, max: 100, color: "success" };
