import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Tag } from ".";
import { action } from "@storybook/addon-actions";

const meta = {
	title: "Tag",
	component: Tag,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: "Primary",
		variant: "primary"
	}
};

export const PrimaryWithPress: Story = {
	args: {
		onPress: action("Pressed"),
		text: "Primary",
		variant: "primary"
	}
};

export const Secondary: Story = {
	args: {
		text: "Secondary",
		variant: "secondary"
	}
};
