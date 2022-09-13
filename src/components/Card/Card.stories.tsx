import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} css={{ width: "300px" }}>
    <Card.Header>An enticing header</Card.Header>
    <Card.Content>Exiting content</Card.Content>
    <Card.Footer>Footer stuff</Card.Footer>
  </Card>
);

export const Primary = Template.bind({});

Primary.args = {
  padding: "md",
};
