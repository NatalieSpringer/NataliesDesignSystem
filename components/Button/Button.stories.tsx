import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { Button } from ".";

const meta = {
	title: "Button",
	component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		onPress: action("onPress"),
		variant: "primary"
	}
};

export const PrimaryDisabled: Story = {
	args: {
		disabled: true,
		onPress: action("onPress"),
		variant: "primary"
	}
};

export const Secondary: Story = {
	args: {
		onPress: action("onPress"),
		variant: "secondary"
	}
};

export const SecondaryDisabled: Story = {
	args: {
		disabled: true,
		onPress: action("onPress"),
		variant: "secondary"
	}
};

export const Tertiary: Story = {
	args: {
		onPress: action("onPress"),
		variant: "tertiary"
	}
};

export const TertiaryDisabled: Story = {
	args: {
		disabled: true,
		onPress: action("onPress"),
		variant: "tertiary"
	}
};
