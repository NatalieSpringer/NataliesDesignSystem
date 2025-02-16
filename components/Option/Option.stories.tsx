import type { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Option } from ".";
import { OptionProps } from "./types";
import { View } from "react-native";

const meta = {
	title: "Option",
	component: Option,
	decorators: [
		(Story) => (
			<View style={{ margin: 15 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Option>;

export default meta;

const Template: StoryFn<OptionProps> = (args) => {
	const [selected, setSelected] = useState(args.selected);
	return <Option {...args} selected={selected} onPress={setSelected} />;
};

export const NotSelected = Template.bind({});
NotSelected.args = {
	leftSubtitle: "Left Subtitle",
	leftTitle: "Left Title",
	onPress: action("onPress"),
	rightSubtitle: "Right Subtitle",
	rightTitle: "Right Title",
	selected: false
};

export const Selected = Template.bind({});
Selected.args = {
	leftSubtitle: "Left Subtitle",
	leftTitle: "Left Title",
	onPress: action("onPress"),
	rightSubtitle: "Right Subtitle",
	rightTitle: "Right Title",
	selected: true,
	showIcon: true
};
