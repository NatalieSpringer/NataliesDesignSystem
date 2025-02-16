import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { Divider } from ".";

const meta = {
	title: "Divider",
	component: Divider,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		description: "This is a description of a Divider component",
		onPress: action("onPress"),
		title: "Title"
	}
};
