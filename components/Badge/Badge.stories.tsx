import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { Badge } from ".";

const meta = {
	title: "Badge",
	component: Badge,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		text: "1"
	}
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		text: "1"
	}
};

export const PrimaryIcon: Story = {
	args: {
		variant: "primary",
		name: "check"
	}
};

export const SecondaryIcon: Story = {
	args: {
		variant: "secondary",
		name: "check"
	}
};
