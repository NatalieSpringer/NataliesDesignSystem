import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Icon } from ".";

const meta = {
	title: "Icon",
	component: Icon,
	decorators: [
		(Story) => (
			<View style={{ alignSelf: "center", marginTop: "10%" }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoIcon: Story = {
	args: {
		name: "checkmark",
		size: 24,
		color: "green",
	}
};
