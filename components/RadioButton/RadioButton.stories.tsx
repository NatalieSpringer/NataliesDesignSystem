import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { RadioButton } from "./";
import { RadioButtonProps } from "./types";

const meta = {
	title: "RadioButton",
	component: RadioButton,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof RadioButton>;

export default meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
	const [selected, setSelected] = useState(false);
	return <RadioButton {...args} onPress={setSelected} selected={selected} />;
};

export const Small = Template.bind({});
Small.args = {
	size: "s"
};

export const Medium = Template.bind({});
Medium.args = {
	size: "m"
};

export const Large = Template.bind({});
Large.args = {
	size: "l"
};
