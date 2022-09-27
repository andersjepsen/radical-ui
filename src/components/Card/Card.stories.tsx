import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Card from "./Card";
import Text from "../Text";
import Button from "../Button";
import Avatar from "../Avatar";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card padding="md" width="lg" gap="md" {...args}>
    <Card.Header direction="row" gap="md" alignItems="center">
      <Avatar alt="John Doe" />
      <Text size="lg" weight="bold">
        John Doe
      </Text>
    </Card.Header>
    <Card.Body>Exiting body</Card.Body>
    <Card.Footer justifyContent="end">
      <Button icon={<EnvelopeClosedIcon />} color="primary" />
    </Card.Footer>
  </Card>
);

export const Primary = Template.bind({});

Primary.args = {};
