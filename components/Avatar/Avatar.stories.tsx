import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Avatar } from ".";

const meta = {
	title: "Avatar",
	component: Avatar,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		size: "s",
		source: "https://picsum.photos/seed/696/3000/2000"
	}
};

export const Medium: Story = {
	args: {
		size: "m",
		source: "https://picsum.photos/seed/696/3000/2000"
	}
};

export const Large: Story = {
	args: {
		size: "l",
		source: "https://picsum.photos/seed/696/3000/2000"
	}
};
