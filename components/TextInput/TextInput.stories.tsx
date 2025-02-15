import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { TextInput } from "./";
import { TextInputProps } from "./types";

const meta = {
	title: "TextInput",
	component: TextInput,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof TextInput>;

export default meta;

const Template: StoryFn<TextInputProps> = (args) => {
	const [text, setText] = useState("");
	return <TextInput {...args} onChangeText={setText} value={text} />;
};

export const TextInputBasic = Template.bind({});
TextInputBasic.args = {};
