import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Text } from "../Text";
import { List } from ".";
import { ListItem } from "./ListItem";
import { Button } from "../Button";
import { Toggle } from "../Toggle";

const meta = {
	title: "List",
	component: List,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: (
			<>
				<List.Item>
					<ListItem.Left>
						<Text size="m">Left Text</Text>
					</ListItem.Left>
					<ListItem.Right>
						<View style={{ width: "100%" }}>
							<Button
								onPress={() => {}}
								text="123"
								variant="primary"
							/>
						</View>
					</ListItem.Right>
				</List.Item>
				<List.Item>
					<ListItem.Left>
						<Text size="m">Left Text</Text>
					</ListItem.Left>
					<ListItem.Right>
						<Toggle onValueChange={() => {}} value />
					</ListItem.Right>
				</List.Item>
			</>
		)
	}
};
