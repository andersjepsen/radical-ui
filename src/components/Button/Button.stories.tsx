import { EnvelopeClosedIcon, TrashIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Controls/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Set = ({
  color,
}: {
  color: "default" | "primary" | "success" | "error" | "warning";
}) => {
  return (
    <Box direction="row" padding="md">
      <Button color={color}>Click me!</Button>
      <Button icon={<TrashIcon />} color={color}>
        Delete
      </Button>
      <Button icon={<TrashIcon />} iconPosition="end" color={color}>
        Delete
      </Button>
      <Button icon={<EnvelopeClosedIcon />} color={color} />
    </Box>
  );
};

const colors = ["default", "primary", "success", "error", "warning"];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = () => (
  <>
    {colors.map((color) => (
      <Set color={color as any} />
    ))}
  </>
);

export const Primary = Template.bind({});

Primary.args = {};
