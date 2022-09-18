import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import Footer from "./Footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer
    {...args}
    css={{
      backgroundColor: "red",
    }}
  >
    <Box css={{ backgroundColor: "blue" }} padding="md" />
    <Box css={{ backgroundColor: "yellow" }} padding="md" />
  </Footer>
);

export const Primary = Template.bind({});

Primary.args = {
  padding: "lg",
};
