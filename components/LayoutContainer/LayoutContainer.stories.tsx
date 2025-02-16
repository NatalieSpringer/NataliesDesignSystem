import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LayoutContainer } from ".";
import { Text } from "../Text";

const meta = {
	title: "LayoutContainer",
	component: LayoutContainer,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof LayoutContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: (
			<>
				<Text size="m" weight="bold">
					This is a Layout Container
				</Text>
				<Text size="s">This is a Layout Container</Text>
			</>
		)
	}
};
