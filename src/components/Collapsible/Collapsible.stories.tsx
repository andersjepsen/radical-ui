import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Card from "../Card";
import Collapsible from "./Collapsible";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utilities/Collapsible",
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapsible> = (args) => (
  <Collapsible {...args}>
    <Collapsible.Trigger asChild>
      <p>Click me to show more</p>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Card padding="sm">hello darkness my old friend</Card>
    </Collapsible.Content>
  </Collapsible>
);

export const Primary = Template.bind({});

Primary.args = {};
