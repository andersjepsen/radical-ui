import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme } from "../../../stitches.config";
import Avatar from "../Avatar";
import Box from "../Box";
import Header from "./Header";
import Text from "../Text";
import Navigation from "../Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Header
    padding="lg"
    justifyContent="between"
    css={{
      backgroundColor: theme.colors.gray3,
    }}
    {...args}
  >
    <Box direction="row" gap="lg" alignItems="center">
      <Avatar alt="John Doe" src="https://i.pravatar.cc/100" size="md" />
      <Text size="lg" weight="bolder">
        John Doe
      </Text>
    </Box>
    <Navigation>
      <Navigation.List>
        <Navigation.Item>
          <Navigation.Link href="#">Home</Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link href="#">Portfolio</Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link href="#">About</Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link href="#">Contact</Navigation.Link>
        </Navigation.Item>
      </Navigation.List>
    </Navigation>
  </Header>
);

export const Primary = Template.bind({});

Primary.args = {};
