import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Toggle } from ".";
import { ToggleProps } from "./types";

const meta = {
	title: "Toggle",
	component: Toggle,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof Toggle>;

export default meta;

const Template: StoryFn<ToggleProps> = (args) => {
	const [value, setValue] = useState(true);
	return <Toggle {...args} onValueChange={setValue} value={value} />;
};

export const ToggleBasic = Template.bind({});
ToggleBasic.args = {};

export const ToggleDisabled = Template.bind({});
ToggleDisabled.args = {
	disabled: true
};
