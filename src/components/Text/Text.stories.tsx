import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Stitches } from "../../../stitches.config";
import Box from "../Box";
import Text from "./Text";

type Size = Stitches.VariantProps<typeof Text>["size"];

const sizes: Size[] = [
  "6xl",
  "5xl",
  "4xl",
  "3xl",
  "2xl",
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs",
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Type/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = () => (
  <>
    {sizes.map((size, i) => (
      <Box key={i}>
        <Text size={size}>{`Text ${size}`}</Text>
      </Box>
    ))}
  </>
);

export const All = Template.bind({});

All.args = {};
