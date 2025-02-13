import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { SegmentedControl } from "./";

const meta = {
	title: "SegmentedControl",
	component: SegmentedControl,
	args: {
		text: "Hello world"
	},
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		onPress: action("onPress")
	}
};
