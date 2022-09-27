import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme } from "../../../stitches.config";
import Box from "../Box";
import Footer from "./Footer";
import Text from "../Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer
    css={{
      backgroundColor: theme.colors.gray3,
    }}
    {...args}
  >
    <Box padding="md" gap="md">
      <Text size="md" weight="bold">
        About
      </Text>
      <Box gap="sm">
        <Text size="xs">Blog</Text>
        <Text size="xs">About</Text>
        <Text size="xs">Advertising</Text>
        <Text size="xs">Careers</Text>
      </Box>
    </Box>
    <Box padding="md" gap="md">
      <Text size="md" weight="bold">
        Help
      </Text>
      <Box gap="sm">
        <Text size="xs">Site rules</Text>
        <Text size="xs">Help center</Text>
        <Text size="xs">Contact us</Text>
      </Box>
    </Box>
  </Footer>
);

export const Primary = Template.bind({});

Primary.args = {
  padding: "lg",
};
