import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Search } from ".";
import { SearchProps } from "./types";

const meta = {
	title: "Search",
	component: Search,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof Search>;

export default meta;

const Template: StoryFn<SearchProps> = (args) => {
	const [text, setText] = useState("");
	return <Search {...args} onChangeText={setText} value={text} />;
};

export const SearchBasic = Template.bind({});
SearchBasic.args = {};
