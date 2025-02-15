import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Text } from ".";

const meta = {
	title: "Text",
	component: Text,
	decorators: [
		(Story) => (
			<View style={{ alignSelf: "center", marginTop: "10%" }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		children: "Hello world",
		size: "s"
	}
};

export const SmallBold: Story = {
	args: {
		children: "Hello world",
		size: "s",
		weight: "bold"
	}
};

export const Medium: Story = {
	args: {
		children: "Hello world",
		size: "m"
	}
};

export const Large: Story = {
	args: {
		children: "Hello world",
		size: "l"
	}
};

export const ExtraLarge: Story = {
	args: {
		children: "Hello world",
		size: "xl"
	}
};
