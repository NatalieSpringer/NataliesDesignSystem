import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { SegmentedControl } from "./";
import { SegmentedControlProps } from "./types";

const meta = {
	title: "SegmentedControl",
	component: SegmentedControl,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof SegmentedControl>;

export default meta;

const Template: StoryFn<SegmentedControlProps> = (args) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<SegmentedControl
			{...args}
			selectedIndex={selectedIndex}
			onPress={setSelectedIndex}
		/>
	);
};

export const SegmentedControlTwoItems = Template.bind({});
SegmentedControlTwoItems.args = {
	items: ["Item One", "Item Two"]
};

export const SegmentedControlThreeItems = Template.bind({});
SegmentedControlThreeItems.args = {
	items: ["Item One", "Item Two", "Item Three"]
};

export const SegmentedControlFourItems = Template.bind({});
SegmentedControlFourItems.args = {
	items: ["Item One", "Item Two", "Item Three", "Item Four"]
};
