import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { Dialog } from ".";

const meta = {
	title: "Dialog",
	component: Dialog,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	//@ts-ignore
	args: {
		buttons: [
			{
				onPress: action("onPress 1"),
				text: "123"
			},
			{
				onPress: action("onPress 2"),
				text: "1234"
			}
		],
		variant: "primary"
	}
};

export const Secondary: Story = {
	//@ts-ignore
	args: {
		buttons: [
			{
				onPress: action("onPress 1"),
				text: "Button One"
			},
			{
				onPress: action("onPress 2"),
				text: "Button Two"
			},
			{
				onPress: action("onPress 3"),
				text: "Button Three"
			}
		],
		variant: "secondary"
	}
};
